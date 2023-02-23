import { createSlice } from "@reduxjs/toolkit";



export const slice = createSlice({
  name: "userSlicer",
  initialState: {
    id:"",
    name:"",
    bio:"",
    status:"",
    isLogged: false,
  },
  reducers: {
    login(state, { payload }) {
      return { ...state, isLogged: true, id: payload.id, name: payload.name, status:payload.status, bio:payload.bio };
    },
    logout(state) {
      return { ...state, id:"", name:"", bio:"", status:"", isLogged: false,};
    },
  },
});
export const { login, logout } = slice.actions;

export default slice.reducer;


