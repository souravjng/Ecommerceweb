import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styled from "styled-components";


const Footer = () => {
  return (
    <Footerdiv>
        <div>
        <a href='https://www.facebook.com'><FacebookIcon color="primary" fontSize="large"/></a>
        <a href='https://www.instagram.com'><InstagramIcon color="secondary" fontSize="large"/></a>
        <a href='https://www.Linkedin.com'><LinkedInIcon color="primary" fontSize="large"/></a></div>
        <h1>Info . Support . Marketing</h1>
        <h1>Terms of Use . Privary Policy</h1>
        <h1>®2023 Clarity Money</h1>
    </Footerdiv>
  )
}

const Footerdiv =styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 8rem;
  background: black;
  z-index:-1;
  margin:0px 0px 0px -8px ;
  padding:10px 14px 0px 0px;
  position:relative;
  bottom: 0;
  font-family: 'Montserrat', sans-serif;
  div{text-align:center;}
  h1{
      font-size:10px;
      color:white;
      text-align:center;}
  @media only screen and (max-width: 768px) {
    height: 4rem;
    h1{
      font-size:5px;
      color:white;
      text-align:center;}}`;

export default Footer;