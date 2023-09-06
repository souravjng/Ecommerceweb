const productsreducer = (state,action) => {
  switch(action.type){

    case 'SET_LOADING':
    return{
        ...state,
        Loading:true,};

    case 'MY_API_DATA':
    const sortdata=action.payload.filter((currdata)=>{ return currdata.featured===true;});
        return{
              ...state,
              Loading:false,
              products:action.payload,
              featureproducts: sortdata,};

    case 'API_ERROR':
    return{
        ...state,
        Loading:false,
        Error:true,};

    case 'Set_Single_Product':
      return{
          ...state,
          singleLoading:false,
          singleproduct:action.payload,
          };

    case 'ADD_TO_CART':
      
      let checkmecartfirst=state.Cartdata.some((curr)=>curr.id===action.payload.id);
      if(!checkmecartfirst){ 
        let newarray=[...state.Cartdata,action.payload];         
        let counttotal=newarray.reduce((storage,curr)=>{return storage+curr.price*curr.Quantity;},0); 
        // localStorage.setItem("reactappdata",JSON.stringify({newarray,counttotal}));                                //for local storage
        return{...state,singleLoading:false,Cartdata:newarray,Totalprice:counttotal,};}
        else{
          if(action.payload.del===true){
        let newarray=state.Cartdata.filter((curr)=>curr.id!==action.payload.id);
        let counttotal=newarray.reduce((storage,curr)=>{return storage+curr.price*curr.Quantity;},0);
        // localStorage.setItem("reactappdata",JSON.stringify({newarray,counttotal}));
        return{...state,singleLoading:false,Cartdata:newarray,Totalprice:counttotal,};}
          }
          break;
    
    // case'ADD_TO_CART_FROM_LOCAL':                                                             //for local storage
    //     let checkmecartfirst2=state.Cartdata.some((curr)=>curr.id===action.payload.id);
    //     if(!checkmecartfirst2){ 
    //     return{...state,Cartdata:action.payload.newarray,Totalprice:action.payload.counttotal,};}
        
      
    default:
        return state;
  }
  return state;
};

export default productsreducer;