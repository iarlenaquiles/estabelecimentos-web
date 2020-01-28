import React from 'react';
import PropType from 'prop-types';
import * as S from './styles';

export default function AuthLayout({ children }) {
  return (
    <S.Wrapper>
      <S.Content>{children}</S.Content>
    </S.Wrapper>
  )
}

AuthLayout.propType = {
  children: PropType.element.isRequired
};
