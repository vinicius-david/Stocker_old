import React, { useRef, useCallback, useMemo } from 'react';
import {
  FiHome,
  FiUser,
  FiSettings,
  FiSearch,
  FiPlusCircle,
  FiMinusCircle,
  FiInfo,
} from 'react-icons/fi';
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
  StockInfo,
  StockActions,
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

  const series = useMemo(
    () => ({
      showPoints: true,
    }),
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
        <h1>STOCKER</h1>

        <HeaderContent>
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
          <Chart data={data} series={series} axes={axes} />
        </ChartContainer>
        <StocksContainer>
          <StockItem>
            <StockInfo>
              <h2>CVCB3</h2>
              <div>
                <h3>R$ 99,99</h3>
                <strong>5%</strong>
              </div>
            </StockInfo>
            <StockActions>
              <button type="button" className="add">
                <FiPlusCircle size={24} />
              </button>

              <button type="button" className="remove">
                <FiMinusCircle size={24} />
              </button>

              <button type="button" className="info">
                <FiInfo size={24} />
              </button>
            </StockActions>
          </StockItem>
          <StockItem>
            <StockInfo>
              <h2>CVCB3</h2>
              <div>
                <h3>R$ 99,99</h3>
                <strong>5%</strong>
              </div>
            </StockInfo>
            <StockActions>
              <button type="button" className="add">
                <FiPlusCircle size={24} />
              </button>

              <button type="button" className="remove">
                <FiMinusCircle size={24} />
              </button>

              <button type="button" className="info">
                <FiInfo size={24} />
              </button>
            </StockActions>
          </StockItem>
          <StockItem>
            <StockInfo>
              <h2>CVCB3</h2>
              <div>
                <h3>R$ 99,99</h3>
                <strong>5%</strong>
              </div>
            </StockInfo>
            <StockActions>
              <button type="button" className="add">
                <FiPlusCircle size={24} />
              </button>

              <button type="button" className="remove">
                <FiMinusCircle size={24} />
              </button>

              <button type="button" className="info">
                <FiInfo size={24} />
              </button>
            </StockActions>
          </StockItem>
          <StockItem>
            <StockInfo>
              <h2>CVCB3</h2>
              <div>
                <h3>R$ 99,99</h3>
                <strong>5%</strong>
              </div>
            </StockInfo>
            <StockActions>
              <button type="button" className="add">
                <FiPlusCircle size={24} />
              </button>

              <button type="button" className="remove">
                <FiMinusCircle size={24} />
              </button>

              <button type="button" className="info">
                <FiInfo size={24} />
              </button>
            </StockActions>
          </StockItem>
          <StockItem>
            <StockInfo>
              <h2>CVCB3</h2>
              <div>
                <h3>R$ 99,99</h3>
                <strong>5%</strong>
              </div>
            </StockInfo>
            <StockActions>
              <button type="button" className="add">
                <FiPlusCircle size={24} />
              </button>

              <button type="button" className="remove">
                <FiMinusCircle size={24} />
              </button>

              <button type="button" className="info">
                <FiInfo size={24} />
              </button>
            </StockActions>
          </StockItem>
          <StockItem>
            <StockInfo>
              <h2>CVCB3</h2>
              <div>
                <h3>R$ 99,99</h3>
                <strong>5%</strong>
              </div>
            </StockInfo>
            <StockActions>
              <button type="button" className="add">
                <FiPlusCircle size={24} />
              </button>

              <button type="button" className="remove">
                <FiMinusCircle size={24} />
              </button>

              <button type="button" className="info">
                <FiInfo size={24} />
              </button>
            </StockActions>
          </StockItem>
          <StockItem>
            <StockInfo>
              <h2>CVCB3</h2>
              <div>
                <h3>R$ 99,99</h3>
                <strong>5%</strong>
              </div>
            </StockInfo>
            <StockActions>
              <button type="button" className="add">
                <FiPlusCircle size={24} />
              </button>

              <button type="button" className="remove">
                <FiMinusCircle size={24} />
              </button>

              <button type="button" className="info">
                <FiInfo size={24} />
              </button>
            </StockActions>
          </StockItem>
          <StockItem>
            <StockInfo>
              <h2>CVCB3</h2>
              <div>
                <h3>R$ 99,99</h3>
                <strong>5%</strong>
              </div>
            </StockInfo>
            <StockActions>
              <button type="button" className="add">
                <FiPlusCircle size={24} />
              </button>

              <button type="button" className="remove">
                <FiMinusCircle size={24} />
              </button>

              <button type="button" className="info">
                <FiInfo size={24} />
              </button>
            </StockActions>
          </StockItem>
          <StockItem>
            <StockInfo>
              <h2>CVCB3</h2>
              <div>
                <h3>R$ 99,99</h3>
                <strong>5%</strong>
              </div>
            </StockInfo>
            <StockActions>
              <button type="button" className="add">
                <FiPlusCircle size={24} />
              </button>

              <button type="button" className="remove">
                <FiMinusCircle size={24} />
              </button>

              <button type="button" className="info">
                <FiInfo size={24} />
              </button>
            </StockActions>
          </StockItem>
          <StockItem>
            <StockInfo>
              <h2>CVCB3</h2>
              <div>
                <h3>R$ 99,99</h3>
                <strong>5%</strong>
              </div>
            </StockInfo>
            <StockActions>
              <button type="button" className="add">
                <FiPlusCircle size={24} />
              </button>

              <button type="button" className="remove">
                <FiMinusCircle size={24} />
              </button>

              <button type="button" className="info">
                <FiInfo size={24} />
              </button>
            </StockActions>
          </StockItem>
          <StockItem>
            <StockInfo>
              <h2>CVCB3</h2>
              <div>
                <h3>R$ 99,99</h3>
                <strong>5%</strong>
              </div>
            </StockInfo>
            <StockActions>
              <button type="button" className="add">
                <FiPlusCircle size={24} />
              </button>

              <button type="button" className="remove">
                <FiMinusCircle size={24} />
              </button>

              <button type="button" className="info">
                <FiInfo size={24} />
              </button>
            </StockActions>
          </StockItem>
          <StockItem>
            <StockInfo>
              <h2>CVCB3</h2>
              <div>
                <h3>R$ 99,99</h3>
                <strong>5%</strong>
              </div>
            </StockInfo>
            <StockActions>
              <button type="button" className="add">
                <FiPlusCircle size={24} />
              </button>

              <button type="button" className="remove">
                <FiMinusCircle size={24} />
              </button>

              <button type="button" className="info">
                <FiInfo size={24} />
              </button>
            </StockActions>
          </StockItem>
        </StocksContainer>
      </Main>
    </Container>
  );
};

export default Home;
