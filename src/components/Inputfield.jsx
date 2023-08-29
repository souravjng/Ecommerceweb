import React from 'react'
import styled from "styled-components";

const Inputfield = (props) => {

  return (
    <Card >
    <h1>{props.name}</h1><input type='text' placeholder={props.placeholder} />
    </Card>)}

const Card = styled.div`
  height: 90px;
  margin: 10px 0px 0px 30px ;
  display: inline-block;
  width: 45%;
  h1{font-size: 25px;
  color:white;
  margin: 0px 0px 0px 10px;}
  input{
  border: 1px solid rgba(128, 128, 128, 0.573);
  width: 100%;
  outline: none;
  border-radius: 4px;
  font-size: 20px;
  padding: 0px 10px 0px 10px ;
  height: 45px;
  margin: 5px 0px 0px 10px;}
@media only screen and (max-width: 768px) {
  margin: 0px 0px 0px 30px ;
  width: 80%;
  h1{margin: 0px 0px 0px 0px;
  font-size: 15px;}
  input{
  margin: 0px 0px 0px 0px;
  font-size: 15px;
  height: 35px;}}`;

export  default Inputfield;