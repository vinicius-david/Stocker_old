import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  overflow: hidden;
`;

export const Header = styled.header`
  width: 100vw;
  height: 10vh;

  background: var(--color-primary);
  color: var(--color-text-title);

  display: flex;
  justify-content: center;
`;

export const HeaderContent = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    margin-right: auto;
    font-size: 48px;
  }

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

  position: relative;
`;

export const ChartContainer = styled.div`
  width: 50%;
  height: 50%;
  margin: 10%;
`;

export const StocksContainer = styled.div`
  width: 30%;
  max-height: 87%;
  background: #aaa;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;
`;

export const StockItem = styled.div`
  width: 60%;
  height: 10%;
  padding: 16px;
  margin-top: 32px;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #ddd;
`;
