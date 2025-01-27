import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductByCategory = createAsyncThunk(
    'products/getByCategory',
    async (category, thunkAPI) => {
        try {
            const res = await axios.get(`https://dummyjson.com/products/category/${category}`)

            return res.data.products
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data.message || error.message)

        }
    }
)

const productSlice = createSlice({
    name: "products",
    initialState: {
        loading: false,
        products: [],
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProductByCategory.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProductByCategory.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(getProductByCategory.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
    }
})

export default productSlice.reducer