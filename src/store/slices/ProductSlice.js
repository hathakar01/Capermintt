
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:"product",
    initialState:[],
    reducers: {
        addToCart(state, action) {
            state.push(action.payload);
           console.log(action.payload, 'store');
            // console.log(action)
        },
        login(state, action){
            
        },
        buyNow(state, action) {},
        deleteProduct(state, action) {
            // console.log(action.payload)
            // state.pop(action.payload)
            state.splice(action.payload, 1)
        },
    },
});


//display all action
//console.log(productSlice.actions);

export const { addToCart, buyNow, deleteProduct } = productSlice.actions;

export default productSlice.reducer;


  
