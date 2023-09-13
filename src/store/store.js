import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './productSlice';
import singleproductReducer from './singleSlice';









const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
        singleproduct:singleproductReducer,
    },
});

export default store;
