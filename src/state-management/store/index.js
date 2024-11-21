import {configureStore} from "@reduxjs/toolkit";
import userProfileReducer from "../slices/userProfile";
import productsReducer from "../slices/ProductSlice";
import cartReducer from "../slices/CartSlice";


export const store = configureStore({
    reducer: {
        userProfile: userProfileReducer,
        products: productsReducer,
        cart: cartReducer
    }
})