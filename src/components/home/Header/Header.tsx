import Button from '../../global/Form/Button/Button';

import imgLogo from '../../../assets/images/logo-new.png';

import {
  Container,
  Navbar,
  Logo,
  Menu,
  MenuItem,
  Connect,
} from './Header.styles';

export default function Header() {
  return (
    <Container>
      <Navbar>
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
        <Button>Connect Wallet</Button>
      </Navbar>
    </Container>
  );
}
