import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskItems: localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [
        {
          id: "1",
          title: "Buy sneaker",
          completed: false,
        },
        {
          id: "2",
          title: "Work meeting",
          completed: false,
        },
        {
          id: "3",
          title: "Pick up email",
          completed: false,
        },
        {
          id: "4",
          title: "Get gift for grandma",
          completed: false,
        },
        {
          id: "5",
          title: "Renew registration",
          completed: true,
        },
        {
          id: "6",
          title: "HIIT workout",
          completed: true,
        },
      ],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.taskItems.unshift(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.taskItems));
    },
    completedTask: (state, action) => {
      const completed = action.payload.type === "complete" ? true : false;

      state.taskItems.map((task) => {
        if (task.id === action.payload.id) {
          task.completed = completed;
        }
        return task;
      });
      localStorage.setItem("tasks", JSON.stringify(state.taskItems));
    },
    deleteTask: (state, action) => {
      state.taskItems = state.taskItems.filter(
        (task) => task.id !== action.payload.id
      );
      localStorage.setItem("tasks", JSON.stringify(state.taskItems));
    },
    editTask: (state, action) => {
      state.taskItems.map((task) => {
        if (task.id === action.payload.id) {
          task.title = action.payload.title;
        }
        return task;
      });
      localStorage.setItem("tasks", JSON.stringify(state.taskItems));
    },
  },
});

export const { addTask, completedTask, deleteTask, editTask } =
  taskSlice.actions;
export default taskSlice.reducer;
