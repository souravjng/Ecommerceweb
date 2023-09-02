import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import {Useproductcontext} from './Productcontext';
import SortReducer from "../reducer/SortReducer";



const Filtercontext=createContext();                           //create

const initialstate={
    Allproducts:[],
    Sortproducts:[],
    Loading:true,
    filtersort:[],
};

const Filtercontextprovider = ({children}) => {                   //provide
const {products}=Useproductcontext();
const [state,dispatch]=useReducer(SortReducer,initialstate);


const Sortfun=(obj)=>{
  dispatch({type:obj});
  
}
const Filtersearch=(obj1,obj2)=>{
  dispatch({type:obj1,payload:obj2});}


useEffect(()=>{dispatch({type:'ADD_ALL_PRODUCTS',payload:products});},[products]);

  return (
    <Filtercontext.Provider value={{...state,Sortfun,Filtersearch}}>           
    {children}
    </Filtercontext.Provider>
  );
};


const useFiltercontext =()=>{             
    return useContext(Filtercontext);
};



export default Filtercontextprovider;
export {useFiltercontext};