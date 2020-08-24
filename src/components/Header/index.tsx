import React, { useRef, useCallback } from 'react';
import { FiSearch, FiHome, FiUser, FiSettings } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';

import Input from '../Input';
import { Header, HeaderContent, IconsContainer } from './styles';

const Button: React.FC = () => {
  const searchFormRef = useRef<FormHandles>(null);

  const handleSearchSubmit = useCallback(() => {
    console.log('ok');
  }, []);

  return (
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
  );
};

export default Button;
