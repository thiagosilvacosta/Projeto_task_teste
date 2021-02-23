import React, {useEffect, useState} from 'react'
import Logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
import * as S from './styles';
import {Link} from 'react-router-dom';

import api from '../../services/api';
import isConected from '../../utils/isConected';


function Header({ clickNotification}) {

  const [lateCount, setLateCount] = useState();

  async function lateVerify(){
    await api.get(`task/filter/late/${isConected}`)
    .then(response =>{
      setLateCount(response.data.length);
    })
  }




  useEffect(()=>{
    lateVerify();
  })

  async function Logout(){
    localStorage.removeItem('@todo/macaddress')
    window.location.reload();
  }

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
            {
              !isConected ? <Link to="/qrcode">Sincronizar Celular</Link> :  <button type="button" onClick={Logout}>Sair</button>
            }
            
           
           
            {
              lateCount &&
              <>
                  <span className="dividir"/>
                  <button type="button" id="notification" onClick={clickNotification}>
                    <img src={bell} alt="atrasadas"></img>
                    <span>{lateCount}</span>
                  </button>
              </>
            }
        </S.RightSide>
      </S.Container>
    )
}

export default Header;
