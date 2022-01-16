import styled from 'styled-components';

export const Container = styled.aside`
  width: 50px;
  height: auto;
  padding: 2rem 0;

  position: fixed;
  right: 2rem;
  top: 50%;
  z-index: 2;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .icon {
    color: var(--primary);
    font-size: 1.7rem;
    margin: 1rem 0;

    cursor: pointer;

    &:hover {
      filter: brightness(1.25);
      transform: scale(1.15);
    }
  }
`;
