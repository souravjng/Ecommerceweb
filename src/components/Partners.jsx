import React from 'react'
import styled from "styled-components";
import img1 from '../asserts/Trusted.jpg';

const Partners = () => {
  return (
    <Sectiondiv1  >
    <h1>Trusted by 100+ Companies</h1>
    <Sectiondiv2  >
    <h1>Flipkart</h1>
    <h1>Amazon</h1>
    <h1>Dell</h1>
    <h1>Intel</h1>
    <h1>Techbag</h1>
    </Sectiondiv2>
    </Sectiondiv1>)}

const Sectiondiv1 =styled.div` 
 width:100%;
 margin:50px 0px 20px -20px;
 padding:0px 0px 0px 20px;
 height:300px;
 background-color:#d4c1ec;
 display:flex;
 flex-direction:column;
 border-bottom: 2px solid white;
 border-top: 2px solid white;
h1{ color:white;
    margin:auto;
    margin-top:30px;
    font-family: 'Work Sans', sans-serif;
    font-size:25px;
    color: black;}
@media only screen and (max-width: 768px) {
  margin:30px 0px 20px -20px;
  padding:0px 0px 0px 20px;
  height:80px;
h1{ 
    margin-top:10px;
    font-size:10px;}}`;

const Sectiondiv2 =styled.div` 
 width:100%;
 margin:20px 0px 20px -20px;
 padding:0px 0px 0px 20px;
 height:200px;
 background:url(${img1});
 background:cover;
 display:flex;
 flex-direction:row;
h1{ color:white;
    margin:auto;
    font-size:50px;
    color: white;}
@media only screen and (max-width: 768px) {
  margin:5px 0px 20px -20px;
  padding:20px -10px 10px 0px;
  height:50px;
  h1{ color:white;
    margin:auto;
    font-size:15px;
    color: white;}
}`;

export default Partners