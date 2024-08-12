import { createSlice } from "@reduxjs/toolkit";

const dataSlice=createSlice({
    name:"data",
initialState:{
 allVideos:null,
 allShorts:null,
 onlyVideos:null,
 
 
}
,
reducers:{
addAllShorts:(state,action)=>{
    state.allShorts=action.payload
   },

   addAllVideos:(state,action)=>{
    state.allVideos=action.payload
   },
   addOnlyVideos:(state,action)=>{
    state.onlyVideos=action.payload
   }
   

  


}



})
export default dataSlice.reducer
export const {addAllShorts,addAllVideos,addOnlyVideos} = dataSlice.actions