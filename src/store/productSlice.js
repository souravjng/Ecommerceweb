const { createSlice} = require('@reduxjs/toolkit');

const STATUSES = Object.freeze({
    SUCCESS: 'success',
    ERROR: 'error',
    LOADING: 'Loading...',
});

const productSlice = createSlice({
    name: 'product',                    
    initialState: {                       
        data: [],
        Alldata:[],
        filterdata:[],
        uniquecategory:[],
        featurelaptops:[],
        featurephones:[],
        status: STATUSES.SUCCESS,
    },
    reducers: {                           
        setProducts(state, action) {
            state.data = action.payload.products;
            state.Alldata = state.data;
            state.filterdata = state.Alldata;
            state.uniquecategory=[...new Set (state.data.map((curr)=>curr.category))];
            state.featurephones=state.data.filter((curr)=>curr.category==='smartphones');
            state.featurelaptops=state.data.filter((curr)=>curr.category==='laptops');
            
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
        filtercategory(state,action){
            if(action.payload==='All'){state.Alldata=state.data;state.filterdata=state.Alldata;}
          else{state.Alldata=state.data.filter((curr)=>curr.category===action.payload);state.filterdata=state.Alldata;}
        },
        filterbutton(state,action){
            if(action.payload==='A-Z'){
                state.Alldata.sort((a,b)=> a.title.localeCompare(b.title));}
            else if(action.payload==='High to low'){
                state.Alldata.sort((a,b)=> b.price-a.price);}
            else{
                state.Alldata.sort((a,b)=> a.price-b.price);}
            
        },
        filterrangeprice(state,action){
            state.Alldata=state.filterdata.filter((curr)=>curr.price<=action.payload);
            
        },
        filterwithSearch(state,action){
            const searchtext=action.payload.toLowerCase();
            let checkmecategory=state.data.filter((curr)=>curr.category.toLowerCase().includes(searchtext));
            if(checkmecategory.length!==0){state.Alldata=checkmecategory;}else{
            let checkmename=state.data.filter((curr)=>curr.title.toLowerCase().includes(searchtext));
            if(checkmename){state.Alldata=checkmename;}}}
    },
});

export const { setProducts, setStatus,filtercategory,filterbutton,filterrangeprice,filterwithSearch} = productSlice.actions;
export default productSlice.reducer;

export function fetchProducts() {
    return async function fetchProductThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING));
        try {
            const res = await fetch('https://dummyjson.com/products');
            const data = await res.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUSES.SUCCESS));
        } catch (err) {
            dispatch(setStatus(STATUSES.ERROR));
        }
    };
}
