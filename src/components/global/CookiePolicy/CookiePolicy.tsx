import { useEffect, useState } from 'react';
import Button from '../Form/Button/Button';

import {
  Container,
  Left,
  Title,
  Description,
  Right,
} from './CookiePolicy.styles';

export default function CookiesPolicy() {
  const [isVisible, setIsVisible] = useState(false);

  const handleAcceptCookies = () => {
    setIsVisible(false);
    localStorage.setItem('CookiesLgpd', 'disable');
  };

  useEffect(() => {
    const cookies = localStorage.getItem('CookiesLgpd') === 'enable';
    if (cookies) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  return (
    <div>
      {isVisible && (
        <Container>
          <Left>
            <div>
              <span>👋</span>
              <Title>É hora de cuidar da sua privacidade!</Title>
            </div>
            <Description>
              Nosso site utiliza cookies para garantir o seu correto
              funcionamento e para um serviço personalizado - Utilize o menu
              &#34;Gerenciar Preferências&#34; para configurar a coleta de
              cookies.
            </Description>
          </Left>
          <Right>
            <Button onClick={handleAcceptCookies}>Aceitar Todos</Button>
          </Right>
        </Container>
      )}
    </div>
  );
}
