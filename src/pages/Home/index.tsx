import React from 'react';
import { FiTrendingUp, FiLogIn } from 'react-icons/fi';

import { Container, ButtonsContainer, ButtonItem, Background } from './styles';

const Home: React.FC = () => (
  <>
    <Container>
      <h1>STOCKER</h1>
      <h3>
        Acompanhe as principais ações e fundos imobiliários do mercado de forma
        simples e prática.
      </h3>

      <ButtonsContainer>
        <ButtonItem>
          <FiTrendingUp size={32} />
          <button type="button">Ações/FIIS</button>
        </ButtonItem>
        <ButtonItem>
          <FiLogIn size={32} />
          <button type="button">Fazer login</button>
        </ButtonItem>
      </ButtonsContainer>
    </Container>
    <Background />
  </>
);

export default Home;
