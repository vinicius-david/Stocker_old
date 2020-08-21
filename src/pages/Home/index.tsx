import React, { useRef, useCallback, useMemo } from 'react';
import { FiHome, FiUser, FiSettings, FiSearch } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';
import { Chart } from 'react-charts';

import Input from '../../components/Input';

import {
  Container,
  Header,
  HeaderContent,
  IconsContainer,
  Main,
  ChartContainer,
  StocksContainer,
  StockItem,
} from './styles';

const Home: React.FC = () => {
  const searchFormRef = useRef<FormHandles>(null);

  const handleSearchSubmit = useCallback(() => {
    console.log('dine');
  }, []);

  const data = useMemo(
    () => [
      {
        label: 'Series 1',
        data: [
          [0, 1],
          [1, 2],
          [2, 4],
          [3, 2],
          [4, 7],
        ],
      },
      {
        label: 'Series 2',
        data: [
          [0, 3],
          [1, 1],
          [2, 5],
          [3, 6],
          [4, 4],
        ],
      },
    ],
    [],
  );

  const axes = useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' },
    ],
    [],
  );

  return (
    <Container>
      <Header>
        <HeaderContent>
          <h1>STOCKER</h1>

          <Form ref={searchFormRef} onSubmit={handleSearchSubmit}>
            <Input name="search" placeholder="Buscar uma ação" />

            <button type="submit">
              <FiSearch size={24} />
            </button>
          </Form>

          <IconsContainer>
            <Link to="/">
              <FiHome size={24} />
            </Link>
            <Link to="/login">
              <FiUser size={24} />
            </Link>
            <FiSettings size={24} />
          </IconsContainer>
        </HeaderContent>
      </Header>
      <Main>
        <ChartContainer>
          <Chart data={data} axes={axes} />
        </ChartContainer>
        <StocksContainer>
          <StockItem>
            <h2>CVCB3</h2>
            <h3>R$ 99,99</h3>
            <strong>5%</strong>
          </StockItem>
          <StockItem>
            <h2>CVCB3</h2>
            <h3>R$ 99,99</h3>
            <strong>5%</strong>
          </StockItem>
          <StockItem>
            <h2>CVCB3</h2>
            <h3>R$ 99,99</h3>
            <strong>5%</strong>
          </StockItem>
          <StockItem>
            <h2>CVCB3</h2>
            <h3>R$ 99,99</h3>
            <strong>5%</strong>
          </StockItem>
          <StockItem>
            <h2>CVCB3</h2>
            <h3>R$ 99,99</h3>
            <strong>5%</strong>
          </StockItem>
          <StockItem>
            <h2>CVCB3</h2>
            <h3>R$ 99,99</h3>
            <strong>5%</strong>
          </StockItem>
          <StockItem>
            <h2>CVCB3</h2>
            <h3>R$ 99,99</h3>
            <strong>5%</strong>
          </StockItem>
          <StockItem>
            <h2>CVCB3</h2>
            <h3>R$ 99,99</h3>
            <strong>5%</strong>
          </StockItem>
          <StockItem>
            <h2>CVCB3</h2>
            <h3>R$ 99,99</h3>
            <strong>5%</strong>
          </StockItem>
          <StockItem>
            <h2>CVCB3</h2>
            <h3>R$ 99,99</h3>
            <strong>5%</strong>
          </StockItem>
          <StockItem>
            <h2>CVCB3</h2>
            <h3>R$ 99,99</h3>
            <strong>5%</strong>
          </StockItem>
        </StocksContainer>
      </Main>
    </Container>
  );
};

export default Home;
