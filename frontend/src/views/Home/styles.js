import styled from 'styled-components';


export const Container = styled.div `
    width: 100%;
    
`

export const FilterArea = styled.div `
width: 100%;
margin-top:20px;
display:flex;
flex-wrap: wrap;
justify-content: space-around;

button{
    background: none;
    border:none;
    outline:none;
}
`

export const Content = styled.div `

width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;

`

export const Title = styled.div `

width: 100%;
border-bottom: solid 1px #20295F;
display:flex;
justify-content: center;

h3{
    color: #20295F;
    position: relative;
    top: 30px;
    background: #FFF;
    display: inline-flex;
    padding: 0px 20px;
       
}
margin-bottom: 20px;

`