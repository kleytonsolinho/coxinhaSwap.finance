import styled from 'styled-components';

export const Container = styled.aside`
  width: 50vw;
  height: 150px;
  padding: 2rem;

  position: fixed;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 12;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 30px;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  -webkit-box-shadow: -5px 20px 50px 10px rgba(0, 0, 0, 0.2);
  box-shadow: -5px 20px 50px 10px rgba(0, 0, 0, 0.2);
`;

export const Left = styled.div`
  width: 60%;
  height: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;

  font-size: 0.8rem;

  div {
    display: flex;
    align-items: center;

    span {
      margin-right: 5px;
      font-size: 1.5rem;
    }
  }
`;

export const Title = styled.h4``;

export const Description = styled.p``;

export const Right = styled.div`
  width: 40%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;
