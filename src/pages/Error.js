import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';


const Error = () => {
    const navigate = useNavigate();

const Errorcss = styled.div`
background: #41295a;  
background: -webkit-linear-gradient(to left, #2F0743, #41295a); 
background: linear-gradient(to left, #2F0743, #41295a); 
width: 100%;
height: 60vh;
color: white;
z-index: -1;
text-align: center;
margin:0px 0px 0px -8px;
padding: 250px 14px 0px 0px ;
font-size: 40px;
h1{
@media only screen and (max-width: 768px) {font-size:30px;}}`;
const Bttn = styled.div`
 width: 300px;
 height: 100px;
 display: flex;
 justify-content: center;
 text-align: center;
 align-items: center;
 cursor: pointer;
 margin: auto;
 border-radius: 7px;
 border: 1px solid white;
 @media only screen and (max-width: 768px) {width:200px;height: 70px; font-size:30px;}
`;

const handleBackToHome = () => {
    navigate('/');
  };
return(<>
<Errorcss>
<h1> Oops ! Error404</h1>
<Bttn onClick={handleBackToHome} >Back to Home </Bttn>
</Errorcss>
</>);





}
export default Error;