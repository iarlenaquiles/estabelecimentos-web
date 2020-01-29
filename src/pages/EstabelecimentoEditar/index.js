import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import api from '../../services/api';

import * as S from './styles';

import EstabelecimentoFormEdit from '../../components/EstabelecimentoFormEdit';

export default function EstabelecimentoEditar({ match, history }) {
  async function handleSubmit(value) {
    const { _id } = value;
    try {
      await api.put(`/estabelecimentos/${_id}`, { ...value });

      history.push('/dashboard');
    } catch (error) {
      console.tron.log(error);
      toast.error(`Error na edição do Estabelecimento`);
    }
  }
  return (
    <S.Container>
     <EstabelecimentoFormEdit onSubmit={handleSubmit} id={match.params.id} />
    </S.Container>
  );
}

EstabelecimentoEditar.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      meetupId: PropTypes.string,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
