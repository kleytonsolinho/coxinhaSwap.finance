import { createContext, useState, useEffect } from 'react';

interface AppProviderProps {
  children: React.ReactNode;
}

interface ContextProps {
  modalIsOpen: boolean;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  notificationBarIsOpen: boolean;
  setNotificationBarIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// verificar tipagem context any
export const AppContext = createContext<any | null>(null);

export function AppContextProvider({
  children,
}: AppProviderProps): JSX.Element {
  const [modalIsOpen, setMoldaIsOpen] = useState(false);
  const [notificationBarIsOpen, setNotificationBarIsOpen] = useState(true);

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalIsOpen]);

  // eslint-disable-next-line
  const providerValues = {
    modalIsOpen,
    notificationBarIsOpen,
    setMoldaIsOpen,
    setNotificationBarIsOpen,
  };

  return (
    <AppContext.Provider value={providerValues}>{children}</AppContext.Provider>
  );
}
