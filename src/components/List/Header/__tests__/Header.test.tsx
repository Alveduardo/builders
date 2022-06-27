import React from 'react';
import { render } from '@testing-library/react-native';
import { HEADER } from '../Header-consts';
import Header from '../Header';

const headerPropsDefault = {
  title: 'title',
};

describe('Header ->', () => {
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
      const tree = render(<Header {...headerPropsDefault} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('Deve corresponder ao componente com as props mais utilizadas', () => {
      const tree = render(<Header {...headerPropsDefault} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('props', () => {
    describe('min', () => {
      it('Deve renderizar o componente exibindo a prop title', () => {
        const { getByTestId } = render(<Header {...headerPropsDefault} />);

        const component = getByTestId(HEADER.TEST_ID.LABEL);

        expect(component.children[0]).toBe(headerPropsDefault.title.toString());
      });
    });
  });
});
