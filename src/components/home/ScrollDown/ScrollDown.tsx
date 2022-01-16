import { CgScrollV } from 'react-icons/cg';
import { BsMouse } from 'react-icons/bs';

import { Container, ScrollClick } from './ScrollDown.styles';

export default function ScrollDown() {
  return (
    <Container>
      <ScrollClick to="banner2" smooth>
        <CgScrollV className="icon" />
        <BsMouse className="icon" />
      </ScrollClick>
    </Container>
  );
}
