import React from 'react';
import { styled } from 'styled-components';

const Error = () => {

const Errorcss = styled.div`
background: #41295a;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #2F0743, #41295a);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #2F0743, #41295a); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
width: 100%;
height: 60vh;
color: white;
z-index: -1;
text-align: center;
margin:0px 0px 0px -8px;
padding: 250px 14px 0px 0px ;
font-size: 40px;
h1{
@media only screen and (max-width: 768px) {font-size:25px;}}`;

return(<>
<Errorcss>
<h1> Oops ! Error404</h1>
</Errorcss>
</>);





}
export default Error;