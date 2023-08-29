import { createContext,useContext, useEffect, useReducer } from 'react';
import axios from "axios";
import productsreducer from '../reducer/productsreducer';

const AppContext=createContext();                                  //CREATE

const API="https://api.pujakaitem.com/api/products";

const intialstate={                                                         //TEMPRARY STORAGE   
  Loading: false,
  Error: false,
  products:[],
  featureproducts:[],
  singleLoading:false,
  singleproduct:{},};

const AppProvider=({children})=>{                                        
const [state,dispatch]=useReducer( productsreducer,intialstate);        //USEREDUCER HOOK



const getproduct= async(url)=>{                                        //FILTERED PRODUCT                      
    dispatch({type:'SET_LOADING'});                                            
try{                                                                    
    const res=await axios.get(url);                                        
    const products= await res.data;                                       
    dispatch({type:'MY_API_DATA',payload:products});}        
catch(error){
      dispatch({type:'API_ERROR'});}}


const getsingleproduct = async(url)=>{                                   //FILTERED SINGLE PRODUCT                   
  dispatch({type:'SET_LOADING'});    
try{                                   
  const res=await axios.get(url);                         
  const singleproduct= await res.data;                             
  dispatch({type:'Set_Single_Product',payload:singleproduct});} 
catch(error){
  dispatch({type:'SET_SINGLE_ERROR'});}}
 
         

useEffect(()=>{getproduct(API);},[]);                            //USE EFFECT HOOK (FETCH ALL PRODUCT)


    return (                                                      //TAKE APP COMPONENT AS CHILDREN
    <AppContext.Provider value={{...state,getsingleproduct}}>               
    {children}
    </AppContext.Provider>);};                                          

const Useproductcontext=()=>{return useContext(AppContext);};             //PROVIDER


export {AppProvider,AppContext,Useproductcontext};      