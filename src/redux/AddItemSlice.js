import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const AddItemSlice = createSlice({
    name:"addItem",
    initialState,
    reducers:{
        addProduct:(state,actions)=>{
            state.push(actions.payload)
        },
        removeProduct:(state,actions)=>{
            return state.filter((item)=>item.id !=actions.payload)
        }
    }
})

export const { addProduct , removeProduct } = AddItemSlice.actions;
export default AddItemSlice.reducer;