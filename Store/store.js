import { configureStore } from "@reduxjs/toolkit";
import ProjectSlice from "./BlogSlice.js";
import ToggleSlice from "./ToggleSlice.js";

export const store = configureStore({
  reducer: {
    ProjectSlice,
    ToggleSlice
  }
});
