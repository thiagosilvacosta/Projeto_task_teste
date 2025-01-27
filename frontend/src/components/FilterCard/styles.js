import styled from 'styled-components';


export const Container = styled.div `
    width: 200px;
    height: 50px;
    background: ${props => props.actived ?'#EE6B26':'#20295F'};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding:10px;
    cursor: pointer;

   img{
       width: 25px;
       height: 25px;
       
   }

   span{
       color:#FFF;
       font-weight:bold;
       align-self: flex-end;
       font-size: 1.2em;
   }

   &:hover{
       background: #EE6B26;
   }

` 
 