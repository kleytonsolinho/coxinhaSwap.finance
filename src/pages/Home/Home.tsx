import { useApp } from '../../hooks/useApp';

import SocialBar from '../../components/global/SocialBar/SocialBar';
import NotificationBar from '../../components/global/NotificationBar/NotificationBar';
import Header from '../../components/home/Header/Header';
import Banner from '../../components/home/Banner/Banner';
import Footer from '../../components/home/Footer/Footer';
import CookiesPolicy from '../../components/global/CookiePolicy/CookiePolicy';
import ScrollToTop from '../../components/global/ScrollToTop/ScrollToTop';
import SectionHero from '../../components/home/SectionHero/SectionHero';

import imgBanner from '../../assets/images/bunny@2x.webp';
import imgGamepad from '../../assets/images/gamepad.png';
import imgOculos from '../../assets/images/oculos-vr.png';
import imgCoin from '../../assets/images/coin.png';
import imgCoins from '../../assets/images/coins.png';
import imgMoneybag from '../../assets/images/money-bag.png';
import imgPig from '../../assets/images/pig.png';
import imgSecurity from '../../assets/images/security.png';
import imgEthereum from '../../assets/images/ethereum-coin.png';
import imgBinance from '../../assets/images/binance-coin.png';

import { Main } from './Home.styles';

export default function Home() {
  const { notificationBarIsOpen } = useApp();

  return (
    <>
      {notificationBarIsOpen && (
        <NotificationBar text="🚀 Aproveite e garanta seu lugar no AirDrop do Token CoxinhaSwap! 🤘" />
      )}
      <SocialBar />
      <Header />
      <Main>
        <Banner />
        <SectionHero
          id="banner2"
          title="The moon is made of pancakes."
          description="Trade, earn, and win crypto on the most popular decentralized platform
          in the galaxy."
          image={imgBanner}
          button1="Connect Wallet"
          button2="Comece agora!"
        />
        <SectionHero
          id="banner3"
          invert
          title="The moon is made of pancakes."
          description="Trade, earn, and win crypto on the most popular decentralized platform
          in the galaxy."
          image={imgOculos}
        />
        <SectionHero
          id="banner4"
          title="The moon is made of pancakes."
          description="Trade, earn, and win crypto on the most popular decentralized platform
          in the galaxy."
          image={imgGamepad}
        />
        <SectionHero
          id="banner5"
          invert
          title="The moon is made of pancakes."
          description="Trade, earn, and win crypto on the most popular decentralized platform
          in the galaxy."
          image={imgCoin}
        />
        <SectionHero
          title="The moon is made of pancakes."
          description="Trade, earn, and win crypto on the most popular decentralized platform
          in the galaxy."
          image={imgCoins}
        />
        <SectionHero
          id="banner6"
          invert
          title="The moon is made of pancakes."
          description="Trade, earn, and win crypto on the most popular decentralized platform
          in the galaxy."
          image={imgMoneybag}
        />
        <SectionHero
          id="banner7"
          title="The moon is made of pancakes."
          description="Trade, earn, and win crypto on the most popular decentralized platform
          in the galaxy."
          image={imgPig}
        />
        <SectionHero
          id="banner8"
          invert
          title="The moon is made of pancakes."
          description="Trade, earn, and win crypto on the most popular decentralized platform
          in the galaxy."
          image={imgSecurity}
        />
        <SectionHero
          id="banner9"
          title="The moon is made of pancakes."
          description="Trade, earn, and win crypto on the most popular decentralized platform
          in the galaxy."
          image={imgEthereum}
        />
        <SectionHero
          id="banner10"
          invert
          title="The moon is made of pancakes."
          description="Trade, earn, and win crypto on the most popular decentralized platform
          in the galaxy."
          image={imgBinance}
        />
      </Main>
      <Footer />
      <ScrollToTop />
      <CookiesPolicy />
    </>
  );
}
