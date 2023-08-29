import React from 'react'
import styled from "styled-components";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';



const Service = (props) => {
  const {margin}=props;
  const {margin2}=props;

const Servicediv =styled.div`
 width:93%;
 height:300px;
 padding:0px 30px 0px 0px;
 display:flex;
 margin:${margin};
 flex-direction:row;
@media only screen and (max-width: 768px) {
  height:auto;
  margin:30px 0px 0px 0px;
  width:95%;
  flex-wrap:wrap;}`;
const Servicedivbox =styled.div`
width:200px;
cursor:pointer;
background-color:white;
height:200px;
margin:${margin2};
text-shadow: 5px 10px 0px 0px red;
box-shadow: 10px 10px 0px 0px #fb8c00;
border-radius:4px;
text-align:center;
padding:30px 30px 0px 30px;
h1{font-family: 'Rajdhani', sans-serif;margin:10% 0px 0px 0px ;}
@media only screen and (max-width: 768px) {
width:70px;
padding:0px 0px 0px 0px;
height:70px;
box-shadow: 4px 4px 0px 0px #fb8c00;
text-align:center;
margin:0px 2% 0px 2%;
font-size:0.2rem;
h1{font-size:8px;}
.serviceicon{margin:0px 0px 0px -6px ;}}`;


  return (
    <Servicediv>
    <Servicedivbox><LocalShippingIcon className='serviceicon' fontSize='large'/><h1>Free Delivery</h1></Servicedivbox>
    <Servicedivbox><MonetizationOnIcon className='serviceicon' fontSize='large'/><h1>Online CashBack</h1></Servicedivbox>
    <Servicedivbox><LocalOfferIcon className='serviceicon' fontSize='large'/><h1>Super Offer</h1></Servicedivbox>
    <Servicedivbox><AccountBalanceWalletIcon className='serviceicon' fontSize='large'/><h1>Moneyback Guaranteed</h1></Servicedivbox>
    </Servicediv>)}






export default Service;