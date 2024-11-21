import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, action)=>{
            const productId = action.payload;
            if(!state.cart.includes(productId)){
                state.cart.push(productId);
            }
        },
        removeFromCart: (state, action)=>{
            const productId = action.payload;
            state.cart = state.cart.filter(id=> id !== productId);
        }
    }
})



export const {addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer