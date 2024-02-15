
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:"product",
    initialState:[],
    reducers: {
        addToCart(state, action) {

            const productId = action.payload;
            const isProductInCart = state.some((product) => product.id === productId.id)
            if(!isProductInCart){
                state.push(action.payload);
               console.log(action.payload, 'store');

            }else{
                alert("Product is already Add!!")
            }
            // console.log(action)
        },
        buyNow(state, action) {
            const { id, quantity } = action.payload;
            const productToUpdate = state.find((product) => product.id === id);
      
            if (productToUpdate) {

              productToUpdate.quantity = quantity;
              console.log(action.payload, "qty")
            }
        },
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


  
