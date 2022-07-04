import React from 'react';
import { render } from '@testing-library/react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import IconButton from '../IconButton';
import { ICON_BUTTON } from '../IconButton-consts';
import { IconButtonSize } from '../IconButton-types';

const iconButtonPropsDefault = {
  type: AntDesign,
  name: 'home',
};

const describeEachSize = [
  {
    size: 'xxxSmall',
    iconSize: 16,
  },
  {
    size: 'xxSmall',
    iconSize: 20,
  },
  {
    size: 'xSmall',
    iconSize: 28,
  },
  {
    size: 'small',
    iconSize: 32,
  },
  {
    size: 'regular',
    iconSize: 48,
  },
  {
    size: 'large',
    iconSize: 64,
  },
];

describe('IconButton ->', () => {
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
      const tree = render(<IconButton {...iconButtonPropsDefault} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('Deve corresponder ao componente com as props mais utilizadas', () => {
      const tree = render(<IconButton {...iconButtonPropsDefault} color={'#FF0000'} size={'regular'} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('props ->', () => {
    describe('loading ->', () => {
      describe('true ->', () => {
        it(`Deve renderizar o componente de acordo com a prop loading = true`, () => {
          jest.spyOn(React, 'useState').mockImplementationOnce(() => [true, () => {}]);

          const { queryByTestId } = render(<IconButton {...iconButtonPropsDefault} />);

          const componentActivityIndicator = queryByTestId(ICON_BUTTON.TEST_ID.ACTIVITY_INDICATOR);
          const componentIcon = queryByTestId(ICON_BUTTON.TEST_ID.ICON);

          expect(componentActivityIndicator).toBeDefined();
          expect(componentIcon).toBeNull();
        });
      });
      describe('false ->', () => {
        it(`Deve renderizar o componente de acordo com a prop loading = false`, () => {
          const { queryByTestId } = render(<IconButton {...iconButtonPropsDefault} />);

          const componentActivityIndicator = queryByTestId(ICON_BUTTON.TEST_ID.ACTIVITY_INDICATOR);
          const componentIcon = queryByTestId(ICON_BUTTON.TEST_ID.ICON);

          expect(componentActivityIndicator).toBeNull();
          expect(componentIcon).toBeDefined();
        });
      });
    });
    describe('color ->', () => {
      it('Deve renderizar o componente alterando a prop color', () => {
        const color = '#FF0000';

        const { getByTestId } = render(<IconButton {...iconButtonPropsDefault} {...{ color }} />);

        const containerStyle = getByTestId(ICON_BUTTON.TEST_ID.ICON).props.style;

        expect(containerStyle[0].color).toBe(color);
      });
    });
    describe('size ->', () => {
      describe.each(describeEachSize)('Para cada valor de size ->', ({ size, iconSize }) => {
        it(`Deve ter o valor de ${iconSize} de acordo com a prop ${size}`, () => {
          const { getByTestId } = render(<IconButton {...iconButtonPropsDefault} size={size as IconButtonSize} />);

          const containerStyle = getByTestId(ICON_BUTTON.TEST_ID.ICON).props.style;

          expect(containerStyle[0].fontSize).toBe(iconSize);
        });
      });
    });
  });
});
