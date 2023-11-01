import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: "",
  },
  reducers: {
    setUserLogin: (state, action) => {
      state.user = action.payload;
      return state;
    },
  },
});

export const { setUserLogin } = authSlice.actions;

export default authSlice.reducer;
