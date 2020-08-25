import styled from 'styled-components';

import loginBackground from '../../assets/loginBackground.jpeg';

export const FormContainer = styled.div`
  width: 25vw;
  height: 50vh;
  padding: 32px 40px;
  border-radius: 12px;
  box-shadow: 4px 4px 5px #333;
  background: var(--color-background);

  display: flex;
  flex-direction: column;

  position: absolute;
  top: 20%;
  left: 37.5%;
  z-index: 2;

  h2 {
    font-size: 28px;
    margin-bottom: 10%;
    margin-left: 5%;
  }

  strong {
    font-size: 16px;
    margin-left: 5%;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 90%;
    div {
      width: 90%;
      margin-top: 16px;
    }

    button {
      height: 30%;
      width: 90%;
    }
  }

  &:hover {
    box-shadow: 3px 3px 6px #555;
    transition: 300ms;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-top: 15%;
  margin-left: 5%;

  svg {
    color: var(--color-primary-dark);
  }

  a {
    text-decoration: none;
    color: var(--color-primary);

    &:hover {
      color: var(--color-primary-dark);
    }
  }
`;

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 90vh;

  background: url(${loginBackground}) no-repeat center;
  background-size: cover;
`;
