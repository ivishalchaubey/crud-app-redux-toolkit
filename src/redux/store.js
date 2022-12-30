import { configureStore } from "@reduxjs/toolkit";
import ItemsSlice from "./ItemsSlice";

const store = configureStore({
    reducer:{
        ItemsSlice,
    }
})
export default store;