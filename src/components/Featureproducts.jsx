import React from 'react';
import styled from "styled-components";
import Banner from '../components/Banner';
import Product from './Product';
import Loader from '../components/Loader';
import {Useproductcontext} from '../context/Productcontext';

const Featureproducts = () => {

const {Loading,featureproducts}=Useproductcontext();

return(<>
   
   {Loading ? <Loader /> : null}
  <Banner text={" Best Products"}/>
  <Allproductsdiv>{featureproducts.map((curr)=>{ return <Product key={curr.id} {...curr}/>;})}</Allproductsdiv>
</>);}

  const Allproductsdiv = styled.div`
  display: flex;
  flex-direction: row;
  background-color:black;
  flex-wrap:wrap;
  height: auto;
  justify-content:center;
  padding:0px 0px 0px 8px ;
  margin: auto ;
  @media only screen and (max-width: 768px) {
    margin: 0px 0px 0px -10px ;
  }`;

export default Featureproducts;