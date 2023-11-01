import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 10,
    loading: true,
  },
  reducers: {
    incrementCounter: (state) => {
      return {
        ...state,
        value: state.value + 1,
      };
    },
    incrementByNumber: (state, action) => {
      return {
        ...state,
        value: Number(action.payload) + state.value,
      };
    },
    // decrementCounter :
  },
});

export const { incrementCounter, incrementByNumber } = counterSlice.actions;

// export gia tri state ra
export default counterSlice.reducer;
