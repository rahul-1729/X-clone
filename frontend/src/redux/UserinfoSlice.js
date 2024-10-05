import { createSlice } from "@reduxjs/toolkit";

const UserinfoSlice =createSlice({
    name:'UserInfo',
    initialState:{
       name:"Username",
       bio:[],
       location:"Location",
       website:"Website",
       birthday:"dd-mm-yy"
    },
    reducers:{
        setName:(state,action)=>state.name=action.payload,
        setBio:(state,action)=>state.bio=action.payload,
        setLocation:(state,action)=>state.location=action.payload,
        setWebsite:(state,action)=>state.website=action.payload,
        setBirthday:(state,action)=>state.birthday=action.payload
    },
})

export const {setName,setBio,setLocation,setWebsite,setBirthday} = UserinfoSlice.actions
export default UserinfoSlice.reducer
