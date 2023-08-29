import React,{useState} from 'react';
import Button from './Button';
import logo from '../asserts/logo512.png';
import {NavLink} from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';


let navbarbackground='black';
let btnbgcolor='black';
let btncolor='white';
let btnbghovercolor='white';
let btnhovercolor='black';



const Navbar = () =>{
const icon= <ShoppingCartIcon fontSize='large'/>
const [real,update]=useState("");
const [real2,update2]=useState("");
const submit = (obj) =>{ 
  obj.preventDefault();
  update2(real);
  update("");}
const shownavbar=()=>{
  document.getElementById("hamburger").style.display="none";
  document.getElementById("Clearnavbar").style.display="inline";
  document.getElementById("Nav").style.display="inline";
  document.getElementById("searchbar").style.display="none";
  document.getElementById("logo").style.display="none";
}

const hidenavbar=()=>{
  if(window.screen.width<786){
  document.getElementById("hamburger").style.display="inline";
  document.getElementById("Clearnavbar").style.display="none";
  document.getElementById("searchbar").style.display="inline";
  document.getElementById("logo").style.display="inline";
  document.getElementById("Nav").style.display="none";
  }
  

}


return (<>
<Navbarcss>
<NavLink id='logo' to='./Home'><img src={logo} width={'50rem'} height={'50rem'} href='logo'/></NavLink>
<Navbarsearch id='searchbar'>
<Form onSubmit={submit}>
<Navbarsearchinput className='navsearchinput'   type='text' placeholder="Search your product here" onChange={(obj)=>update(obj.target.value)}  value={real} ></Navbarsearchinput>
<Navbarsearchicon className='navsearchbtn'  type='submit'><SearchIcon fontSize='large'/></Navbarsearchicon>
</Form>
<h1>{real2}</h1>
</Navbarsearch>
<Hamburger id='hamburger' onClick={shownavbar}><MenuIcon sx={{ fontSize: 55 }} fontSize="large"/></Hamburger>
<Navbarmenu id='Nav'>
<Clearnav id='Clearnavbar' onClick={hidenavbar}><ClearIcon sx={{ fontSize: 55 }} fontSize="large"/></Clearnav>
<NavLink onClick={hidenavbar} to='./Cart'><Button name='cart' text={icon} /></NavLink>
<NavLink onClick={hidenavbar} to='./Contact'><Button text = {'Contact'}/></NavLink>
<NavLink onClick={hidenavbar} to='./Products'><Button text = {'Products'}/></NavLink>
<NavLink onClick={hidenavbar} to='./About'><Button text = {'About'}/></NavLink>
<NavLink onClick={hidenavbar} to='./Home'><Button text = {'Home'}/></NavLink>
</Navbarmenu>

</Navbarcss>

</>);}

export default Navbar;


const Navbarcss = styled.div`
  background: ${navbarbackground};
  margin: -8px 0px 0px -8px ;
  z-index:10;
  padding: 0px 0px 0px 14px ;
  width:100%;
  display: flex;
  flex-direction: row;
  height: 4rem;
  @media only screen and (max-width: 768px) {
  height: 3.5rem;}
img{margin:5px 0px 0px 0px ;
  animation: rotate 10s linear infinite;
  max-width: 100%;


@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}}`;

const Navbarsearch = styled.div`
  flex-grow: 3;
  margin:3px 0px 0px 0px ;`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 3rem;
  overflow:hidden;
  border-radius: 4px;
  margin: 5px 20px 0px 20px ;
  @media only screen and (max-width: 768px) {
  width: 90%;
  height: 2.3rem;
  margin: 5px 0px 0px 10px ;
  }`;

const Navbarsearchinput = styled.input`
  width: 100%;
  height: 2.85rem;
  font-size: 16px;
  text-decoration: none;
  outline: none;
  border: none;
  border-radius: 7px 0px 0px 7px;
  padding: 0px 5px 0px 10px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 2.3rem;
    font-size:13px;
  }`;

const Navbarsearchicon = styled.button`
  margin:0px 0px 0px  -3px;
  background-color: ${btnbgcolor};
  width: 3rem;
  color: ${btncolor};
  overflow:hidden;
  border-radius: 0px 4px 4px 0px;
  cursor: pointer;
  border: 1px solid ${btncolor};
  height: 2.85rem;
@media only screen and (max-width: 768px) {
  height: 2.3rem;
  }
&:hover{
  color:${btnhovercolor};
  background-color:${btnbghovercolor};
  border-left: 1px solid ${btnbgcolor};
  
}`;
const Hamburger = styled.div`

   display:none;
   @media only screen and (max-width: 768px) {
   width:4rem;
   display:inline;
   color:white;
   cursor:pointer;
   height: 3.5rem;
   margin:0px 0px 0px 0px; 
  }`;
const Clearnav = styled.div`
   display:none;
   @media only screen and (max-width: 768px) {
   display:none;
   color:black;
   cursor:pointer;
   margin:5px 0px 0px 0px; 
   }`;

const Navbarmenu = styled.div`
  flex-grow: 1;
  flex-wrap:wrap;
  overflow:hidden;
  display: flex;
  padding: 0px 15px 0px 0px ;
  flex-direction: row-reverse;
  @media only screen and (max-width: 768px) {
   display:none;
   flex-direction:column;
   width:100%;
   height: 100vh;
   z-index:2;
   margin:0px 0px 0px -15px;
   background-color:white;
   position:sticky;}`;
