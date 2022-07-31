import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

// if there are two unrelated states like authentication and counter,
// maintain two different files with different slices
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
      //here, we seem to be allowed to mutate states as redux toolkit creates an
      //immutable state internally in short this is basically immutable at the end
    },

    decrement(state) {
      state.counter--;
    },

    increase(state, action) {
      state.counter += action.payload;
    },

    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;
