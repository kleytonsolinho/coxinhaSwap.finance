import { CgScrollV } from 'react-icons/cg';
import { BsMouse } from 'react-icons/bs';

import { Container, ScrollClick } from './ScrollDown.styles';

export default function ScrollDown() {
  return (
    <Container>
      <ScrollClick to="/" smooth>
        <CgScrollV className="icon" />
        <BsMouse className="icon" />
      </ScrollClick>
    </Container>
  );
}
