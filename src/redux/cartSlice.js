import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // Mutating the state directly here
    addItem: (state, actions) => {
      state.items.push(actions.payload);
    },
    removeItem: (state, actions) => {
      state.items.pop();
    },
    clearCartItem: (state, actions) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCartItem } = cartSlice.actions;
export default cartSlice.reducer;
