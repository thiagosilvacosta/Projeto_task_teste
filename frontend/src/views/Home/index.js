import React, {useState, useEffect} from 'react'
import * as S from  './styles'
import api from '../../services/api'
import {Link, Redirect} from 'react-router-dom'
import isConected from '../../utils/isConected'

// Importando components

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';


function Home() {
  const [filterActived, setFilterActived] = useState('today');
  const [tasks, setTasks] = useState([]);
  const [lateCount, setLateCount] = useState()
  const [redirect, setRedirect] = useState(false)

  async function loadTasks(){
    await api.get(`task/filter/${filterActived}/${isConected}`)
    .then(response =>{
      setTasks(response.data)
    })
  }

 

  function Notification(){
    setFilterActived('late');
  }

  useEffect(()=>{
    loadTasks();
    if(!isConected){
      setRedirect(true)
    }
  },[filterActived])

  return (
    <S.Container>
      { redirect && <Redirect to="/qrcode"/> }
      <Header clickNotification={Notification}/>
      <S.FilterArea>
          <button type="button" onClick={()=> setFilterActived("all")}>
              <FilterCard title="Todos"   actived={filterActived =="all"}/>
          </button>
          <button type="button"  onClick={()=> setFilterActived("today")}>
              <FilterCard title="Hoje"    actived={filterActived =="today"}/>
          </button>
          <button type="button" onClick={()=> setFilterActived("week")}>
              <FilterCard title="Semana"  actived={filterActived =="week"}/>
          </button>
          <button type="button" onClick={()=> setFilterActived("month")}>
              <FilterCard title="Mês"     actived={filterActived =="month"}/>
          </button>
          <button type="button" onClick={()=> setFilterActived("year")}>
              <FilterCard title="Ano"     actived={filterActived =="year"}/>
          </button>
      </S.FilterArea>
      <S.Title>
        <h3>{filterActived =='late'? 'TAREFAS ATRASADAS':'TAREFAS'}</h3>
      </S.Title>
      <S.Content> 
        {
          tasks.map(t =>(
            <Link to={`/task/${t._id}`}>
                <TaskCard title={t.title} type={t.type} when={t.when} done={t.done}/>
            </Link>
          ))
        }
      </S.Content>
      <Footer/>

    </S.Container>
  )
}

export default Home;
