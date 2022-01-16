import imgBanner from '../../../assets/images/ampulheta.png';
import ScrollDown from '../ScrollDown/ScrollDown';

import {
  Container,
  Content,
  Left,
  Title,
  Description,
  Right,
} from './Banner.styles';

export default function Banner() {
  return (
    <Container id="banner">
      <Content>
        <Left>
          <Title>The moon is made of pancakes.</Title>
          <Description>
            The moon is made of pancakes. Trade, earn, and win crypto on the
            most popular decentralized platform in the galaxy.
          </Description>
        </Left>
        <Right>
          <img src={imgBanner} alt="Banner" />
        </Right>
      </Content>
      <ScrollDown />
    </Container>
  );
}
