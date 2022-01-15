import { createContext, useState, ReactNode, useEffect, Dispatch } from 'react';

interface ModalProviderProps {
  children: ReactNode;
}

interface ContextProps {
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<boolean>;
  handleSwitchModal: () => void;
}

export const ModalContext = createContext<any>(undefined);

export function ModalContextProvider({
  children,
}: ModalProviderProps): JSX.Element {
  const [modalIsOpen, setMoldaIsOpen] = useState(false);

  function handleSwitchModal(): void {
    setMoldaIsOpen((oldState) => !oldState);
  }

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalIsOpen]);

  return (
    <ModalContext.Provider
      value={{
        modalIsOpen,
        setMoldaIsOpen,
        handleSwitchModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
