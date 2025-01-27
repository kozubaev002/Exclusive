import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategory = createAsyncThunk(
    "category/products",
    async(__,thunkAPI) => {
        try {
            const res = await axios.get("https://dummyjson.com/products/category-list")

            return res.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const categorySlice = createSlice ({
    name:"category",
    initialState:{
        category:[],
        loading: false  ,
        error: null
      },
          reducers:{},
          extraReducers:(builder) => {
              builder
                  .addCase(fetchCategory.pending, (state) => {
                      state.loading = true;
                      state.error = null;
                  })
                  .addCase( fetchCategory.fulfilled, (state,action) => {
                      state.loading = false;
                      state.category = action.payload;
                  })
                  .addCase( fetchCategory.rejected, (state,action) => {
                      state.loading = false;
                      state.error = action.payload
                  })
          }
})

export default categorySlice.reducer