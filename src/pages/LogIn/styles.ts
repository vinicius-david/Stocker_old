import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 100vw;
  min-height: 10vh;

  background: var(--color-primary);
  color: var(--color-text-title);

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    margin-left: 5%;
    font-size: 48px;
  }
`;

export const HeaderContent = styled.div`
  width: 80%;
  margin-right: 5%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  form {
    display: flex;

    div {
      width: 70%;
    }

    button {
      background: var(--color-primary);
      margin-left: 8px;

      &:hover {
        color: #fff;
        transition: 300ms;
      }
    }
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: var(--color-text-base);
  }

  svg {
    margin-left: 24px;

    &:hover {
      color: #fff;
      cursor: pointer;
      transition: 300ms;
    }
  }
`;

export const Main = styled.div`
  width: 100vw;

  display: flex;
  flex: 1;
`;
