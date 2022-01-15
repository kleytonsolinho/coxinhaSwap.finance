import { ReactChildren, ReactChild } from 'react';

import { AppContextProvider } from './appContext';

interface AuxProps {
  children: ReactChild | ReactChildren;
}

export default function GlobalContextProvider({ children }: AuxProps) {
  return <AppContextProvider>{children}</AppContextProvider>;
}
