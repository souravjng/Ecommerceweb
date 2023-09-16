import React from 'react';
import styled from "styled-components";
import Banner from '../components/Banner';
import Product from './Product';

const Featureproducts = ({ data, text }) => {
return(<>
   
  <Banner text={`Best ${text}`}/>
  <Allproductsdiv>{data.map((curr)=>{ return <Product key={curr.id} {...curr}/>;})}</Allproductsdiv>
</>);}

  const Allproductsdiv = styled.div`
  display: flex;
  height:330px;
  overflow:hidden;
  flex-direction: row;
  background-color:black;
  flex-wrap:wrap;
  justify-content:center;
  padding:0px 0px 0px 8px ;
  margin: auto ;
  @media only screen and (max-width: 768px) {
    
    height:200px;
    margin: 0px 0px 0px -10px ;
  }`;

export default Featureproducts;