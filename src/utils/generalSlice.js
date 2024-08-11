import { createSlice } from "@reduxjs/toolkit";

const generalSlice=createSlice({
    name:"general",
initialState:{
    toggleNav:false,
    videoSkip:null,
    videoDescData:null,
    ErrorData:null,
    iframeVideo:null
}
,
reducers:{
    addToogleNav:(state,action)=>{
        state.toggleNav=!state.toggleNav
    },


    addVideoSkip:(state,action)=>{
        state.videoSkip=action.payload
    },

    addVideoDescData:(state,action)=>{
        state.videoDescData=action.payload
    },
    addError:(state,action)=>{
        state.ErrorData=action.payload
    },
    addiframeVideo:(state,action)=>{
        state.iframeVideo=action.payload
    }
}



})
export default generalSlice.reducer
export const {addToogleNav,addVideoSkip,addVideoDescData,addError,addiframeVideo} = generalSlice.actions