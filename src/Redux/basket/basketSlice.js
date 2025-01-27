import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice ({
    name:"carts",
    initialState:{
        carts:[],

    },
    reducers:{
        addCart: (state, action) => {
            state.carts.push(action.payload)
        },
        deleteCart:(state, action) => {},
    }
})

export const {addCart, deleteCart} = basketSlice.actions
export default basketSlice.reducer
