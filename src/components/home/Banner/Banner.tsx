import { CgScrollV } from 'react-icons/cg';
import { BsMouse } from 'react-icons/bs';

import imgBanner from '../../../assets/images/ampulheta.png';

import {
  Container,
  Left,
  Title,
  Description,
  Right,
  ScrollDown,
} from './Banner.styles';

export default function Banner() {
  return (
    <Container>
      <Left>
        <Title>The moon is made of pancakes.</Title>
        <Description>
          The moon is made of pancakes. Trade, earn, and win crypto on the most
          popular decentralized platform in the galaxy.
        </Description>
      </Left>
      <Right>
        <img src={imgBanner} alt="Banner" />
      </Right>
      <ScrollDown to="/" smooth>
        <CgScrollV className="icon" />
        <BsMouse className="icon" />
      </ScrollDown>
    </Container>
  );
}
