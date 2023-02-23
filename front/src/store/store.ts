import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import techreducer from "./techSlice";
export default configureStore({
  reducer: {
    user: userReducer,
    tech: techreducer
  },
});
