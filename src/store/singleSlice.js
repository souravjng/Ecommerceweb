import { createSlice } from "@reduxjs/toolkit";

export const SINGLESTATUSES = Object.freeze({
    SUCCESS: 'Success',
    ERROR: 'Error',
    LOADING: 'LOADING...',
});

const singleSlice = createSlice({
    name: 'product',
    initialState: {
        singledata: [],
        poster:[],
        status: SINGLESTATUSES.SUCCESS,
    },
    reducers: {
        setsingleProducts(state, action) {
            state.singledata =action.payload;
            state.poster=action.payload;

        },
        setsingleStatus(state, action) {
            state.status = action.payload;
        },
    }
});

export const { setsingleProducts, setsingleStatus } = singleSlice.actions;

export default singleSlice.reducer;

export function getsingleproduct(id=4) {
    return async function fetchProductThunk(dispatch, getState) {
        dispatch(setsingleStatus(SINGLESTATUSES.LOADING));
        try {
            const res = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await res.json();
            dispatch(setsingleProducts(data));
            dispatch(setsingleStatus(SINGLESTATUSES.SUCCESS));
        } catch (err) {
            dispatch(setsingleStatus(SINGLESTATUSES.ERROR));
        }
    };
}
