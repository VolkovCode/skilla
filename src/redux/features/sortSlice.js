import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  call: [],
}

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    sortCallsType: (state, action) => {
      state.call = action.payload
    },
  },

})

export const {sortCallsType} = sortSlice.actions;
export default sortSlice.reducer;
