import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async(_,thunkAPI) => {
        try {
            const response = await axios.get("https://dummyjson.com/products")
            
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const productsSlice = createSlice({
    name:"products",
    initialState:{
        loading:false,
        products:[],
        error:null,
    },
    reducers:{},
    extraReducers:(builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase( fetchProducts.fulfilled, (state,action) => {
                state.loading = false;
                state.products = action.payload.products;
            })
            .addCase( fetchProducts.rejected, (state,action) => {
                state.loading = false;
                state.error = action.payload
            })
    }
})


export default productsSlice.reducer