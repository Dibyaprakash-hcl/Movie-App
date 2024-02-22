import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name: "home",
    initialState:{
        url:{}
    },reducers:{
        getApiConfuguration: (state,action) =>{
            state.url = action.payload;
        }
    }
})


export const {getApiConfuguration} = homeSlice.actions;
export default homeSlice.reducer;