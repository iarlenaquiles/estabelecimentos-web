import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '../../store/modules/auth/actions'
import * as S from './styles';

export default function Header() {
  const dispatch = useDispatch();

  return (
    <S.Container>
      <S.Content>
        <nav>
          <Link to="/dashboard">Dashboard</Link>

          <Link to="/near-stores">Lojas próximas</Link>
        </nav>

        <aside>
          <S.Profile>
            <div>
              <strong>Iarlen</strong>
              <Link to="/">Meu perfil</Link>
            </div>

            <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt="Imagem do perfil"/>
          </S.Profile>

          <div>
            <button onClick={() => dispatch(signOut())}>Sair</button>
          </div>
        </aside>
      </S.Content>
    </S.Container>
  )
}
