import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

function Estabelecimento({ estabelecimento }) {
  return (
    <Link to={`/details/${estabelecimento._id}`}>
      <S.Estabelecimento>
        <img src="https://api.adorable.io/avatars/100/abott@adorable.png" alt={estabelecimento.name} />

        <div>
          <strong>{estabelecimento.name}</strong>

          <p>{estabelecimento.description}</p>
        </div>

      </S.Estabelecimento>
    </Link>
  )
}

export default Estabelecimento;

