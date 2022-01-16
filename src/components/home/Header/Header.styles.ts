import styled from 'styled-components';
import { Link } from 'react-scroll';

interface NavbarProps {
  notifyIsOpen: boolean;
}

export const Container = styled.header`
  width: 100%;
  height: auto;
  position: relative;
`;

export const Navbar =
  styled.nav <
  NavbarProps >
  `
  width: calc(100% - 4rem);
  max-width: 1400px;
  height: var(--menu-height);
  padding: 0 2rem;

  position: fixed;
  top: ${({ notifyIsOpen }) => (notifyIsOpen ? '40px' : '25px')};
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
    animation: movelogo 3s linear infinite;
  }

  h1 {
    margin-left: 1rem;
  }
`;

export const Menu = styled.div`
  width: 30%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuItem = styled(Link)`
  padding: 8px 12px;
  cursor: pointer;

  border-radius: 10px;

  &:hover {
    background-color: #dfdfdf;
  }
`;

export const ContainerWeb3 = styled.div`
  width: auto;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.p`
  padding: 8px;
  margin-right: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 1rem;
  font-weight: bold;

  border-radius: 10px;
  cursor: pointer;
  background-color: #dfdfdf;

  img {
    width: 24px;
    height: 24px;

    margin-right: 5px;

    transform: rotate(-35deg);
  }
`;
