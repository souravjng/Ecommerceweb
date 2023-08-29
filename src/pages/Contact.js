import React from 'react';
import Inputfield from '../components/Inputfield';



const Contact = () => {

return(<>
<div className='parentcontact'>
<div className='contactimg'></div>
<div className='contact'>
<Inputfield placeholder={"Your FirstName"} name={"FirstName"}/>
<Inputfield placeholder={"Your lastName"} name={"LastName"}/>
<Inputfield placeholder={"Your Email Address"} name={"Email"}/>
<Inputfield placeholder={"Subject"} name={"Subject"}/>
<div className='contactabout'><h1>About : </h1><textarea placeholder='Text...' type='text'  /></div> 
<div className='contactbtn'><button >Submit</button></div>
</div>
</div>
</>);





}
export default Contact;