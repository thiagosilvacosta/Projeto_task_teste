import React from 'react'
import Logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
import * as S from './styles';
import {Link} from 'react-router-dom'


function Header({lateCount, clickNotification}) {
  return  (
      <S.Container>
        <S.LeftSide>
            <img src={Logo} alt="Logo"></img>
        </S.LeftSide>
        <S.RightSide>
            <Link to="/">Inicio</Link >
            <span className="dividir"/>
            <Link to="/task">Nova Tarefa</Link>
            <span className="dividir"/>
            <a href="#">Sincronizar Celular</a>
            <span className="dividir"/>
            <button type="button" id="notification" onClick={clickNotification}>
              <img src={bell} alt="atrasadas"></img>
              <span>{lateCount}</span>
            </button>
        </S.RightSide>
      </S.Container>
    )
}

export default Header;
