import React, { useState } from 'react';
import styled from "styled-components";
import {useParams} from 'react-router-dom';
import Demodata from "./Links";


const Singleproductsimg = ({apiimgdata=[{url:""}]}) => {
const [realimg,updataimg]=useState(0);  
const {id}=useParams();
console.log(id);
if(id==='-1'){apiimgdata=Demodata;}  
return(<>
<Single_product_left_imgs_div>
{apiimgdata.map((curr,index)=>(<img onClick={()=>updataimg(index)} src={curr.url} key={index}  alt={curr.filename} width={130} height={130}></img>))}
</Single_product_left_imgs_div>
<Single_product_left_img_div><img src={apiimgdata[realimg].url} alt={apiimgdata[realimg].filename} width={450} height={450}></img></Single_product_left_img_div>
</>)}


const Single_product_left_imgs_div=styled.div`
    display:flex;
    flex-direction:column;
    width: 15rem;
    overflow:hidden;
    justify-content:center;
    align-items:center;
    height:42rem ;
 @media only screen and (max-width: 768px) {
  width:99%;
  margin-top:1rem;
  display:flex;
  flex-direction:row;
  height:7rem;}
 img{margin-top:1rem;border-radius:3px;cursor:pointer;
 @media only screen and (max-width: 768px) {
  height:5rem;
  margin:auto;
  width:5rem;}}`;


const Single_product_left_img_div=styled.div`
     width: 35rem;
     height:42rem ;
     display:flex;
     justify-content:center;
     margin: 0px 0px 0px -80px;
     align-items:center;
 @media only screen and (max-width: 768px) {
   border:1px solid grey;
   width:20rem;
   border-radius:4px;
   margin:20px auto 0px auto ;
   height:20rem ;
   overflow:hidden;
   padding:0px 0px 0px 0px ;
  }
 img{border-radius:4px;}`;








export default Singleproductsimg;