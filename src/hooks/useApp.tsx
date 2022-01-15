import { useContext } from 'react';
import { AppContext } from '../contexts/appContext';

export function useApp() {
  const myApp = useContext(AppContext);

  return myApp;
}
