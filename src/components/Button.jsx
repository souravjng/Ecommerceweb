import React from 'react';
import styled from "styled-components";
import { Useproductcontext } from '../context/Productcontext';


const Button = (props) =>{

  const {Cartdata}= Useproductcontext();
  let cart_item='';
  
let size;

if(props.name==='cart'){ cart_item=Cartdata.length;size='17px';}
const Carttotal=styled.span`
position:absolute;
color:black;
margin:-5px 0px 0px 23px ;
width:${size};
height:${size};
font-size:15px;
background-color:white;
border-radius:33px;else{}`;

return (<>
<Btn> <Carttotal >{cart_item}</Carttotal> {props.text}</Btn>
</>);}

const Btn =styled.button`
  width: auto;
  height: 2.9rem;
  text-align: center;
  padding: 10px 10px 10px 10px ;
  margin: 8px 0px 0px 10px ;
  background: black;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 25px;
  text-decoration: none;
@media only screen and (max-width: 768px) {
   align-items:center;
   height:3.5rem;
   padding-top:1rem;
   border-radius: 0px;
   flex-direction:column;
   width:100%;
   text-align:center;}
&:hover{
  border:1px solid black;
  color: black;
  background-color: white;}
  `;


export default Button;