
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:"product",
    initialState:[],
    reducers: {
        addToCart(state, action) {
            state.push(action.payload);
           // console.log(action.payload);
            // console.log(action)
        },
        buyNow(state, action) {},
        deleteProduct(state, action) {
            console.log(action.payload)
            state.pop(action.payload)
        },
    },
});


//display all action
//console.log(productSlice.actions);

export const { addToCart, buyNow, deleteProduct } = productSlice.actions;

export default productSlice.reducer;


  
