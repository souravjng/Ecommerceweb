import React from 'react';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import Priceformat from '../smallfuction/Priceformat';

const Product = (curr) => {
    const {id,name,image,price,category}=curr;
    return(<>
    <NavLink  to={`/Singleproduct/${id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
    <Productdiv >
    <figcaption className='caption'>{category}</figcaption>
    <Productimg ><img src={image} alt={name}></img></Productimg>
    <Productname ><p>{name}</p></Productname>
    <Productprice ><p>{<Priceformat price={price}/>}</p></Productprice>
    </Productdiv>
    </NavLink>
    </>);}

const Productdiv = styled.div`
  width: 13rem;
  height: 17rem;
  text-align: center;
  background-color:white;
  border-radius: 4px;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  overflow: hidden;
  font-weight:bolder;
  padding:3px 3px 15px 3px ;
  border: 1px solid rgba(105, 105, 105, 0.538);
  margin:10px 10px 10px 20px  ;
@media only screen and (max-width: 768px) {
  width: 6rem;
  font-size: 13px;
  padding:3px 3px 15px 3px ;
  justify-content:center;
  margin:1rem 0.5rem 1rem 0.5rem ;
  height: 8.5rem;
}
  &:hover{box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;}`;
const Productimg = styled.div`
  width: 13rem;
  overflow: hidden;
  border-radius: 7px 7px 0px 0px;
  height: 12rem;
@media only screen and (max-width: 768px) {
  width: 6rem;
  height: 6rem;
}`;
const Productname = styled.div`
  padding: 0px 0px 10px 0px ;
  margin: -8px 0px 0px 0px ;
  font-size: 16px;
  width: 13rem;
  font-weight:bold;
  font-family: 'Rajdhani', sans-serif;
  height: 2rem;
@media only screen and (max-width: 768px) {
  width: 6rem;
  font-size: 13px;
  height: 1rem;
}`;
const Productprice = styled.div`
  padding: 0px 0px 10px 0px ;
  margin: -25px 0px 0px 0px ;
  font-size: 17px;
  width: 13rem;
  height: 2rem;
@media only screen and (max-width: 768px) {
  width: 6rem;
  font-size: 13px;
  height: 1rem;
}`;

export default Product;