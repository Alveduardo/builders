import React from 'react';
import { StyleSheet } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';

import Button from '../';
import { BUTTON } from '../Button-consts';
import { ButtonKind, ButtonSize } from '../Button-types';

import { COLORS } from '../../../utils/colors/colors-consts';

const label = 'Button label';

const describeEachSize = [
  {
    size: 'regular',
    sizeHeight: 50,
  },
];

const describeEachKind = [
  {
    kind: 'primary',
    kindBackgroundColor: COLORS.SECONDARY,
    kindTextColor: '#FFF',
  },
  {
    kind: 'secondary',
    kindBackgroundColor: 'transparent',
    kindTextColor: COLORS.SECONDARY,
    kindBorderColor: COLORS.SECONDARY,
    kindBorderWidth: 3,
  },
];

describe('Button ->', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(jest.fn());
  });

  describe('Snapshot ->', () => {
    it('Deve corresponder ao componente com as props default', () => {
      const tree = render(<Button label={label} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('Deve corresponder ao componente com as props mais utilizadas', () => {
      const tree = render(<Button label={label} onPress={jest.fn()} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Props ->', () => {
    describe('disabled ->', () => {
      describe('false ->', () => {
        it('Deve chamar a função onPress quando a prop disabled for false', () => {
          const onPress = jest.fn();

          const { getByText } = render(<Button label={label} onPress={onPress} />);

          const button = getByText(label);

          fireEvent(button, 'onPress');
          expect(onPress).toHaveBeenCalledTimes(1);
        });
      });

      describe('true ->', () => {
        it('Não deve chamar a função onPress quando a prop disabled for true', () => {
          const onPress = jest.fn();

          const { getByText } = render(<Button label={label} onPress={onPress} disabled />);

          const button = getByText(label);

          fireEvent(button, 'onPress');
          expect(onPress).not.toHaveBeenCalled();
        });
      });
    });
    describe('size ->', () => {
      describe.each(describeEachSize)('Deve ter estilo correto para cada valor de size ->', ({ size, sizeHeight }) => {
        it(`${size}`, () => {
          const { getByTestId } = render(<Button label={label} size={size as ButtonSize} />);
          const containerStyle = StyleSheet.flatten(getByTestId(BUTTON.TEST_ID.CONTAINER).props.style);
          expect(containerStyle.height).toBe(sizeHeight);
        });
      });
    });
    describe('kind ->', () => {
      describe.each(describeEachKind)(
        'Deve ter estilo correto para cada valor de kind ->',
        ({ kind, kindBackgroundColor, kindTextColor, kindBorderColor, kindBorderWidth }) => {
          it(`${kind}`, () => {
            const { getByTestId, getByText } = render(<Button label={label} kind={kind as ButtonKind} />);
            const componentStyle = StyleSheet.flatten(getByTestId(BUTTON.TEST_ID.CONTAINER).props.style);

            expect(componentStyle.backgroundColor).toBe(kindBackgroundColor);
            expect(componentStyle.borderColor).toBe(kindBorderColor);
            expect(componentStyle.borderWidth).toBe(kindBorderWidth);

            const textComponentStyles = StyleSheet.flatten(getByText(label).props.style);
            expect(textComponentStyles.color).toBe(kindTextColor);
          });
        },
      );
    });
    describe('width ->', () => {
      it('Deve sobrescrever o width default caso a prop for passada', () => {
        const width = 200;
        const { getByTestId } = render(<Button label={label} width={width} />);
        const componentStyle = StyleSheet.flatten(getByTestId(BUTTON.TEST_ID.CONTAINER).props.style);
        expect(componentStyle.width).toBe(width);
      });
    });
  });
});
