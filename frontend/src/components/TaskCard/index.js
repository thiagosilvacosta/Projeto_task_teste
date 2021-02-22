import React,{useMemo} from 'react';
import  {format} from 'date-fns';
import * as S from './styles';

import TypeIcons from '../../utils/TypeIcons'



function TaskCard({title, type, when, done}) {

  const date = useMemo(()=>format(new Date(when), 'dd / MM / yyyy'));
    const hour =  useMemo(()=>format(new Date(when), "HH:mm"));

  return  (
      <S.Container done={done}>
        <S.TopCard>
          <img src={TypeIcons[type]} alt="Icone da tarefa"/>
          <h4>{title}</h4>
        </S.TopCard>
        <S.BottomCard>
          <strong>{date}</strong>
          <span>{hour}</span>
        </S.BottomCard>
      </S.Container>
    )
}

export default TaskCard;
