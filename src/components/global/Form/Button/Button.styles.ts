import styled from 'styled-components';

import { ButtonProps } from './Button.model';

export const Container =
  styled.button <
  ButtonProps >
  `
  width: auto;
  height: 40px;

  padding: 8px 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 10px;

  color: ${(props) => (props.secondary ? '#fcaa05' : '#ffffff')};
  border: ${(props) => (props.secondary ? '2px solid #fcaa05' : 'none')};
  background-color: ${(props) => (props.secondary ? 'transparent' : '#fcaa05')};

  animation: all 1s linear;

  &:hover {
    filter: brightness(1.1);
  }
`;
