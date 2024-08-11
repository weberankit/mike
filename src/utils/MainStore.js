import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import generalSlice from "./generalSlice";
const MainStore=configureStore(
    {
        reducer:{
            generalData:generalSlice,
            dataSliced:dataSlice
        }
    }
)
export default MainStore