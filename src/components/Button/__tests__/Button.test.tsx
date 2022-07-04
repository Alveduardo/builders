import React from 'react';
import { render } from '@testing-library/react-native';
import Button from '../Button';

describe('Button ->', () => {
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
      const tree = render(<Button label='test' />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('Deve corresponder ao componente com as props mais utilizadas', () => {
      const tree = render(<Button label='test' />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
