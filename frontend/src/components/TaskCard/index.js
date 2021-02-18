import React from 'react'
import * as S from './styles';

import iconDefault  from '../../assets/default.png';

function TaskCard() {
  return  (
      <S.Container>
        <S.TopCard>
          <img src={iconDefault} alt="Icone da tarefa"/>
          <h3>Titulo da Tarefa</h3>
        </S.TopCard>
        <S.BottomCard>
          <strong>18/02/2021</strong>
          <span>16:03</span>
        </S.BottomCard>
      </S.Container>
    )
}

export default TaskCard;
