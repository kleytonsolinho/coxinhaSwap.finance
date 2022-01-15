import Header from '../../components/home/Header/Header';
import Banner from '../../components/home/Banner/Banner';

import { Main } from './Home.styles';

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <Banner />
      </Main>
    </>
  );
}