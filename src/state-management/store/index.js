import {configureStore} from "@reduxjs/toolkit";
import userProfileReducer from "../slices/userProfile";
import productsReducer from "../slices/ProductSlice";
import cartReducer from "../slices/CartSlice";
import lovedReducer from "../slices/LovedProdsSlice";

export const store = configureStore({
    reducer: {
        userProfile: userProfileReducer,
        products: productsReducer,
        cart: cartReducer,
        loved: lovedReducer
    }
})