import styled from 'styled-components';


export const Container = styled.div `
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Formulario = styled.div `
   
    width: 50%;
   
`

export const TypeIcons = styled.div `
   width: 100%;
   display: flex;
   justify-content: space-around; 

   button{
       border: none;
       background: none;
       outline: none;
   }

   .inative{
       opacity: 0.5;
   }

   img{
        
        width: 50px;
        margin:10px;
        cursor: pointer;
        
        &:hover{
            opacity: 0.7;
        }
    } 
`
export const Input = styled.div `
    margin: 20px 0px;
    width: 100%;
    display: flex;
    flex-direction: column;

    span{
        color: #707070;
        margin-bottom: 5px;
        font-weight: bold;
    }

    input{
        padding:5px;
        border: none;
        border-bottom: 1px solid #EE6B26;
        
    }
    img{
        width: 20px;
        position: relative;
        left: 96.5%;
        bottom: 27px;
    }
`

export const TextArea = styled.div `
    margin: 20px 0px;
    width: 100%;
    display: flex;
    flex-direction: column;
    
    span{
        color: #707070;
        margin-bottom: 5px;
    }
    
    textarea{
        font-size: 1.1em;
        border: solid 1px #EE6B26;
        border-radius: 5px;
    }

    `

    export const Options = styled.div `
    display: flex;
    justify-content: space-between;

    button{
        font-weight: bold;
        color: #20295F;
        border: none;
        background: none;
        outline:none;
        cursor: pointer;
        font-size: 1.1em;

        &:hover{
            opacity: 0.7;
        }
    }

   
    div{
        display: flex;
        align-items: center;
        color: #EE6B26;
        font-weight:bold;
        font-size: 1.2em;
    }
    `

    export const Save = styled.div `
    
    button{
            width:100%;
            background: #EE6B26;
            border: none;
            font-size: 1.2em;
            color: #FFF;
            padding: 10px;
            border-radius: 20px;
            margin-top: 20px;
            margin-bottom: 70px;
            cursor: pointer;

            &:hover{
                opacity: 0.7;
            }
        }
    `

 