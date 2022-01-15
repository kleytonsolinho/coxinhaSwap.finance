import styled from 'styled-components';

export const Container = styled.button`
  width: auto;
  height: 40px;

  padding: 8px 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 10px;
  background-color: #fcaa05;

  animation: all 1s linear;

  &:hover {
    filter: brightness(1.1);
  }
`;
