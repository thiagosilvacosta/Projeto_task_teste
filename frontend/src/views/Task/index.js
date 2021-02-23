import React, {useState, useEffect} from 'react'
import * as S from  './styles'
import {format} from 'date-fns' 
import api from '../../services/api'
import { Redirect } from 'react-router-dom'
import isConected from '../../utils/isConected';

// Importando components

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/TypeIcons';

import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';



function Task({match}) {
  const [redirect, setRedirect]= useState(false);
  const [type, setType] = useState();
  const [id, setId]= useState();
  const [done,setDone] = useState(false);
  const [title, setTitle]=useState();
  const [description, setDescription]=useState();
  const [date, setDate]=useState();
  const [hour, setHour]=useState();
  
  




  async function LoadTaskDetails(){
    await api.get(`/task/${match.params.id}`)
    .then(response =>{
      setType(response.data.type)
      setDone(response.data.done)
      setTitle(response.data.title)
      setDescription(response.data.description)
      setDate(format(new Date(response.data.when),'yyyy-MM-dd'))
      setHour(format(new Date(response.data.when),'HH:mm'))
    })
  }

// função para salvar tarefas
  async function save(){

    // validaçção de campos

    if(!type)
      return alert('Você precisa selecionar um tipo paara a tarefa, clique e selecione o icone no inicio da tela!')
    else if(!title)
      return alert('Você precisa informar um título para a tarefa!')
    else if(!description)
      return alert('Preencha a Descrição da Tarefa!')
    else if(!date)
      return alert('preencha a data da tarefa!')
    else if(!hour)
      return alert('preencha a hora da tarefa!')

    if(match.params.id){
      await api.put(`/task/${match.params.id}`, {
        macaddress: isConected,
        done,
        type,
        title,
        description,
        when: `${date}T${hour}:00.000` 
      })
      .then( ()=>{
        setRedirect(true)
      })
     
    }else{
       await api.post('/task', {
       macaddress:isConected,
       type,
       title,
       description,
       when: `${date}T${hour}:00.000` 
     })
     .then( ()=>{
       setRedirect(true)
     })
    } 
  }

  async function Remove(){
    const res = window.confirm('Deseja realmente remover a tarefa?')
    if(res == true){
      await api.delete(`/task/${match.params.id}`)
      .then(()=>{
        setRedirect(true)
      })
    }
   }
  
 
 
  useEffect(()=>{
    if(!isConected){
      setRedirect(true)
    }
    LoadTaskDetails();
  },[])

  return (
    <S.Container>
      { redirect && <Redirect to="/" />}
      <Header/>
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
              <S.Input>
                  <span>Título</span>
                  <input type="text" placeholder= "Título da tarefa..." onChange={e => setTitle(e.target.value)} value={title}/>
              </S.Input>
              <S.TextArea>
                  <span>Descrição</span>
                  <textarea rows={5} placeholder="Detalhes da Tarefa..." onChange={e => setDescription(e.target.value)} value={description}/>
              </S.TextArea>
              <S.Input>
                  <span>Data</span>
                  <input type="date" placeholder= "Título da tarefa..." onChange={e => setDate(e.target.value)} value={date}/>
                  
              </S.Input>
              <S.Input>
                  <span>Hora</span>
                  <input type="time" placeholder= "Título da tarefa..." onChange={e => setHour(e.target.value)} value={hour}/>
              </S.Input>
              <S.Options>
                <div>
                  <input type="checkbox" id="done" checked={done} onChange={()=> setDone(!done)}/>
                  <span for="done">Concluído</span>
                </div>
                  { match.params.id && <button type="button" onClick={Remove}>Excluir</button>}
              </S.Options>
              <S.Save>
                <button type="button" onClick={save}>Salvar</button>
              </S.Save>

        </S.Formulario>
      
      <Footer/>

    </S.Container>
  )
}

export default Task;
