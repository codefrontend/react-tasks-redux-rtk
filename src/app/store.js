import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/slices/taskSlice";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;
