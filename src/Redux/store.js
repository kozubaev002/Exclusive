import { configureStore } from '@reduxjs/toolkit';
import countReducer from '../Redux/count/countSlice'
import colorReducer from './count/colorSlice'
import usersReducer from './user/userSlice'
import productsReducer from './card/cardSlice'
import baykotReducer from './baykot/baykot'
import categoryReducer from './category/categorySlice'
import productReducer from './products/productSlice'
import WishReducer from './Wish/WishSlice'
import basketReducer from './basket/basketSlice'

const myStore = configureStore({
    reducer:{
        check: countReducer,
        color: colorReducer,
        list: usersReducer,
        code:productsReducer,
        v1:baykotReducer,
        categoryList:categoryReducer,
        products:productReducer,
        wishList:WishReducer,
        cartList:basketReducer,
    }
})

export default myStore;