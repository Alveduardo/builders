import React from 'react';
import { render } from '@testing-library/react-native';

import TempIndicator from '../TempIndicator';
import { TEMP_INDICATOR } from '../TempIndicator-consts';

const tempIndicatorPropsDefault = {
  min: 0,
  max: 0,
};

jest.mock('react-native-linear-gradient', () => 'LinearGradient');

describe('TempIndicator ->', () => {
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
      const tree = render(<TempIndicator {...tempIndicatorPropsDefault} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('Deve corresponder ao componente com as props mais utilizadas', () => {
      const tree = render(<TempIndicator {...tempIndicatorPropsDefault} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('props ->', () => {
    describe('min ->', () => {
      it('Deve renderizar o componente exibindo a prop min', () => {
        const { getByTestId } = render(<TempIndicator {...tempIndicatorPropsDefault} />);

        const component = getByTestId(TEMP_INDICATOR.TEST_ID.MIN);

        expect(component.children[0]).toBe(tempIndicatorPropsDefault.min.toString());
      });
    });
    describe('max ->', () => {
      it('Deve renderizar o componente exibindo a prop max', () => {
        const { getByTestId } = render(<TempIndicator {...tempIndicatorPropsDefault} />);

        const component = getByTestId(TEMP_INDICATOR.TEST_ID.MIN);

        expect(component.children[0]).toBe(tempIndicatorPropsDefault.max.toString());
      });
    });
  });
});
