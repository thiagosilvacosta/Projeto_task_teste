import React from 'react'
import Logo from '../../assets/logo.png';
import * as S from './styles';

function Header() {
  return  (
      <S.Container>
        <S.LeftSide>
            <img src={Logo} alt="Logo"></img>
        </S.LeftSide>
        <S.RightSide>

        </S.RightSide>
      </S.Container>
    )
}

export default Header;
