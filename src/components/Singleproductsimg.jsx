import React, { useState } from 'react';
import styled from "styled-components";


const Singleproductsimg = ({apiimgdata}) => {
  const {thumbnail,images}=apiimgdata;
const [realimg,updataimg]=useState(thumbnail);  
return(<>
<SingleProductLeftImgsDiv>
{images?images.map((curr,index)=>(<img onClick={()=>updataimg(curr)} src={curr} key={index}  alt={'singleproductimgs'} width={130} height={130}></img>)):null}
</SingleProductLeftImgsDiv>
<Single_product_left_img_div><img src={realimg} alt={'thumbnail'} width={450} height={450}></img></Single_product_left_img_div>
</>)}


const SingleProductLeftImgsDiv=styled.div`
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