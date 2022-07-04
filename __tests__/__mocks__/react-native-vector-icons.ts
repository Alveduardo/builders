jest.mock('react-native-vector-icons', () => ({
  createIconSetFromIcoMoon: jest.fn(() => {
    const { Text } = require('react-native');
    return Text;
  })
}))