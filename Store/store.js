import { configureStore } from "@reduxjs/toolkit";
import projectsSlice from "./ProjectsSlice.js";
export const store = configureStore({
  reducer: {
    projectsSlice
  }
});
