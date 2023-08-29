import React from 'react';
import styled from "styled-components";
import {Useproductcontext} from '../context/Productcontext';
import Product from '../components/Product';
import Filterproducts from '../components/Filterproducts';
import Loader from '../components/Loader';

const Products = () => {
    
const {Loading,products}=Useproductcontext();



return(<>
<Div1>
{Loading ? <Loader /> : null}
<Div1left>

</Div1left>

<Div1right>
<Div1righttop><Filterproducts/></Div1righttop>
<div className='Productsdiv'>
{products.map((curr)=>{return <Product key={curr.id} {...curr}/>;})}
</div>
</Div1right>

</Div1>
</>);}

const Div1 =styled.div`
 background-color:black;
 width:100%;
 display: flex;
 flex-direction:row;
 height:auto;
 margin:0px 0px 0px -8px ;`;

const Div1left =styled.div`
 background-color:pink;
 flex: 1;
 width:100%;
 margin:0px 0px 0px 0px ;`;

const Div1right =styled.div`
 background-color:black;
 flex:3;
 width:100%;
 background-color:white;
 display:flex;
 flex-direction:column;
 .Productsdiv{
   flex:9;
   display: flex;
   flex-direction: row;
   flex-wrap:wrap;
   width: 95%;
   justify-content:center;
   height: auto;
   padding:0px 0px 0px 8px ;
   margin: 30px 0px 30px 0px ;
 }`;

const Div1righttop =styled.div`
 flex:1;
 display: flex;
 flex-direction: row;
 background-color:yellow;
 margin:0px 0px 0px 0px ;`;

 
export default Products;





