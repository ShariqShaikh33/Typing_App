import { configureStore } from "@reduxjs/toolkit";
import textStateSlice from "./Reducers/textStateSlice";

export const store = configureStore({
    reducer: {
        textState : textStateSlice,
    },
})