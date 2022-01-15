import { useNavigate } from 'react-router-dom';
import { useApp } from '../../../hooks/useApp';

import Button from '../../global/Form/Button/Button';

import imgLogo from '../../../assets/images/logo-new.png';

import { Container, Navbar, Logo, Menu, MenuItem } from './Header.styles';

export default function Header() {
  const { notificationBarIsOpen } = useApp();
  const navigate = useNavigate();

  const handleConnect = () => {
    navigate('/dashboard');
  };

  return (
    <Container>
      <Navbar notifyIsOpen={notificationBarIsOpen}>
        <Logo to="/" smooth>
          <img src={imgLogo} alt="Logo CoxinhaSwap" />
          <h1>CoxinhaSwap</h1>
        </Logo>
        <Menu>
          <MenuItem to="/" smooth>
            Swap
          </MenuItem>
          <MenuItem to="/" smooth>
            Staking
          </MenuItem>
          <MenuItem to="/" smooth>
            Earn
          </MenuItem>
          <MenuItem to="/" smooth>
            Win
          </MenuItem>
          <MenuItem to="/" smooth>
            NFT
          </MenuItem>
        </Menu>
        <Button type="button" onClick={handleConnect}>
          Connect Wallet
        </Button>
      </Navbar>
    </Container>
  );
}
