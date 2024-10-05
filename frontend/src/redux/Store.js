import { configureStore } from "@reduxjs/toolkit";
import UserinfoSlice from "./UserinfoSlice";

export const store = configureStore({
    reducer:{
           UserInfo:UserinfoSlice
    }
})

