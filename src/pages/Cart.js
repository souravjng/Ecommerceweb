import React from 'react'
import styled from "styled-components";
import Cartproducts from '../components/Cartproducts';
import { Useproductcontext } from '../context/Productcontext';
import Priceformat from '../smallfuction/Priceformat';



const Cart = () =>{
  const {Cartdata,Totalprice}=Useproductcontext();
  if(Cartdata.length===0){
    return <Emptydiv><h1>No items in cart</h1></Emptydiv>
  }

    return(<>
<Div1>
<Divleft>
{[...Cartdata].map((curr) => (
  <Cartproducts
    id={curr.id}
    {...curr}
  />
))}
</Divleft>


<Divright Cartdata={Cartdata}  >
<Div1right>
<Div1rightproductsdetails>
  <div className='detaildiv' >
  <p>Name</p><p>Price</p><p>Quantity</p><p>Total</p>
  </div>
  <div className='detaildiv1' >
  <div className='detaildiv2' >{[...Cartdata].map((curr)=>(<div> <p>{curr.name}</p></div>))}</div>
  <div className='detaildiv2' >{[...Cartdata].map((curr)=>(<div> <p> {<Priceformat price={curr.price}/>}</p></div>))}</div>
  <div className='detaildiv2' >{[...Cartdata].map((curr)=>(<div> <p>{curr.Quantity}</p></div>))}</div>
  <div className='detaildiv2' >{[...Cartdata].map((curr)=>(<div> <p> {<Priceformat price={curr.Quantity*curr.price}/>}</p></div>))}</div>
  </div>
</Div1rightproductsdetails>
<Pricehead Cartdata={Cartdata}>
<Pricehead2>
<h1 className='totalp1'>Totalprice :</h1>
<h1 className='totalp2'> {<Priceformat price={Totalprice}/>}</h1></Pricehead2>
<Rightbuttondiv>
<button>Place order</button>
</Rightbuttondiv>

</Pricehead>
</Div1right>

</Divright>



</Div1>
</>);
}

const Emptydiv = styled.div`
display: flex;
justify-content: center;
width: 100%;
height: 700px;
h1{margin:auto;font-size:64px;color: grey;
@media only screen and (max-width: 768px) {
  font-size:34px;
}}
`;

const Div1 = styled.div`
width:70%;
height:auto;
margin:auto;
flex-wrap:wrap;
display: flex;
flex-direction:row;
padding: 0px 0px 0px 0px;
background-color:#bebcbcba;
@media only screen and (max-width: 768px) {
    width:100%;
    /* overflow:hidden; */
    margin: 0px 0px 800px -8px;
    padding: 0px 14px 0px 0px;
    display: flex;
    background-color:white;
    flex-direction:column;
}`;

const Divleft = styled.div`
flex:2;
height:auto;
margin:0px 0px 0px 0px;
padding: 0px 10px 50px 10px;
background-color:#bebcbcba;
@media only screen and (max-width: 768px) {
    width:100%;
    background-color:white;
    padding: 0px 3px 20px 3px;
}`;


const Divright = styled.div`
flex:1;
height:500px;
margin:0px 0px 300px 0px;
padding: 0px 0px 0px 0px;
@media only screen and (max-width: 768px) {
display: ${(props) => (props.Cartdata.length === 0  ? 'none' : 'block')};
}`;

const Div1right = styled.div`
 width:100%;
 height:400px;`;

const Div1rightproductsdetails= styled.div`
 background-color:#a7a7a7f7;
 width:100%;
 height:auto;
 overflow:hidden;
 .detaildiv{
  display: flex;
  flex-direction:row;
  justify-content:space-around;
  p{font-size:21px; font-weight:bold;}
 }
 .detaildiv1{
  display: flex;
  flex-direction:row;
  justify-content:space-around;
div{flex:1; margin:auto;p{font-size:14px;}}
 }
 .detaildiv2{
  display: flex;
  flex-direction:column;
 }

@media only screen and (max-width: 768px) {display:none;}`;

const Rightbuttondiv=styled.div`
width:100%;
@media only screen and (max-width: 768px) {
  width:50%;
  border:1px solid black;
  border-radius: 4px;
  background-color:orange;
  height:55px;
  position:absolute;
  margin: 7px 10px 0px 0px;
  right: 0;
  font-size:20px;}
button{
  width:100%;
  border:1px solid black;
  color: white;
  background-color:#ef6c00;
  border-radius: 4px;
  height:95px;
  font-size:30px;
  &:hover{background-color:#45736a;cursor: pointer;}
@media only screen and (max-width: 768px) {
  font-size: 24px;
  background-color:#607d8b;
  height:55px;}}`;

 const Pricehead=styled.div`
display:flex;
flex-direction:column;
display:${(props)=>(props.Cartdata.length===0?'none':'block')};
@media only screen and (max-width: 768px) {
     width:100%;
     display: flex;
     flex-direction: row;
    margin:0px 0px 0px 0px;
    height:70px;
    flex:none;
    background-color:#ffbe0b;
    position:fixed;
    bottom: 0;}`;


const Pricehead2=styled.div`
  display:flex;flex-direction:row;margin: 10px 0px 10px 10px;
.totalp1{
 font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
 font-weight:light;
 font-size: 26px;
 margin: 4px 10px 0px 0px;
@media only screen and (max-width: 768px) {display:none;}}
.totalp2{
 margin: 0px 0px 0px 0px;
 color:red; 
 font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
@media only screen and (max-width: 768px) {margin:10px 0px 0px 0px;color:black; font-size:23px;}}`;





export default Cart;