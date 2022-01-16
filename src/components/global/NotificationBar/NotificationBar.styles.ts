import styled from 'styled-components';

export const Container = styled.aside`
  width: 100%;
  height: 30px;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #3fffc2;

  button {
    width: auto;
    height: 100%;
    margin-right: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    background-color: transparent;
    font-size: 1.2rem;
    color: var(--primary);
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100%;
  padding: 0 4rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;
