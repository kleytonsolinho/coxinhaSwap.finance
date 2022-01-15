import { ReactChildren, ReactChild } from 'react';

import { ModalContextProvider } from './modalContext';

interface AuxProps {
  children: ReactChild | ReactChildren;
}

export default function GlobalContextProvider({ children }: AuxProps) {
  return <ModalContextProvider>{children}</ModalContextProvider>;
}
