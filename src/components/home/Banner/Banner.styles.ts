import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 0 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 3rem;
  line-height: 3rem;
`;

export const Description = styled.p`
  margin: 2rem 0;

  font-size: 1.2rem;
`;

export const Right = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;

    animation: move 8s linear infinite;
  }
`;

export const ScrollDown = styled(Link)`
  width: 100px;
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
