import { configureStore } from "@reduxjs/toolkit";
import AddItemSlice from "./AddItemSlice";

const store = configureStore({
    reducer:{
        AddItemSlice,
    }
})
export default store;