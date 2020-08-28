import styled, { keyframes } from 'styled-components';

const animateSize = keyframes`
  from {
    width: 50%;
    height: 50vh;
  }
  to {
    width: 60%;
    height: 65vh;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  overflow: hidden;
`;

export const Main = styled.div`
  width: 100vw;

  display: flex;
  flex: 1;

  position: relative;
`;

export const ChartContainer = styled.div`
  width: 60%;
  height: 65vh;

  div {
    margin: 10%;
  }

  animation: ${animateSize} 0.5s ease-out;
`;

export const StocksContainer = styled.div`
  width: 30%;
  height: 100%;
  background: #aaa;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;

  position: absolute;
  right: 0;
  top: 0;
`;

export const ChooseStock = styled.div`
  display: flex;

  width: 100%;
  height: 80px;

  button {
    width: 50%;
    font-weight: 700;
    font-size: 24px;
  }

  .stocks {
    background: green;
  }

  .FIIS {
    background: blue;
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

  &:hover {
    transform: translateX(5px);
    transition: 300ms;
  }
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
  justify-content: space-between;

  min-height: 100%;

  button:nth-child(1) {
    border-radius: 0 8px 0 0;

    &:hover {
      background: var(--color-primary-dark);
      transition: 300ms;
    }
  }

  button:nth-child(2) {
    border-radius: 0 0 8px 0;

    &:hover {
      background: var(--color-primary-dark);
      transition: 300ms;
    }
  }

  svg {
    padding: 6px;
  }

  .chart {
    color: green;
  }

  .info {
    color: blue;
  }
`;
