import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    array: [],
}

export const textStateSlice = createSlice({
    name: "textState",
    initialState,
    reducers: {
        setTextState: (state, action)=>{
            state.value = action.payload
            // console.log(state.value);
        },
    }
})

export const {setTextState} = textStateSlice.actions;
export default textStateSlice.reducer;