import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import generalSlice from "./generalSlice";
import playlistSlice from "./playlistSlice";
const MainStore=configureStore(
    {
        reducer:{
            generalData:generalSlice,
            dataSliced:dataSlice,
            playlistSliced:playlistSlice
        }
    }
)
export default MainStore