import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      const item = state.items.find(
        i => i.name === action.payload.name
      );
      if (item) {
        item.quantity++;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1
        });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        item => item.name !== action.payload
      );
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find(
        i => i.name === name
      );
      if (item) {
        item.quantity = quantity;
      }
      state.items = state.items.filter(
        i => i.quantity > 0
      );
    }
  }
});

export const {
  addItem,
  removeItem,
  updateQuantity
} = CartSlice.actions;

export default CartSlice.reducer;
