import React from 'react';
import { render } from '@testing-library/react-native';
import BottomSheet from '../BottomSheet';

describe('BottomSheet ->', () => {
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
      const tree = render(<BottomSheet />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('Deve corresponder ao componente com as props mais utilizadas', () => {
      const tree = render(<BottomSheet />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
