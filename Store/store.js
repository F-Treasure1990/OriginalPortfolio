import { configureStore } from "@reduxjs/toolkit";
import ProjectSlice from "./ProjectSlice.js";
import ToggleSlice from "./ToggleSlice.js";

export const store = configureStore({
  reducer: {
    ProjectSlice,
    ToggleSlice
  }
});
