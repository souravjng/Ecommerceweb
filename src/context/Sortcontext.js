import { useContext, useEffect, useReducer } from "react";
import { createContext } from "react";
import {Useproductcontext} from './Productcontext';
import SortReducer from "../reducer/SortReducer";



const Filtercontext=createContext();                           //create

const initialstate={
    Sortproducts:[],
};

const Filtercontextprovider = ({children}) => {                   //provide
const {products}=Useproductcontext();
const [state,dispatch]=useReducer(SortReducer,initialstate);



useEffect(()=>{dispatch({payload:products});},[products]);

  return (
    <Filtercontext.Provider value={{...state}}>           
    {children}
    </Filtercontext.Provider>
  );
};


export const useFiltercontext =()=>{             
    return useContext(Filtercontext);
};



export default Filtercontextprovider;