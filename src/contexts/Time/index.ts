import { useContext } from 'react';
import { TimeContext, TimeProvider } from './Time-context';

export const useTime = () => {
  const context = useContext(TimeContext);
  return context;
};

export { TimeProvider };
