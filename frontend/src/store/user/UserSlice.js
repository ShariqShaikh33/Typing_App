import { createSlice } from "@reduxjs/toolkit";
import { userInitialState } from "./userInitialState";

export const UserSlice = createSlice({
    name: "User",
    initialState: userInitialState,
    reducers:{
        setEmail: (state, action)=>{
            state.email = action.payload;
        },
        setPassword: (state,action)=>{
            state.password = action.payload;
        },
        validUser: (state)=>{
            state.userAuthenticated = true;
        },
        invalidUser: (state)=>{
            state.userAuthenticated = false;
        },
        resetState: ()=>userInitialState,
    }
});

export const { setEmail,setPassword,validUser, invalidUser, resetState } = UserSlice.actions;
export default UserSlice.reducer;