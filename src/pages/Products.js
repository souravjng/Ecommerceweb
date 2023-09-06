import React, { useState } from 'react';
import styled from "styled-components";
import {useFiltercontext} from '../context/Sortcontext';
import Product from '../components/Product';
import Filterproducts from '../components/Filterproducts';
import Loader from '../components/Loader';
import Priceformat from '../smallfuction/Priceformat';
import { Button } from '@mui/material';
 
const Products = () => {
const [activecategory,setactivecategory]=useState();
const [rangeprice,setrangeprice]=useState(null);
const {Loading,Allproducts,Sortproducts}=useFiltercontext();
const {Filtersearch}=useFiltercontext();
const uniquecategory=[...new Set(Allproducts.map((curr)=>curr.category))];
const maximumprice=Math.max(...Allproducts.map((curr)=>curr.price));
const actvcategory=(obj,obj2)=>{
  setactivecategory(obj);
  setrangeprice(obj2);
  Filtersearch(obj,obj2);}
const filterprice=(obj)=>{
  setrangeprice(obj);
  setTimeout(() => {
    
  Filtersearch(obj,'pricefilter');;
  },300);}

return(<>
<Div1>
{Loading ? <Loader /> : null}
<Div1left>
<div>
   <h1 className='box'>Category</h1>
   <p style={{color: activecategory === "All" ? 'red' : 'black'}} onClick={()=>actvcategory('All','All')} className='boxh1' >All</p>
  {uniquecategory.map((curr,index)=>{return <h1 className='boxh1' key={index} onClick={()=>actvcategory(curr,"category")} style={{color: activecategory === curr ? 'red' : 'black'}} >{curr}</h1>;})}
  <div>
  <h1 className='box'>Price</h1>
  <p style={{fontSize:'18px'}} className='boxh1'>{<Priceformat price={rangeprice}/>}</p>
  <input className='boxinput'  type='range' min={0} max={maximumprice} step={60} onChange={(event)=>filterprice(event.target.value)}  />
  </div>
  <Button onClick={()=>actvcategory("All","Max")}>Clear Filters</Button>
</div>
</Div1left>

<Div1right>
<Div1righttop><Filterproducts/></Div1righttop>
<div className='Productsdiv'>
{Sortproducts.map((curr)=>{return <Product key={curr.id} {...curr}/>;})}
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
 padding:0px 0px 0px 15px ;
 margin:0px 0px 0px -8px ;`;

const Div1left =styled.div`
 background-color:#b3e5fc;
 flex: 1;
 font-family: 'Montserrat', sans-serif;
 display:flex;
 flex-direction: row;
 justify-content: center;
 font-size: 10px;
 width:100%;
 height: auto;
 padding:0px 0px 300px 0px ;
 .box{
  margin:30px 0px 0px 0px;
  font-size:26px;
  text-align:center;
  background-color:black;
  color: white;
  width:200px;
  height: 40px;
  padding: 10px 5px 0px 5px;
  border:1px solid black;
 }
 .boxh1{
  font-weight:bold;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  margin:15px 0px 0px 0px;
  font-size:20px;
  text-align:center;
@media only screen and (max-width: 768px) {
    width:100px;
    font-size:15px;
    height: 30px;
}}
.boxinput{
  width:220px;
  @media only screen and (max-width: 768px) {
    width:100px;
  }}
 h1{cursor:pointer;}
@media only screen and (max-width: 768px) {
.box{
  width:100px;
  font-size:15px;
  height: 30px;}
.categoryh1{font-size:12px;}
 };`;

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
   /* justify-content:center; */
   height: auto;
   padding:0px 0px 0px 8px ;
   margin: 30px 0px 30px 40px ;
 @media only screen and (max-width: 768px) { flex:0;margin: 20px 0px 30px 0px ;}
 }`;

const Div1righttop =styled.div`
 flex:1;
 display: flex;
 flex-direction: row;
 background-color:#fb8c00;
 padding: 0px 10px 0px 0px;
 margin:0px 0px 0px 0px ;
 @media only screen and (max-width: 768px) { flex:0;}
`;

 
export default Products;





