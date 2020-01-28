import React, { useState, useEffect, useCallback } from 'react';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { Container, Meetup } from './styles';
import Estabelecimento from '../../components/Estabelecimento';


export default function Dashboard() {
  const [estabelecimentos, setEstabelecimentos] = useState([]);

  const initEstabelecimentos = useCallback(async () => {
    const response = await api.get(`estabelecimentos`);

    setEstabelecimentos(response.data);
  }, []);

  useEffect(() => {
    initEstabelecimentos();
  }, [initEstabelecimentos]);

  return (
    <Container>
      <header>
        <strong>Meus estabelecimentos</strong>
        <Link to="/meetup/create">
          <button type="button">
            <MdAddCircleOutline color="#fff" size={20} />
            Novo estabelecimento
          </button>
        </Link>
      </header>

      <ul>
        {estabelecimentos.map(estabelecimento => (
          <Estabelecimento key={estabelecimento._id} estabelecimento={estabelecimento}/>
        ))}
      </ul>
    </Container>
  );
}
