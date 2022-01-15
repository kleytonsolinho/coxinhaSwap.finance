import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Container = styled.header`
  width: 100%;
  height: auto;
  position: relative;
`;

export const Navbar = styled.nav`
  width: calc(100% - 4rem);
  max-width: 1400px;
  height: var(--menu-height);
  padding: 0 2rem;

  position: fixed;
  top: 25px;
  left: 50%;
  transform: translate(-50%);
  z-index: 99;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  box-shadow: var(--box-shadow);
  border-radius: 20px;
`;

export const Logo = styled(Link)`
  width: auto;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  img {
    height: 75%;
    transform: rotate(-30deg);
  }

  h1 {
    margin-left: 1rem;
  }
`;

export const Menu = styled.div`
  width: 40%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuItem = styled(Link)`
  cursor: pointer;
`;

export const Connect = styled.button``;
