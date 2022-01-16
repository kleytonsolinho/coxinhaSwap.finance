import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: calc(100vh - var(--menu-height));
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 4rem;

  position: relative;
  top: var(--menu-height);
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Left = styled.div`
  width: 50%;
  height: 100%;
  padding: 2rem;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  line-height: 2.2rem;

  color: var(--text-tertiary);
`;

export const Description = styled.p`
  margin: 2rem 0;

  font-size: 1.2rem;
  color: var(--text-primary);
`;

export const ContainerButton = styled.div`
  width: 100%;
  height: auto;

  display: flex;
`;

export const Right = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;

    animation: move 4s linear infinite;
  }
`;
