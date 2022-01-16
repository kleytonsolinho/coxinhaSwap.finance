import styled from 'styled-components';

export const Container = styled.aside`
  .ScrollContainer {
    width: 65px;
    height: 65px;

    position: fixed;
    bottom: 60px;
    right: 30px;
    z-index: 12;

    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    box-shadow: var(--box-shadow);

    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 700px) {
      border: 1px solid var(--primary);
    }
  }

  button {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    background: transparent;

    color: #fcaa05;
    font-size: 1.5rem;
  }
`;
