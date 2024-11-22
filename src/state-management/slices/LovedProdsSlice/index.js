import {createSlice} from "@reduxjs/toolkit";


const LovedSlice = createSlice({
    name: "LovedProds",
    initialState: {
        loved: JSON.parse(localStorage.getItem("loved")) || [] // Load from localStorage
    },
    reducers:{
        addToLovedProduct: (state, action) => {
            const product = action.payload;
            state.loved.push(product);
            localStorage.setItem("loved", JSON.stringify(state.loved));
        }
    }
})

export const {addToLovedProduct } = LovedSlice.actions;
export default LovedSlice.reducer;