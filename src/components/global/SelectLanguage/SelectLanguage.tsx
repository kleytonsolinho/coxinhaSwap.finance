import { useState, useEffect } from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { MdOutlineLanguage } from 'react-icons/md';

import { Container, Button, MenuLanguage } from './SelectLanguage.styles';

export default function SelectLanguage() {
  const [isOpen, setIsOpen] = useState(false);
  const [loadPage, setLoadPage] = useState(false);

  const handleSwitchLanguage = () => {
    setIsOpen((oldState) => !oldState);
  };

  useEffect(() => {
    if (loadPage) {
      window.location.reload();
      setLoadPage(false);
    }
  }, [loadPage]);

  return (
    <Container>
      <Button onClick={handleSwitchLanguage}>
        <MdOutlineLanguage className="icon" />
        {isOpen ? (
          <FaCaretUp className="icon" />
        ) : (
          <FaCaretDown className="icon" />
        )}
      </Button>
      {isOpen && (
        <MenuLanguage>
          <Button onClick={handleSwitchLanguage}>Espanhol</Button>
          <Button onClick={handleSwitchLanguage}>Português</Button>
        </MenuLanguage>
      )}
    </Container>
  );
}
