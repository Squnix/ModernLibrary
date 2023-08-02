import { createSlice, PayloadAction } from "@reduxjs/toolkit";  

type conterState = {
  value: number
};

const initialState: conterState = {
  value: 0,
};

export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    reset: () => initialState,
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    }
  }
});

export const {
  increment,
  incrementByAmount,
  decrement,
  decrementByAmount,
  reset
} = counter.actions;
export default counter.reducer;
