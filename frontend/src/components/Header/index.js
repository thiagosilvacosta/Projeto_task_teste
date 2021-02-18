import React from 'react'
import Logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
import * as S from './styles';

function Header() {
  return  (
      <S.Container>
        <S.LeftSide>
            <img src={Logo} alt="Logo"></img>
        </S.LeftSide>
        <S.RightSide>
            <a href="#">Inicio</a>
            <span className="dividir"/>
            <a href="#">Nova Tarefa</a>
            <span className="dividir"/>
            <a href="#">Sincronizar Celular</a>
            <span className="dividir"/>
            <a href="#" id="notification">
              <img src={bell} alt="atrasadas"></img>
              <span>0</span>
            </a>
        </S.RightSide>
      </S.Container>
    )
}

export default Header;
