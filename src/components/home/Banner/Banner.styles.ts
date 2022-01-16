import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 4rem;

  position: relative;

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
