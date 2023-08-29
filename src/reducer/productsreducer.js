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

    case 'SET_LOADING':
      return{
          ...state,
          singleLoading:true,};

    case 'Set_Single_Product':
      return{
          ...state,
          singleLoading:false,
          singleproduct:action.payload,
          };

    default:
        return state;
  }
  return state;
};

export default productsreducer;