import { useNavigate } from 'react-router-dom';
import { useApp } from '../../../hooks/useApp';

import SelectLanguage from '../../global/SelectLanguage/SelectLanguage';
import Button from '../../global/Form/Button/Button';

import imgLogo from '../../../assets/images/logo-new.png';
import imgCoin from '../../../assets/images/favicon.ico';

import {
  Container,
  Navbar,
  Logo,
  Menu,
  MenuItem,
  ContainerWeb3,
  Price,
} from './Header.styles';

export default function Header() {
  const { notificationBarIsOpen } = useApp();
  const navigate = useNavigate();

  const handleConnect = () => {
    navigate('/swap');
  };

  return (
    <Container>
      <Navbar notifyIsOpen={notificationBarIsOpen}>
        <Logo to="banner" smooth>
          <img src={imgLogo} alt="Logo CoxinhaSwap" />
          <h1>CoxinhaSwap</h1>
        </Logo>
        <Menu>
          <MenuItem to="banner3" smooth>
            Swap
          </MenuItem>
          <MenuItem to="banner4" smooth>
            Staking
          </MenuItem>
          <MenuItem to="banner5" smooth>
            Earn
          </MenuItem>
          <MenuItem to="banner6" smooth>
            Win
          </MenuItem>
          <MenuItem to="footer" smooth>
            NFT
          </MenuItem>
        </Menu>
        <ContainerWeb3>
          <Price>
            <img src={imgCoin} alt="" />
            $10.23
          </Price>
          <SelectLanguage />
          <Button type="button" onClick={handleConnect}>
            Connect Wallet
          </Button>
        </ContainerWeb3>
      </Navbar>
    </Container>
  );
}
