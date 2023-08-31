const SortReducer = (state, action) => {

  if (action.type === 'ADD_ALL_PRODUCTS') {
    return {
      ...state,
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

  else {return state;}
};

export default SortReducer;
