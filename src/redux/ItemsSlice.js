import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allPost:[],
    aPost:[]
};

export const ItemsSlice = createSlice({
    name:"Items",
    initialState,
    reducers:{
        addProduct:(state,actions)=>{
            state.allPost.push(actions.payload)
        },
        removeProduct:(state,actions)=>{
            state.allPost= state.allPost.filter((item)=>item.id !=actions.payload)
        },
        getProduct:(state,actions)=>{
            state.aPost = state.allPost.find((el)=>el.id == actions.payload)
        },
        editProduct:(state,actions)=>{
            state.allPost = state.allPost.map((el)=>el.id ==actions.payload.id ? actions.payload : el)
        }
    }
})

export const { addProduct , removeProduct,getProduct,editProduct } = ItemsSlice.actions;
export default ItemsSlice.reducer;