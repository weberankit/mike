import { createSlice } from "@reduxjs/toolkit";

const playlistSlice=createSlice({
    name:"list",
    initialState:{
        playListData:{

        },
        videoStop:null
        
    }
,
reducers:{
    addPlayListData:(state,action)=>{
        const value = action.payload[0].snippet.playlistId;
    if(state.playListData[value]){
        
    }else{
       
        console.log("kk")
        //since value is string so using dot notaion ex-let obj;obj."dd"="anything"---error
        state.playListData[value]=action.payload
    }
    
    
    
       },


videoDirect:(state,action)=>{
  state.action=action.payload
}

}

})

export default playlistSlice.reducer
export const {addPlayListData,videoDirect} =playlistSlice.actions