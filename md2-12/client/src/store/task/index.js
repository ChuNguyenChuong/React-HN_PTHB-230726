import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    listTask: [
      {
        id: 1,
        title: "demo",
        isCompleted: false,
      },
      {
        id: 2,
        title: "demo completed",
        isCompleted: true,
      },
    ],
    task: null,
  },
  reducers: {
    getDetailTask: (state, action) => {
      const task = state.listTask.find((item) => item.id == action.payload);

      return {
        ...state,
        task: task,
      };
    },
    updateStatusTask: (state, action) => {
      const newTask = {
        ...state.task,
        isCompleted: !state.task.isCompleted,
      };
      const newListTask = state.listTask.map((item) => {
        const newItem = { ...item };
        if (newItem.id == action.payload) {
          console.log("asdsad", newItem.isCompleted);
          newItem.isCompleted = !newItem.isCompleted;
        }
        return newItem;
      });

      return {
        ...state,
        task: newTask,
        listTask: newListTask,
      };
    },
  },
});

export const { getDetailTask, updateStatusTask } = taskSlice.actions;

export default taskSlice.reducer;
