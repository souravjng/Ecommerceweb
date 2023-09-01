import React, { useState } from 'react';
import styled from "styled-components";
import {useFiltercontext} from '../context/Sortcontext';
import Product from '../components/Product';
import Filterproducts from '../components/Filterproducts';
import Loader from '../components/Loader';
 
const Products = () => {
const [activecategory,setactivecategory]=useState();
const {Loading,Allproducts,Sortproducts}=useFiltercontext();
const {Filtersearch}=useFiltercontext();
const uniquecategory=[...new Set(Allproducts.map((curr)=>curr.category))];
const actvcategory=(obj,obj2)=>{
  setactivecategory(obj);
  Filtersearch(obj,obj2);

}

return(<>
<Div1>
{Loading ? <Loader /> : null}
<Div1left>
<div>
   <h1 className='box'>Category</h1>
   <p style={{color: activecategory === "All" ? 'red' : 'black'}} onClick={()=>actvcategory('All','All')} className='categoryh1' >All</p>
  {uniquecategory.map((curr,index)=>{return <h1 className='categoryh1' key={index} onClick={()=>actvcategory(curr,"category")} style={{color: activecategory === curr ? 'red' : 'black'}} >{curr}</h1>;})}
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
 .categoryh1{
  font-weight:bold;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  margin:15px 0px 0px 0px;
  font-size:26px;
  text-align:center;
 }
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
   justify-content:center;
   height: auto;
   padding:0px 0px 0px 8px ;
   margin: 30px 0px 30px 0px ;
 }`;

const Div1righttop =styled.div`
 flex:1;
 display: flex;
 flex-direction: row;
 background-color:#fb8c00;
 padding: 0px 10px 0px 0px;
 margin:0px 0px 0px 0px ;`;

 
export default Products;





