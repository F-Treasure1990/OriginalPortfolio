import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActive: 0
};

export const ToggleSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    functionTester: (state, action) => (state.value = action.payload),
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    toggleByAmount: (state, action) => {
      state.isActive = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { increment, decrement, toggleByAmount } = ToggleSlice.actions;

export default ToggleSlice.reducer;
