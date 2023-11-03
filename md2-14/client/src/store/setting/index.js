import { createSlice } from "@reduxjs/toolkit";

const Setting = createSlice({
  name: "setting",
  initialState: {
    searchValue: "",
    darkMode: false,
  },
  reducers: {
    updateSearchValue: (state, action) => {
      state.searchValue = action.payload;
      return state;
    },
    updateDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      return state;
    },
  },
});
export const { updateDarkMode, updateSearchValue } = Setting.actions;
export default Setting.reducer;
