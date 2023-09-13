import React from 'react';
import styled from '@emotion/styled';
import { useState } from 'react';

const Cartcounter = (props) => {
  const [stateValue, setStateValue] = useState(1);


   


const setincrease=()=>{if(stateValue<4){setStateValue(stateValue+1);props.countdata(stateValue+1);}}
const setdecrease=()=>{if(stateValue>1){setStateValue(stateValue-1);props.countdata(stateValue-1);}}

  return (
    <Div1>
    <div className='Plusminusdiv' onClick={()=>setincrease()}><h1>+</h1></div>
    <div><h1 >{stateValue}</h1></div>
    <div className='Plusminusdiv' onClick={()=>setdecrease()}><h1>-</h1></div>
    </Div1>)}


const Div1=styled.div`
    display:flex;
    flex-direction:row;
    width:130px;
    font-family: 'Mulish', sans-serif;
    border:1px solid grey ;
    border-radius:4px;
    margin:10px 0px 0px 20px ;
    padding:0px 1px 0px 1px;
    height:40px;
    @media only screen and (max-width: 768px) {
    width:80px;
    border-radius:2px;
    border:1px solid grey ;
    overflow: hidden;
    margin:20px 0px 0px 10px ;
    height:30px;}
.Plusminusdiv{
  background-color: white;
  @media only screen and (max-width: 768px) {
      padding: 0px 0px 10px 0px;
    }
  h1{

  }@media only screen and (max-width: 768px) {
      font-size: 20px;
    }}



    div{flex-grow:1;
    height:40px;
     color: white;
    width:10px;
    color:black;
    text-align:center;
    padding:0px 0px 0px 0px ;
     cursor: pointer;
    margin:0px 0px 0px 0px;
    @media only screen and (max-width: 768px) {
      height:30px;
    }}
    h1{margin:0px 0px 0px 0px ; 
      color: black;
      font-size:30px;
    @media only screen and (max-width: 768px) {
      font-size:20px;
      padding-top:2px;
    }}`;

export default Cartcounter;