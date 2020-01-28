import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

export default function Header() {
  return (
    <S.Container>
      <S.Content>
        <nav>
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <aside>
          <S.Profile>
            <div>
              <strong>Iarlen</strong>
              <Link to="/">Meu perfil</Link>
            </div>

            <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt="Imagem do perfil"/>
          </S.Profile>
        </aside>
      </S.Content>
    </S.Container>
  )
}
