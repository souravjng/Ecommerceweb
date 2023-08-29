import React from 'react'
import styled from "styled-components";

const Banner = (props) => {
  return (<Bannerdiv><h1>{props.text}</h1></Bannerdiv>)}

const Bannerdiv =styled.div`
 width:100%;
 height:150px;
 margin:0px 0px 20px -20px;
 padding:0px 0px 0px 20px;
 border:1px solid white;
 background-color:white;
 text-align:center;
  h1{ color:black;
    font-size:80px;
    margin:40px 0px 0px 0px;
    font-family: 'Rajdhani', sans-serif;}
@media only screen and (max-width: 768px) {
  margin:30px 0px 20px -20px;
  height:70px;
  h1{
    font-size:30px;
    margin:20px 0px 0px 0px;}}`;

export default Banner;