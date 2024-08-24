import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
   name:'search',
   initialState:{},
   reducers:{
     cacheResults:(state,action)=>{
      state = Object.assign(state,action.payload);
     },          
   },            
})
export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;

//cache:
// time complexity tro search in array = o(n);
// time complexity tro search in array = o(1);

// [i,ip]