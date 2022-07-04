import React from 'react';
import { render } from '@testing-library/react-native';
import Label from '../Label';
import { LabelSize } from '../Label-types';
import { StyleSheet } from 'react-native';
import { LABEL } from '../Label-consts';

const CONTENT = 'txt example';

const describeEachSize = [
  {
    size: 'xxSmall',
    fontSize: 12,
  },
  {
    size: 'xSmall',
    fontSize: 14,
  },
  {
    size: 'small',
    fontSize: 16,
  },
  {
    size: 'regular',
    fontSize: 18,
  },
  {
    size: 'large',
    fontSize: 24,
  },
  {
    size: 'xLarge',
    fontSize: 32,
  },
  {
    size: 'xxLarge',
    fontSize: 48,
  },
  {
    size: 'xxxLarge',
    fontSize: 64,
  },
  {
    size: 'display',
    fontSize: 84,
  },
];

describe('Label ->', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(jest.fn());
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  afterAll(() => {
    jest.resetAllMocks();
  });

  describe('Snapshot ->', () => {
    it('Deve corresponder ao componente com as props default', () => {
      const tree = render(<Label>{CONTENT}</Label>).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('Deve corresponder ao componente com as props mais utilizadas', () => {
      const tree = render(
        <Label size='regular' color='#FF0000'>
          {CONTENT}
        </Label>,
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('props ->', () => {
    describe('color ->', () => {
      it('Deve renderizar o componente alterando a prop color', () => {
        const color = '#FF0000';

        const { getByTestId } = render(<Label {...{ color }}>{CONTENT}</Label>);

        const containerStyle = StyleSheet.flatten(getByTestId(LABEL.TEST_ID.CONTAINER).props.style);

        expect(containerStyle.color).toBe(color);
      });
    });
    describe('size ->', () => {
      describe.each(describeEachSize)('Para cada valor de size ->', ({ size, fontSize }) => {
        it(`Deve ter o valor de ${fontSize} de acordo com a prop ${size}`, () => {
          const { getByTestId } = render(<Label size={size as LabelSize}>{CONTENT}</Label>);

          const containerStyle = StyleSheet.flatten(getByTestId(LABEL.TEST_ID.CONTAINER).props.style);
          expect(containerStyle.fontSize).toBe(fontSize);
        });
      });
    });
    describe('children ->', () => {
      it('Deve renderizar o componente exibindo o children', () => {
        const color = '#FF0000';

        const { getByTestId } = render(<Label {...{ color }}>{CONTENT}</Label>);

        const componente = getByTestId(LABEL.TEST_ID.CONTAINER).props;

        expect(componente.children).toEqual(CONTENT);
      });
    });
  });
});
