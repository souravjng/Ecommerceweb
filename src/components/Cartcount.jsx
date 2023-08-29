import React from 'react';
import styled from '@emotion/styled';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Cartcounter = () => {
 
const [stateValue, setStateValue] = useState(0);
const setincrease=()=>{if(stateValue<4){setStateValue(stateValue+1);}}
const setdecrease=()=>{if(stateValue>1){setStateValue(stateValue-1);}}

  return (
    <Div1>
    <div style={{backgroundColor:' black',borderRadius:'4px 0px 0px 4px '}} onClick={()=>setincrease()}><AddIcon fontSize='large' /></div>
    <div><h1>{stateValue}</h1></div>
    <div style={{backgroundColor:' black',borderRadius:'0px 4px 4px 0px '}} onClick={()=>setdecrease()}><RemoveIcon fontSize='large' /></div>
    </Div1>)}


const Div1=styled.div`
    display:flex;
    flex-direction:row;
    width:130px;
    border:1px solid black ;
    border-radius:4px;
    margin:10px 0px 0px 20px ;
    height:40px;
    @media only screen and (max-width: 768px) {width:130px;margin:10px 0px 0px 10px ;height:40px;}
    div{flex-grow:1;height:30px; color: white;width:10px;text-align:center;padding:4px 0px 6px 0px ; cursor: pointer;margin:0px 0px 0px 0px;}
    h1{margin:5px 0px 0px 0px; color: black;}`;

export default Cartcounter;