import React,{useState,useEffect} from 'react'
import styled from "styled-components";
import Button from '../components/Button';
import {NavLink} from "react-router-dom";
import Demodata from './Links';
import { useSelector,useDispatch } from 'react-redux';
import { getsingleproduct} from "../store/singleSlice";

const Headseaction = () => {
  const dispatch=useDispatch();
  useEffect(()=>{dispatch(getsingleproduct());},[]);
  const data=useSelector((state)=>state.singleproduct.poster);
  const {id,title:name,images,thumbnail}=data;
  const about="The OPPO F19 is a smartphone designed and created to match your dynamic and stylish lifestyle. This smartphone features a 5000 mAh Battery for uninterrupted use, an AMOLED FHD+ Punch-hole Display for clear visuals, and an AI Beautification Selfie Camera to capture striking selfies with every click.";



  return ( 
     <Div1>
     <Div1left>
     <h1>{name}</h1>
     <p>{about}</p>
     <NavLink to={`/Singleproduct/${id}`} ><Button text={"Click Me"}  btnbghovercolor={'green'}/></NavLink></Div1left>
     <Div1right style={{backgroundImage: `url(${thumbnail})`,}} className='homediv1right'></Div1right>
     </Div1>)}

const Div1 =styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 30rem;
  overflow:hidden;
  background: white;
  margin:0px 0px 0px 0px ;
  font-family: 'Montserrat', sans-serif;
@media only screen and (max-width: 768px) {
  margin:0px 0px 0px -14px ;
  padding: 0px 0px 0px 15px;
  height: 13rem;}`;
const Div1left =styled.div`
  margin: 0px 0px 0px 60px;
  flex-grow: 1;
  width: 100%;
  padding: 0px 20px 0px 0px ;
  height: auto;
  display: flex;
  flex-direction: column;
  display: inline;
  h1{font-size: 3.8rem;}
  p{font-weight: bold;
    font-size: 20px;}
  Button{font-size: 50px;
         margin: 0px 0px 0px 0px ;
         height: 70px;}
  @media only screen and (max-width: 768px) {
  margin: 0px 0px 0px 0px;
  padding: 0px 20px 0px 0px ;
  h1{font-size: 1.4rem;}
  p{font-weight: bold;
    font-size: 0.5rem;}
  Button{
  font-size: 1.2rem;
  width:6rem;
  margin: 0px 0px 0px 0px ;
  height: 3rem;}}`;
const Div1right =styled.div`
  flex-grow: 1;
  background: url(${(props) => (props  ? 'inline' : 'none')});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: auto;
  transform-origin: center;
  display: flex;
  flex-direction: column;
  display: inline;
  animation: scaleRotateAnimation 1s ease-in-out alternate;

@keyframes scaleRotateAnimation {
  0% {
    transform: scale(0) rotate(180deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
  }
}

 @media only screen and (max-width: 768px) {
  background-position-x:-5.5rem;
  background-size:cover;
  margin:0px -14px 0px 0px;
 }`;

export default Headseaction;