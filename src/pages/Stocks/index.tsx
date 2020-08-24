import React, {
  useRef,
  useCallback,
  useMemo,
  useState,
  useEffect,
} from 'react';
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
import axios from 'axios';

import Input from '../../components/Input';

import {
  Container,
  Header,
  HeaderContent,
  IconsContainer,
  Main,
  ChartContainer,
  StocksContainer,
  ChooseStock,
  StockItem,
  StockInfo,
  StockActions,
} from './styles';

interface ApiResponseValues {
  ['1. open']: string;
  ['2. high']: string;
  ['3. low']: string;
  ['4. close']: string;
  ['5. volume']: string;
}

interface DataI {
  label: string;
  data: number[][];
}

const Home: React.FC = () => {
  const searchFormRef = useRef<FormHandles>(null);
  const [selectedStocks, setSelectedStocks] = useState<string[]>([]);
  const [data, setData] = useState({} as DataI[]);
  const [allStocks, setAllStocks] = useState<string[]>([]);

  useEffect(() => {
    async function loadStocksInfo(name: string) {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAilY&symbol=${name}.SA&interval=5min&apikey=${process.env.API_KEY}`,
      );
      const crudeResponse = response.data['Time Series (Daily)'];
      const valuesArray: ApiResponseValues[] = Object.values(crudeResponse);
      const closeValuesArray = valuesArray.map((item: ApiResponseValues) => {
        return item['1. open'];
      });
      const newDataArray = closeValuesArray.map((value, index) => {
        return [index, Number(value)];
      });
      const dataObject: DataI = {
        label: name,
        data: newDataArray,
      };
      return dataObject;
    }

    const promises = selectedStocks.map(item => {
      return loadStocksInfo(item).then(response => {
        return response;
      });
    });

    Promise.all(promises).then(results => {
      setData(results);
    });
  }, [selectedStocks]);

  const handleSearchSubmit = useCallback(() => {
    console.log(data);
  }, [data]);

  const handleChooseStocks = useCallback(() => {
    setAllStocks([
      'ABEV3',
      'BBAS3',
      'BBDC3',
      'BBDC4',
      'B3SA3',
      'CVCB3',
      'ITSA4',
      'ITUB4',
      'JBSS3',
      'LAME4',
      'LREN3',
      'MGLU3',
      'NTCO3',
      'OIBR3',
      'PETR4',
      'RENT3',
      'SUSB3',
      'VALE3',
      'VVAR3',
      'WEGE3',
    ]);
  }, []);

  const handleChooseFIIS = useCallback(() => {
    setAllStocks([
      'BBPO11',
      'BCFF11',
      'BRCO11',
      'BRCR11',
      'GTWR11',
      'HFOF11',
      'HGBS11',
      'HGLG11',
      'HGRU11',
      'HSML11',
      'IRDM11',
      'JSRE11',
      'KNCR11',
      'KNIP11',
      'KNRI11',
      'MXRF11',
      'VILG11',
      'VISC11',
      'XPLG11',
      'XPML11',
    ]);
  }, []);

  const handleAddStock = useCallback(
    (name: string) => {
      const currentStocks = [...selectedStocks];
      const checkStock = currentStocks.find(item => item === name);

      if (!checkStock) {
        setSelectedStocks(oldStocks => [...oldStocks, name]);
      }
    },
    [selectedStocks, setSelectedStocks],
  );

  const handleRemoveStock = useCallback(
    (name: string) => {
      const currentStocks = [...selectedStocks];
      const newStocks = currentStocks.filter(item => item !== name);

      setSelectedStocks(newStocks);
    },
    [selectedStocks],
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
          <ChooseStock>
            <button type="button" onClick={handleChooseStocks}>
              Ações
            </button>
            <button type="button" onClick={handleChooseFIIS}>
              FII
            </button>
          </ChooseStock>
          {allStocks.map(stock => (
            <StockItem>
              <StockInfo>
                <h2>{stock}</h2>
                <div>
                  <h3>R$ 99,99</h3>
                  <strong>5%</strong>
                </div>
              </StockInfo>
              <StockActions>
                <button
                  type="button"
                  className="add"
                  onClick={() => {
                    handleAddStock(stock);
                  }}
                >
                  <FiPlusCircle size={24} />
                </button>

                <button
                  type="button"
                  className="remove"
                  onClick={() => {
                    handleRemoveStock(stock);
                  }}
                >
                  <FiMinusCircle size={24} />
                </button>

                <button type="button" className="info">
                  <FiInfo size={24} />
                </button>
              </StockActions>
            </StockItem>
          ))}
        </StocksContainer>
      </Main>
    </Container>
  );
};

export default Home;
