import styled from 'styled-components';

import homeBackground from '../../assets/homeBackground.jpeg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 30vw;
  height: 40vh;

  position: absolute;
  top: 10vh;
  left: 10vw;
  z-index: 2;

  h1 {
    color: var(--color-text-title);
    font-size: 64px;
    font-weight: 700;
    letter-spacing: 1px;
  }

  h3 {
    color: var(--color-text-complement);
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 0.6px;

    margin-top: 3vh;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 26vw;
  height: 5vh;

  margin-top: 5vh;
`;

export const ButtonItem = styled.div`
  display: flex;
  align-items: center;
  background: var(--color-primary-light);

  border-radius: 4px;

  svg {
    margin: 0 16px;
  }

  button {
    padding: 12px 20px;
    background: var(--color-primary-light);
    border-radius: 0 4px 4px 0;

    &:hover {
      background: var(--color-primary-dark);
      transition: 300ms;
    }
  }

  &:hover {
    background: var(--color-primary);
    transition: 300ms;
  }
`;

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  background: url(${homeBackground}) no-repeat center;
  background-size: cover;
`;
