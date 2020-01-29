import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { Container } from './styles';
import api from '../../services/api';
import EstabelecimentoForm from '../../components/EstabelecimentoForm';

export default function Estabelecimento({ history }) {
  async function handleSubmit(value) {
    try {
      await api.post(`/estabelecimentos`, { ...value });

      history.push('/dashboard');
    } catch (error) {
      console.tron.log(error);
      toast.error(`Error na criação do Estabelecimento`);
    }
  }
  return (
    <Container>
     <EstabelecimentoForm onSubmit={handleSubmit} />
    </Container>
  );
}

Estabelecimento.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      meetupId: PropTypes.string,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
