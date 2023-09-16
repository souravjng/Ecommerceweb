const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cartproducts:[],
        totalofcartproducts:[],
    },
    reducers: {
        Addtocart(state, action) {
            let check = state.cartproducts.some((curr) => curr.productid === action.payload.productid);
            if (!check) {
              state.cartproducts.push(action.payload);
              let count = state.cartproducts.reduce((accumulator, curr) => accumulator + curr.price * curr.Quantity, 0);
              state.totalofcartproducts=count;}
        },
        Deletefromcart(state, action) {
            state.cartproducts=state.cartproducts.filter((item) => item.productid !== action.payload);
            let count = state.cartproducts.reduce((accumulator, curr) => accumulator + curr.price * curr.Quantity, 0);
            state.totalofcartproducts=count;
        },
    },
});

export const { Addtocart, Deletefromcart } = cartSlice.actions;
export default cartSlice.reducer;
