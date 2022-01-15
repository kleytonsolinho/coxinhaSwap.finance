import { IoClose } from 'react-icons/io5';

import { useApp } from '../../../hooks/useApp';

import { NotificationBarProps } from './NotificationBar.model';

import { Container, Content } from './NotificationBar.styles';

export default function NotificationBar({ text }: NotificationBarProps) {
  const { setNotificationBarIsOpen } = useApp();

  const handleClose = () => {
    setNotificationBarIsOpen(false);
  };

  return (
    <Container>
      <Content>{text}</Content>
      <button type="button" onClick={handleClose}>
        <IoClose />
      </button>
    </Container>
  );
}
