import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AppProvider} from './context/Productcontext';
import Filtercontextprovider from './context/Sortcontext';

ReactDOM.render(<AppProvider><Filtercontextprovider><App/></Filtercontextprovider></AppProvider>,document.getElementById('root'));