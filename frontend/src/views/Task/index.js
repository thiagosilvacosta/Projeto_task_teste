import React, {useState, useEffect} from 'react'
import * as S from  './styles'
import api from '../../services/api'


// Importando components

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/TypeIcons'


function Task() {

  const [lateCount, setLateCount] = useState();
  const [type, setType] = useState();


  async function lateVerify(){
    await api.get(`task/filter/late/11-11-11-11-11-11`)
    .then(response =>{
      setLateCount(response.data.length)
    })
  }

 
  useEffect(()=>{
   
    lateVerify();
  },[])

  return (
    <S.Container>
      <Header lateCount = {lateCount}/>
        <S.Formulario>
            <S.TypeIcons>
                {
                  TypeIcons.map((icon,index)=>(
                  
                   index > 0 && 
                   <button type="button" onClick= {()=> setType(index)}>
                      <img src={icon} alt="Tipo da tarefa" 
                      className={type && type != index && 'inative'}/>
                   </button>
                  ))
                }
            </S.TypeIcons>
        </S.Formulario>
      
      <Footer/>

    </S.Container>
  )
}

export default Task;
