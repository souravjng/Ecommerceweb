import React,{useEffect } from 'react';
import Service from "../components/Service";
import Partners from '../components/Partners';
import Headseaction from '../components/Headseaction';
import Featureproducts from '../components/Featureproducts';
import {  useSelector,useDispatch } from 'react-redux';
import {fetchProducts} from '../store/productSlice';



const Home = (props) => {
    
const dispatch=useDispatch();
useEffect(() => {dispatch(fetchProducts());}, []);
    
const laptops=useSelector((state)=>state.product.featurelaptops);
const smartphones=useSelector((state)=>state.product.featurephones);

return(<>
<div className='Homecontainer'>
<Headseaction/>
<Service margin='0px 0px 0px 20px'  margin2='auto'/>
<Featureproducts data={laptops}/>
<Partners/>
<Featureproducts data={smartphones}/>




</div>
</>);
}
export default Home;