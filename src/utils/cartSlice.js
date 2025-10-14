import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: 2,
  },
  reducers: {
    addItem: (state, action) => {
      state.items += action.payload;
    },
    removeItem: (state) => {
      state.items--;
    },
    clearCart: (state) => {
      state.items = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
