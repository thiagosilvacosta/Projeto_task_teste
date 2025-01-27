import styled from 'styled-components';


export const Container = styled.div `
    width: 250px;
    height 200px;
    border-radius: 5px;
    display: flex;
    align-items:center;
    justify-content: center;
    box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.73);
    flex-direction: column;   
    margin: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    opacity: ${props =>props.done ? 0.5 : 1};
       


    &:hover{
        opacity: 0.5;
    }

    ` 
    export const TopCard = styled.div `
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;   
    img{
        width: 50px;
    }

 `
 export const BottomCard = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-around;

    strong{
        color: #EE6B26;
        font-weight: bold;
    }
    span{
        color:#707070;
    }
 `