import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("https://boykot.kg/api/v1/products/");
            return response.data; // Предполагаем, что это массив
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const baykotSlice = createSlice({
    name: "baykot",
    initialState: {
        loading: false,
        baykot: [],
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.baykot = action.payload.results;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default baykotSlice.reducer;