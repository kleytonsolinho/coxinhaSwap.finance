import { useApp } from '../../hooks/useApp';

import NotificationBar from '../../components/global/NotificationBar/NotificationBar';
import Header from '../../components/home/Header/Header';
import Banner from '../../components/home/Banner/Banner';
import ScrollDown from '../../components/home/ScrollDown/ScrollDown';

import { Main } from './Home.styles';

export default function Home() {
  const { notificationBarIsOpen } = useApp();

  return (
    <>
      {notificationBarIsOpen && (
        <NotificationBar text="🚀 Aproveite e garanta seu lugar no AirDrop do Token CoxinhaSwap! 🤘" />
      )}
      <Header />
      <Main>
        <Banner />
        <ScrollDown />
      </Main>
    </>
  );
}
