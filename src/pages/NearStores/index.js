import React, { useState, useEffect, useCallback } from 'react';

import api from '../../services/api';
import * as S from './styles';
import Estabelecimento from '../../components/Estabelecimento';


export default function NearStores() {
  const [estabelecimentos, setEstabelecimentos] = useState([]);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [distance, setDistance] = useState(10000);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
       const { latitude, longitude } = position.coords;
       setLatitude(latitude);
       setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
 }, []);

  const initEstabelecimentos = useCallback(async () => {
    const response = await api.get(`search`, {
      params: {
        latitude,
        longitude,
        distance
      }
    });

    setEstabelecimentos(response.data);
  }, [latitude, longitude]);

  useEffect(() => {
    initEstabelecimentos();
  }, [initEstabelecimentos]);

  async function handleDelete(id) {
    await api.delete(`/estabelecimentos/${id}`);
    initEstabelecimentos();
  }

  return (
    <S.Container>
      <header>
        <strong>Estabelecimentos próximos</strong>

      </header>

      <ul>
        {estabelecimentos.map(estabelecimento => (
          <Estabelecimento key={estabelecimento._id} estabelecimento={estabelecimento} onDelete={() => handleDelete(estabelecimento._id)}/>
        ))}
      </ul>
    </S.Container>
  );
}
