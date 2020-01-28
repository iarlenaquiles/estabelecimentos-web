import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

function Estabelecimento({ estabelecimento }) {
  return (
    <Link to={`/details/${estabelecimento._id}`}>
      <S.Estabelecimento>

          <header>
              <img src={estabelecimento.imagem_url} alt={estabelecimento.name} />

              <div className="estabelecimento-info">
                <strong>{estabelecimento.name}</strong>

              </div>

          </header>

          <p>{estabelecimento.description}</p>

      </S.Estabelecimento>
    </Link>
  )
}

export default Estabelecimento;

