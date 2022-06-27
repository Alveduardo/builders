import React from 'react';
import { render } from '@testing-library/react-native';
import { ItemT } from '../Item-types';
import Item from '../Item';

const itemPropsDefault = {
  item: {
    dt_txt: '',
    main: {
      temp: 0,
      temp_min: 0,
      temp_max: 0,
    },
    weather: [
      {
        description: '',
      },
    ],
  } as ItemT,
  index: 0,
};

jest.mock('react-native-linear-gradient', () => 'LinearGradient');

describe('Item ->', () => {
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
      const tree = render(<Item {...itemPropsDefault} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('Deve corresponder ao componente com as props mais utilizadas', () => {
      const tree = render(<Item {...itemPropsDefault} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
