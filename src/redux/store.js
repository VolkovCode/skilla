import {configureStore} from "@reduxjs/toolkit";
import sortSlice from "./features/sortSlice";
import  callSlice  from "./features/callsSlice";


export const store = configureStore({
  reducer: {
    sortSlice,
    callSlice,
  },
});