import React from 'react';
import Header from './components/Header';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Singleproduct from './pages/Singleproduct';
import Home from './pages/Home';
import Error from './pages/Error';
import Cart from './pages/Cart';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const App = () =>{

return(<>

<BrowserRouter>
<Routes> 
<Route path='/' element={<Header/>}>

<Route index element={<Home/>}/>
<Route path='Home' element={<Home/>}/>
<Route path='About' element={<About/>}/>
<Route path='Products' element={<Products/>}/>
<Route path='Contact' element={<Contact/>}/>
<Route path='Singleproduct/:id' element={<Singleproduct/>}/>
<Route path='Cart' element={<Cart/>}/>
<Route path='*' element={<Error/>}/>
</Route>

</Routes>
</BrowserRouter>

</>);





}
export default App;