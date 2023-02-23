import { createSlice } from "@reduxjs/toolkit";



export const slice = createSlice({
  name: "techSlicer",
  initialState: {
    tech:[]
  },
  reducers: {
    getTech(state, { payload }) {
      return { ...state, tech: payload};
    },
    clearTech(state) {
      return { ...state, tech:[] };
    },
  },
});
export const { getTech, clearTech } = slice.actions;

export default slice.reducer;


