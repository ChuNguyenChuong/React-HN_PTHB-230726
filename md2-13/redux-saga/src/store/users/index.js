import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    listStudent: [
      {
        name: "ndchinh",
        age: 18,
      },
      {
        name: "diem quynh",
        age: 18,
      },
    ],
    isLoading: false,
  },
  reducers: {
    // ham nay thuc hiện bươc đầu tiên khi gọi api
    // get loading = true de ui render ra loading component
    getStudent: (state) => {
      state.isLoading = true;
      return state;
    },
    // update data sau khi gọi api
    setStudents: (state, action) => {
      state.listStudent = action.payload;
      state.isLoading = false;
      return state;
    },
  },
});

export const { getStudent, setStudents } = userSlice.actions;

export default userSlice.reducer;
