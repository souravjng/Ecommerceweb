import React from 'react';
import Service from "../components/Service";
import Partners from '../components/Partners';
import Headseaction from '../components/Headseaction';
import Featureproducts from '../components/Featureproducts';


const Home = (props) => {

return(<>
<div className='Homecontainer'>
<Headseaction/>
<Service margin='0px 0px 0px 20px'  margin2='auto'/>
<Featureproducts/>
<Partners/>




</div>
</>);
}
export default Home;