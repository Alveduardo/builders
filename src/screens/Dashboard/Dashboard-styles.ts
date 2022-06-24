import { DashboardStylesType } from './Dashboard-types';

export const DashboardStyles: DashboardStylesType = {
  containerStyle: {
    flex: 1,
  },
  contentStyle: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 20,
  },
  updateIconStyle: {
    right: 16,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 999,
    width: 56,
    height: 56,
  },
  topInfoWrapperStyle: {
    flex: 1,
    marginTop: 160,
    justifyContent: 'space-between',
  },
  cityStyle: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  timeStyle: {
    color: '#fff',
    fontWeight: 'bold',
  },
  flexDirectionRowStyle: {
    flexDirection: 'row',
  },
  temparatureStyle: {
    color: '#fff',
    fontSize: 84,
  },
  weatherTypeStyle: {
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: 24,
    marginLeft: 8,
  },
  separatorStyle: {
    borderBottomColor: 'rgba(255,255,255,0.7)',
    marginTop: 20,
    borderBottomWidth: 1,
  },
  bottomInfoWrapperStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  infoTitleStyle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  infoParagraphStyle: {
    fontSize: 24,
  },
  alignItemsCenterStyle: {
    alignItems: 'center',
  },
};
