const SortReducer = (state, action) => {
  
  if (action.type === 'ADD_ALL_PRODUCTS') {
    return {
      ...state,
      Allproducts: [...action.payload],
      Sortproducts: [...action.payload],
      Loading: false,
    };}

  else if (action.type === 'Low to High') {
    const sortdata = [...state.Sortproducts].sort((a, b) => a.price - b.price);
    return {
      ...state,
      Sortproducts:sortdata,
    };}

   else if (action.type === 'High to low') {
    const sortdata = [...state.Sortproducts].sort((a, b) => b.price - a.price);
    return {
      ...state,
      Sortproducts:sortdata,
    };} 

  else if (action.type === 'A-Z') {
      
    const sortdata = [...state.Sortproducts].sort((a, b) => a.name.localeCompare(b.name));
    return {
      ...state,
      Sortproducts:sortdata,
    };}
    
  else if (action.payload === 'category') {
      const sortdata = [...state.Allproducts].filter((curr)=>{return curr.category.toLowerCase().includes(action.type);})
    return {
      ...state,
      filtersort:sortdata,
      Sortproducts:sortdata,
    };}
  else if (action.payload && action.type === 'All') {
  return {
    ...state,
    Sortproducts:[...state.Allproducts],
  };}
  else if (action.payload === 'pricefilter') {
       if([...state.filtersort].length===0){
        [...state.filtersort]=[...state.Allproducts];
       }
       const sortdata=[...state.filtersort].filter((curr)=>{return curr.price<=action.type});
    return {
      ...state,
      Sortproducts:[...sortdata],
    };}
    
  else {
    const filterby=action.type.toLowerCase();
    const sortdata = [...state.Allproducts].filter(curr => curr.name.toLowerCase().includes(filterby) || curr.category.toLowerCase().includes(filterby));
    return {...state,
    Sortproducts:sortdata,}}



    
};

export default SortReducer;
