import { configureStore } from "@reduxjs/toolkit";
import ToggleSlice from "./ToggleSlice.js";

export const store = configureStore({
  reducer: {
    ToggleSlice
  }
});
