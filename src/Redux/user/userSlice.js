import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async(_,thunkAPI) => {
        try {
            const response = await axios.get("https://dummyjson.com/users")
            
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const usersSlice = createSlice({
    name:"users",
    initialState:{
        loading:false,
        users:[],
        error:null,
    },
    reducers:{},
    extraReducers:(builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase( fetchUsers.fulfilled, (state,action) => {
                state.loading = false;
                state.users = action.payload.users;
            })
            .addCase( fetchUsers.rejected, (state,action) => {
                state.loading = false;
                state.error = action.payload
            })
    }
})


export default usersSlice.reducer