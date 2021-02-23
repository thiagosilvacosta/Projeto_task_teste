import styled from 'styled-components';


export const Container = styled.div `
    width: 100%;
    height 70px;
    background: #20295f;
    border-bottom: solid 5px #EE6B26;

    display: flex;
` 
export const LeftSide = styled.div `
width: 50%;
height 70px;
display: flex;
align-items: center;
padding-left: 10px;

img{
    width:120px;
    height:50px;
}
` 
export const RightSide = styled.div `
    width: 50%;
    height 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

a,button{
    color:#FFF;
    font-size:1.1em;
    font-weight: bold;
    text-decoration: none;
    margin: 0 10px;
    border: none;
    background: none;
    outline: none;
    cursor: pointer;

    &:hover{
        color:#EE6B26;
    }
}

#notification{
    background:none;
    border:none;
    outline:none;
    cursor:pointer;
    button,img{
        width: 25px;
        
    }
  
    &:hover{
        opacity:0.5;   
    }
    
    span{
        background: #FFF;
        font-size:0.7em;
        color:#EE6B26;
        border-radius: 50%;
        padding: 1px 5px;
        position:relative;
        top:-20px;
        left: -15px;
    }
}

.dividir::after {
    content:"|";
    margin:0 3px;
    color:#FFF;
}

`
