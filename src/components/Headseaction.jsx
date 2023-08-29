import React,{useState,useEffect} from 'react'
import styled from "styled-components";
import Button from '../components/Button';
import {NavLink} from "react-router-dom";
import Demodata from './Links';




const Headseaction = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % Demodata.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentImageObject = Demodata[currentImageIndex].url;

  return ( 
     <Div1>
     <Div1left>
     <h1>{Demodata[0].name}</h1>
     <p>{Demodata[0].about}</p>
     <NavLink to='/Singleproduct/-1' ><Button text={"Click Me"}  btnbghovercolor={'green'}/></NavLink></Div1left>
     <Div1right style={{backgroundImage: `url(${currentImageObject})`,}} className='homediv1right'></Div1right>
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
  height: 13rem;}`;
const Div1left =styled.div`
  margin: 0px 0px 0px 70px;
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
  margin: 0px 0px 0px 30px;
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
  background: url(${Demodata[0].url});
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