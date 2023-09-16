import React,{useEffect } from 'react';
import Service from "../components/Service";
import Partners from '../components/Partners';
import Headseaction from '../components/Headseaction';
import Featureproducts from '../components/Featureproducts';
import {  useSelector,useDispatch } from 'react-redux';
import {fetchProducts} from '../store/productSlice';
import Loader from '../components/Loader';



const Home = (props) => {
const dispatch=useDispatch();
useEffect(() => {dispatch(fetchProducts());}, []);
    
const laptops=useSelector((state)=>state.product.featurelaptops);
const smartphones=useSelector((state)=>state.product.featurephones);
const {status}=useSelector((state)=>state.singleproduct);

return(<>
<div className='Homecontainer'>
{status === 'Success' ? undefined :<Loader/> }
<Headseaction/>
<Service margin='0px 0px 0px 20px'  margin2='auto'/>
<Featureproducts data={laptops} text="laptops"/>
<Partners/>
<Featureproducts data={smartphones} text="smartphones"/>




</div>
</>);
}
export default Home;