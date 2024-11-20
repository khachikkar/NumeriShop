import {configureStore} from "@reduxjs/toolkit";
import userProfileReducer from "../slices/userProfile";
import productsReducer from "../slices/ProductSlice";

export const store = configureStore({
    reducer: {
        userProfile: userProfileReducer,
        products: productsReducer
    }
})