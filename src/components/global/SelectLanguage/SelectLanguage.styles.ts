import styled from 'styled-components';

export const Container = styled.div`
  width: 60px;
  height: 40px;
  margin-right: 1rem;
  position: relative;

  .icon {
    color: var(--primary);
    font-size: 1.5rem;

    &:hover {
      filter: brightness(1.2);
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  padding: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1rem;
  font-weight: bold;
  color: var(--primary);

  border-radius: 10px;
  cursor: pointer;
  background-color: #dfdfdf;
  border: none;

  &:hover {
    filter: brightness(0.95);
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

export const MenuLanguage = styled.div`
  width: auto;
  height: 100%;

  position: absolute;
  top: 70px;
  left: 0;
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-color: #dfdfdf;
  border-radius: 10px;
`;
