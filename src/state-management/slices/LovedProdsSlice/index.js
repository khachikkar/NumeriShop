// import {createSlice} from "@reduxjs/toolkit";
//
//
// const LovedSlice = createSlice({
//     name: "LovedProds",
//     initialState: {
//         loved: JSON.parse(localStorage.getItem("loved")) || [], // Load from localStorage
//         clicked: false
//     },
//     reducers:{
//         addToLovedProduct: (state, action) => {
//             const product = action.payload;
//             state.loved.push(product);
//             state.clicked = true;
//             localStorage.setItem("loved", JSON.stringify(state.loved));
//         }
//     }
// })
//
// export const {addToLovedProduct } = LovedSlice.actions;
// export default LovedSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const LovedSlice = createSlice({
    name: "LovedProds",
    initialState: {
        loved: JSON.parse(localStorage.getItem("loved")) || [], // Load from localStorage
    },
    reducers: {
        toggleLovedProduct: (state, action) => {
            const product = action.payload;
            const existingIndex = state.loved.findIndex((item) => item.id === product.id);

            if (existingIndex !== -1) {
                // Product already in loved array, remove it
                state.loved.splice(existingIndex, 1);
            } else {
                // Product not in loved array, add it
                state.loved.push(product);
            }

            // Update localStorage
            localStorage.setItem("loved", JSON.stringify(state.loved));
        },
    },
});

export const { toggleLovedProduct } = LovedSlice.actions;
export default LovedSlice.reducer;
