import {
  FaTwitter,
  FaDiscord,
  FaGithub,
  FaTelegramPlane,
} from 'react-icons/fa';

import { Container } from './SocialBar.styles';

export default function SocialBar() {
  return (
    <Container>
      <FaTwitter className="icon" />
      <FaDiscord className="icon" />
      <FaTelegramPlane className="icon" />
      <FaGithub className="icon" />
    </Container>
  );
}
