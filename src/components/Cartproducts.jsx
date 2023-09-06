import React from 'react';
import styled from "styled-components";
import Priceformat from '../smallfuction/Priceformat';
import ClearIcon from '@mui/icons-material/Clear';
import { NavLink } from 'react-router-dom';
import { Useproductcontext } from '../context/Productcontext';



const Cartproducts = (props) => {
  const { id, description, name, price, cartproductimage ,Quantity,} = props;
  const {Addtocart}=Useproductcontext();
  const del =true;

   return (<>
    
    <Deletecart onClick={()=>Addtocart({id,del})}><ClearIcon fontSize='large'/></Deletecart>
    
<NavLink  to={`/Singleproduct/${id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
    <Div1  key={id}>
    <Divleft style={{ background: `url(${cartproductimage})`, backgroundSize: 'cover'  }}>
    </Divleft>
    <Divright>
       <Divrighth1>{name}</Divrighth1>
       <Divrightp>{description}</Divrightp>
       <Divrightbox>
       <Divquantity>Quantity: {Quantity}</Divquantity>
       <Divrightprice>{<Priceformat price={Quantity*price}/>}</Divrightprice>
       </Divrightbox>
    </Divright>
    </Div1>
</NavLink>
    </>)
}



const Deletecart = styled.div`
  position:relative;
  right: 10px;
  margin: -35px 0px 0px 0px;
  top: 45px;
  cursor:pointer;
  float:right;`;
  
const Div1 = styled.div`
border: 1px solid grey;
width:100%;
margin:5px 0px 0px 0px;
border-radius:4px;
height:200px;
display:flex;
flex-direction:row;

@media only screen and (max-width: 768px) {
  width:100%;
  height:120px;
}`;

const Divleft = styled.div`
flex:1;
margin:0px 0px 0px 0px;
padding: 0px 0px 0px 0px;
background-color:black;
@media only screen and (max-width: 768px) {
width: 30%;
height: 120px;
}`;

const Divright = styled.div`
flex:2;
background-color:#e0e0e0;
margin:0px 0px 0px 0px;
border-radius:0px 4px 4px 0px;
font-family: 'Mulish', sans-serif;
padding: 0px 0px 0px 0px;
@media only screen and (max-width: 768px) {
  width:70%;}`;



const Divrighth1 = styled.h1`
font-size: 20px;
margin: 20px 0px 0px 20px;
@media only screen and (max-width: 768px) {
  font-size: 15px;
margin: 10px 0px 0px 10px;
}
`;
const Divrightp = styled.p`
font-size: 20px;
width:90%;
height:75px;
overflow: hidden;
margin: 10px 0px 0px 20px;
@media only screen and (max-width: 768px) {
  font-size: 13px;
  margin: 5px 0px 0px 10px;
  height:35px;
}
`;
const Divquantity = styled.div`
font-size:13px;
margin: 27px 0px 0px 7px;


`;

const Divrightbox = styled.div`
width:100%;
height: 60px;
display: flex;
flex-direction:row;
margin: 0px 0px 0px 20px;
@media only screen and (max-width: 768px) {
  margin: 2px 0px 0px 0px;
  height:45px;
}
`;
const Divrightprice = styled.p`
font-size: 25px;

color: red;
margin: 20px 0px 0px 220px;
@media only screen and (max-width: 768px) {
  font-size: 15px;
  position:absolute;
  right: 20px;
  margin: 27px 0px 0px 0px;
  
}
`;








export default Cartproducts;