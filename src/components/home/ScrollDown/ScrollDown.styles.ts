import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const ScrollClick = styled(Link)`
  width: auto;
  height: 100px;

  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%);
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  cursor: pointer;

  animation: moveupdown 2s linear infinite;

  .icon {
    margin-top: 5px;

    font-size: 2rem;
  }
`;
