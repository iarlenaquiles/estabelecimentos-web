import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { Container } from './styles';
import api from '../../services/api';
import TextInput from './TextInput';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  description: Yup.string().required('Descrição é obrigatório'),

  image_url: Yup.string().required('URL é obrigatório'),
});

export default function Estabelecimento({ match, history }) {
  const [estabelecimento, setEstabelecimento] = useState({});
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const initFetch = useCallback(async () => {
    if (match.params.id) {
      const response = await api.get(`/estabelecimentos/${match.params.id}`);
      setEstabelecimento(response.data);
    }
  }, [match.params.id]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  async function handleSubmit(value) {
    try {
      if (estabelecimento) {
        await api.put(`/estabelecimentos/${estabelecimento._id}`, { ...value });
      } else {
        await api.post(`/estabelecimentos`, { ...value });
      }
      history.push('/dashboard');
    } catch (error) {
      console.tron.log(error);
      toast.error(`Error na ${estabelecimento ? 'criação' : 'edição'} do Estabelecimento`);
    }
  }
  return (
    <Container>
      <form  onSubmit={handleSubmit}>

        <input name="name" placeholder="Nome do estabelecimento" />
        <input name="image_url" placeholder="URL da imagem do estabelecimento" />
        <TextInput
          rows="10"
          resize="false"
          name="description"
          placeholder="Descrição completa"
        />

        <input name="latitude" placeholder="latitude" type="number" required value={latitude} onChange={e => setLatitude(e.target.value)} />
        <input name="longitude" placeholder="longitude" type="number"  required value={longitude} onChange={e => setLongitude(e.target.value)} />

        <button type="submit">
          {estabelecimento ? 'Alterar Estabelecimento' : 'Criar Estabelecimento'}
        </button>
      </form>
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
