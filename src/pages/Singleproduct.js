import styled from "styled-components";
import {useParams} from 'react-router-dom';
import  Loader from '../components/Loader';
import { useEffect } from "react";
import Priceformat from '../smallfuction/Priceformat';
import Service from "../components/Service";
import Cartcounter from "../components/Cartcount";
import Singleproductsimg from "../components/Singleproductsimg";
import { useSelector,useDispatch } from 'react-redux';
import { getsingleproduct} from "../store/singleSlice";
import {Addtocart} from '../store/cartSlice';



const Singleproduct = () => {

const {id}=useParams();
const dispatch=useDispatch();
useEffect(()=>{dispatch(getsingleproduct(id));},[]);
const singleproduct=useSelector((state)=>state.singleproduct.singledata);
const {status}=useSelector((state)=>state.singleproduct);

const {id:productid,title:name,brand:company,price,description,stock,thumbnail,images,rating,discountPercentage}=singleproduct;
let Quantity=1;
let postman2 = (value) => {Quantity=value;};
const sendtocart=()=>{dispatch(Addtocart({productid,name,price,description,stock,thumbnail,Quantity}));}

return(<>
<Singleproductcontainer key={productid}>
{status === 'Success' ? undefined :<Loader/> }
    <Singleproductleftdiv>
    <Singleproductsimg apiimgdata={{thumbnail,images}}/>
    </Singleproductleftdiv>
    <Singleproductrightdiv>
            <h1 className='Singleproduct_right_name'>{name}</h1>
            <del><h1 ><Priceformat price={price*10}/> </h1></del>
            <h1 className='Singleproduct_right_price'><Priceformat price={price}/> </h1>
            <p className='Singleproduct_right_about'>{description}</p>
            <h1  >Rating : {rating}%</h1>
            <div className="Singleproduct_right_Servicediv"><Service margin="-50px 0px 0px 0px" margin2="auto 10px auto 0px" /></div>
            <h1  >Discount : {100-discountPercentage}%</h1>
            <h1  >Available : <span>{stock>0?"In stock":"Out of stock"}</span></h1>
            <Cartcounter countdata={postman2} />
            <div className="Singleproduct_right_div">
            <button>Buy Now</button>
            <button onClick={()=>sendtocart()}>Add To Cart</button>
            </div>
    </Singleproductrightdiv>
</Singleproductcontainer>
</>);}

const Singleproductcontainer = styled.div`
         display: flex;
         flex-direction: row;
         margin:30px 0px 0px 0px ;
         width: 100;
         /* flex-wrap:wrap; */
         height:90vh;
         overflow:hidden;
         @media only screen and (max-width: 768px) {
         flex-direction:column;
         height:auto;
         margin:0px 0px 0px 0px ;}`;
const Singleproductleftdiv = styled.div`
        width: 45rem;
        height:42rem ;
        display:flex;
        flex-direction:row;
        border-radius: 7px;
        @media only screen and (max-width: 768px) {
        flex-direction:column-reverse;
        width: 99%;
        height:auto;
        overflow:hidden;}`;

const Singleproductrightdiv = styled.div`
        display: flex;
        flex-direction: column;
        width: 50rem;
        height:38rem ;
        position:relative;
        margin:0px 0px 0px 20px;
        font-family: 'Mulish', sans-serif;
        border-radius: 7px;
        padding:0px 10px 0px 10px ;
        @media only screen and (max-width: 768px) {
        width: 100%;
        margin:0px 0px 0px -9px;}
        h1{font-size:22px;
        margin:10px 0px 0px 20px;
        span{color:red;}
        @media only screen and (max-width: 768px) {
        font-size:18px;
        margin:0px 0px 0px 10px;}}
               
       .Singleproduct_right_price{color:red;}
       p{font-size:22px;
          margin:20px 0px 0px 20px;
       @media only screen and (max-width: 768px) {
          font-size:16px;
          margin:5px 0px 0px 10px;}}
       
       .Singleproduct_right_div{
         width: 46rem;
         height:7rem ;
         padding:10px 0px 0px 0px ;
         border-radius: 7px;
         margin: 10px 0px 0px -20px;
         background-color: white;
         display: flex;
         flex-direction: row;
       @media only screen and (max-width: 768px) {
         flex-direction: column;
         margin: 10px 0px 0px -9px;
         width: 100%;
         padding:0px 0px 20px 0px ;}
       button {
         width: 20rem;
         height:5rem ;
         padding:10px 0px 0px 0px ;
         border-radius: 7px;
         font-size: 30px;
         cursor: pointer;
         border: none;
         color: white;
         background-color:black;
         margin: 10px 20px 0px 40px;
         justify-content: center;
       @media only screen and (max-width: 768px) {
          font-size:20px;
          width:104%; 
          margin: 10px 20px 0px 0px;
       }}}
       .Singleproduct_right_Servicediv{
          height:130px;
          margin:10px 0px 0px 0px ;
          width:750px;
          padding: 0px 0px 0px 0px ;
          overflow:hidden;
          @media only screen and (max-width: 768px) {
          margin:0px 0px 0px -10px ;
          }
       }`;
       
       
       
export default Singleproduct;