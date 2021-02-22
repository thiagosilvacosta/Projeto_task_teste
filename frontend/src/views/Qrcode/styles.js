import styled from 'styled-components';


export const Container = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
   
    
`
export const Content = styled.div `
   
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        color: #EE6B26;
    }

    p{
        color: #20295F;
    }

`

export const QrCodeArea = styled.div `
    width: 100%;
  
    display: flex;
    justify-content: center;
    align-items: center;
    
`
export const ValidationCode = styled.div `
    display: flex;
    flex-direction: column;
    margin: 10px;

    span{
         text-transform: uppercase;
         font-weight: bold;
         margin-bottom: 5px;
    }
    input{
        margin-bottom:10px;
        font-size: 1.2em;
        padding: 5px;
    }
    button{
        font-size: 1.2em;
        padding: 7px;
        font-weight: bold;
        background: #EE6B26;
        border:none;
        border-radius: 5px;
        color: #FFF;
    }


`