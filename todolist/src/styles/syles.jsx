import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle `
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  text-decoration:none;
  outline: none;
  background-color: #1a1a1a;
}
`

export const Container = styled.div `
width: 100%;
min-height: 600px;
background-color: rgba(0, 0, 0 , 0.1);
box-shadow: 0px 4px rgba(0, 0 , 0, 0.25);
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
padding: 20px 20px;

 .title {
  // font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 72px;
  text-align: center;
  color: #c37d92;
 }
`
export const Input = styled.input `
height: 50px;
width: 250px;
border-radius: 10px;
padding: 8px, 10px, 8px, 10px;
border: none;
outline: none;

&::placeholder {
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #c37d92; 
}

`
export const Button = styled.button `
height: 50px;
width: 112px;
border-radius: 10px;
border: none;
padding: 10px, 40px, 10px, 40px;
background-color:#c37d92;
color: #fff;
cursor: pointer;

`

export const Spacer = styled.div `
width: 100%;
margin:${(props) => props.margin || '20px'}
`

export const BoxFlex = styled.div `
 display: flex;
 flex-direction: ${(props) => props.direction || 'column'};
 align-items: ${(props) => props.align || 'center'};
 justify-content: ${(props) => props.justify || 'center'};
 gap:${(props) => props.gap || '16px'};

`

export const Item = styled.li `
display: flex;
align-items: center;
justify-content: space-between;
text-align: center;
padding: 2px 10px;
width: 324px;
height: 50px;
background:${(props) => props.checked ? '#DA2535' : "#fff"};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
list-style: none:
font-weight: bold;
font-size: 16px;
line-height: 24px;
// text-decoration-line: line-through;
color: #000;

 button {
  font-size: 14px;
  margin: 0px 4px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  padding: 10px, 40px, 10px, 40px;
  background-color:#c37d92;
  color: #fff;
 }

`