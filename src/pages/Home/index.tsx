import React, { useRef, useCallback } from 'react';
import { FiHome, FiUser, FiSettings, FiSearch } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';

import {
  Container,
  Header,
  HeaderContainer,
  IconsContainer,
  Main,
} from './styles';

const Home: React.FC = () => {
  const searchFormRef = useRef<FormHandles>(null);

  const handleSearchSubmit = useCallback(() => {
    console.log('dine');
  }, []);

  return (
    <Container>
      <Header>
        <HeaderContainer>
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
        </HeaderContainer>
      </Header>
      <Main />
    </Container>
  );
};

export default Home;
