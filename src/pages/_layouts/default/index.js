import React from 'react';
import PropType from 'prop-types';

import Header from '../../../components/Header';
import * as S from './styles';

export default function DefaultLayout({ children }) {
  return (
    <S.Wrapper>
      <Header />
      {children}
    </S.Wrapper>
  )
}

DefaultLayout.propType = {
  children: PropType.element.isRequired
};
