import React from 'react';
import { Link } from 'react-router-dom';
import { MdEdit, MdDeleteForever } from 'react-icons/md';

import api from '../../services/api';
import history from '../../services/history';

import * as S from './styles';

function Estabelecimento({ estabelecimento }) {

  async function deteleEstabelecimento(id) {
    await api.delete(`/estabelecimentos/${id}`);
    history.push('/dashboard');
  }

  return (
      <S.Estabelecimento>
        <S.Aside>
          <img src={estabelecimento.imagem_url ? estabelecimento.imagem_url : 'https://api.adorable.io/avatars/100/abott@adorable.png'} alt={estabelecimento.name} />

          <div>
            <strong>{estabelecimento.name}</strong>

            <p>{estabelecimento.description}</p>
          </div>
        </S.Aside>

        <S.Actions>
          <Link to={`/estabelecimento/edit/${estabelecimento._id}`}>
            <button type="button" className="editar">
              <MdEdit color="#fff" size={20} />
              Editar
            </button>
          </Link>

          <button
            type="button"
            className="cancelar"
            onClick={() => deteleEstabelecimento(estabelecimento._id)}
          >
            <MdDeleteForever color="#fff" size={20} />
            Deletar
          </button>
        </S.Actions>

      </S.Estabelecimento>
  )
}

export default Estabelecimento;

