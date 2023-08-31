import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import {Useproductcontext} from './Productcontext';
import SortReducer from "../reducer/SortReducer";



const Filtercontext=createContext();                           //create

const initialstate={
    Sortproducts:[],
    Loading:true,
};

const Filtercontextprovider = ({children}) => {                   //provide
const {products}=Useproductcontext();
const [state,dispatch]=useReducer(SortReducer,initialstate);


const Sortfun=(obj)=>{
  dispatch({type:obj});
}

useEffect(()=>{dispatch({type:'ADD_ALL_PRODUCTS',payload:products});},[products]);

  return (
    <Filtercontext.Provider value={{...state,Sortfun}}>           
    {children}
    </Filtercontext.Provider>
  );
};


const useFiltercontext =()=>{             
    return useContext(Filtercontext);
};



export default Filtercontextprovider;
export {useFiltercontext};