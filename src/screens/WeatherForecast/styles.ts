import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 20,
  },
  updateIcon: {
    right: 16,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 999,
    width: 56,
    height: 56,
  },
  topInfoWrapper: {
    flex: 1,
    marginTop: 160,
    justifyContent: 'space-between',
  },
  city: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  time: {
    color: '#fff',
    fontWeight: 'bold',
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
  temparature: {
    color: '#fff',
    fontSize: 84,
  },
  weatherType: {
    textTransform: 'capitalize',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: 8,
  },
  separator: {
    borderBottomColor: 'rgba(255,255,255,0.7)',
    marginTop: 20,
    borderBottomWidth: 1,
  },
  bottomInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  infoText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
});
