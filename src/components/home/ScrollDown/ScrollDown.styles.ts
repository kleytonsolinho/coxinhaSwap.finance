import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Container = styled.div`
  width: 100%;
  height: auto;

  position: relative;
`;

export const Content = styled(Link)`
  width: auto;
  height: 100px;

  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translate(-50%);
  z-index: 2;

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
