import {createSlice} from "@reduxjs/toolkit";
import {fetchCalls} from "./asyncActions";

const initialState = {
  calls: [],
  // filterCalls: [],
  filterCondition: undefined, // 1 | 0 | undefined
  status: null,
  error: null,
}

export const callSlice = createSlice({
  name: 'calls',
  initialState,
  reducers: {
    setFilterCondition(state, action) {
      console.log(1231231)
      state.filterCondition = action.payload;
    },
  },
  // extraReducers:{
  //   [fetchCalls.pending] :(state) =>{state.status = 'loading'},
  //   [fetchCalls.fulfilled] :(state,action) =>{
  //     state.status = 'resolved';
  //     state.calls = action.payload;
  //   },
  //   [fetchCalls.rejected] :(state,action) =>{},
  // }
  extraReducers: (builder) => {
    builder
        .addCase(fetchCalls.pending, (state) => {
          state.status = 'loading'
          state.calls = []
        })
        .addCase(fetchCalls.fulfilled, (state, action) => {
          state.calls = action.payload;
          state.status = 'resolved'
        })
        .addCase(fetchCalls.rejected, (state, action) => {
          state.status = 'rejected'
          state.items = [];
        })

  },
})

export const {setFilterCondition} = callSlice.actions;
export default callSlice.reducer;
