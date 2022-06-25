import { DashboardStyles } from './Dashboard-types';

export const dashboardStyles: DashboardStyles = {
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
  fontBoldStyle: {
    fontWeight: 'bold',
  },
  flexDirectionRowStyle: {
    flexDirection: 'row',
  },
  weatherTypeStyle: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginLeft: 8,
  },
  separatorStyle: {
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.7)',
  },
  bottomInfoWrapperStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  alignItemsCenterStyle: {
    alignItems: 'center',
  },
};
