import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")),
    token: "",
    counter: 1,
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
