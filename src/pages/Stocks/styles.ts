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

  position: relative;
`;

export const ChartContainer = styled.div`
  width: 60%;
  height: 40%;
  margin: 5%;
`;

export const StocksContainer = styled.div`
  width: 30%;
  max-height: 60%;
  background: #aaa;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;

  div:nth-child(20) {
    margin-bottom: 56px;
  }
`;

export const ChooseStock = styled.div`
  display: flex;

  width: 100%;
  height: 20%;

  button {
    width: 50%;
  }
`;

export const StockItem = styled.div`
  width: 60%;
  min-height: 87px;
  padding-left: 8px;
  margin: 16px 0;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #ddd;
`;

export const StockInfo = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  h2 {
    margin-left: 10%;
  }

  div {
    display: flex;
    flex-direction: column;
    text-align: right;
    justify-content: space-between;

    margin-left: auto;
    margin-right: 10%;
  }
`;

export const StockActions = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100%;

  button:nth-child(1) {
    border-radius: 0 8px 0 0;
  }

  button:nth-child(3) {
    border-radius: 0 0 8px 0;
  }

  svg {
    padding: 2px;
  }

  .add {
    color: green;
  }

  .remove {
    color: red;
  }

  .info {
    color: blue;
  }
`;
