import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getProductList} from "../../../core/helpers/fetchProducts";
import {fetchUserProfileInfo} from "../userProfile";


export const getProducts = createAsyncThunk(
    "products/getProducts",
    async (_,{rejectedValue})=>{
        try{
            const products = await getProductList();
            return products
        }catch(e){
            return rejectedValue(e.message)
        }
    }
)




const  ProductSlice = createSlice({
    name: "Products",
    initialState: {
        items: [],
        status: "idle",
        error:null
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder
            .addCase(getProducts.pending, (state)=>{
                state.status = "loading"
            })
            .addCase(getProducts.fulfilled, (state, action)=>{
                state.items = action.payload
                localStorage.setItem("products", JSON.stringify(action.payload))
                state.status = "success"
            })
            .addCase(fetchUserProfileInfo.fulfilled, (state, action)=>{
                state.status = "failed";
                state.error = action.payload;
            })
    }
})


export default ProductSlice.reducer