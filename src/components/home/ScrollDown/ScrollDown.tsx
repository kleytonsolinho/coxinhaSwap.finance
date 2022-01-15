import { CgScrollV } from 'react-icons/cg';
import { BsMouse } from 'react-icons/bs';

import {
  Container,
  Content,
} from './ScrollDown.styles';

export default function ScrollDown(){
  return (
    <Container>
      <Content to="/" smooth>
        <CgScrollV className="icon" />
        <BsMouse className="icon" />
      </Content>
    </Container>
  );
}
