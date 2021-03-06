import React, { useState, useEffect, useCallback } from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import * as S from './styles';
import Estabelecimento from '../../components/Estabelecimento';


export default function Dashboard() {
  const [estabelecimentos, setEstabelecimentos] = useState([]);

  const initEstabelecimentos = useCallback(async () => {
    const response = await api.get(`estabelecimentos`);

    setEstabelecimentos(response.data);
  }, []);

  async function handleDelete(id) {
    await api.delete(`/estabelecimentos/${id}`);
    initEstabelecimentos();
  }

  useEffect(() => {
    initEstabelecimentos();
  }, [initEstabelecimentos]);

  return (
    <S.Container>
      <header>
        <strong>Meus estabelecimentos</strong>
        <Link to="/estabelecimento/create">
          <button type="button">
            <MdAddCircleOutline color="#fff" size={20} />
            Novo estabelecimento
          </button>
        </Link>
      </header>

      <ul>
        {estabelecimentos.map(estabelecimento => (
          <Estabelecimento key={estabelecimento._id} estabelecimento={estabelecimento} onDelete={() => handleDelete(estabelecimento._id)}/>
        ))}
      </ul>
    </S.Container>
  );
}
