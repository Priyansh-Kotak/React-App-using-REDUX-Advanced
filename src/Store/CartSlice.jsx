import { createSlice } from "@reduxjs/toolkit";

const cartItems = { items: [], totalQuantity: 0 };

const cartSlice = createSlice({
  name: "Cart",
  initialState: cartItems,
  reducers: {
    addItemsToCart(state, action) {
      const newItems = action.payload;
      const existingItems = state.items.find((item) => item.id === newItems.id);
      state.totalQuantity = state.items.length;
      if (!existingItems) {
        state.items.push({
          id: newItems.id,
          price: newItems.price,
          quantity: 1,
          totalPrice: newItems.price,
          name: newItems.title,
        });
      } else {
        existingItems.quantity++;
        existingItems.totalPrice = existingItems.totalPrice + newItems.price;
      }
    },

    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItems = state.items.find((item) => item.id === id);
      if (existingItems.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItems.quantity--;
        existingItems.totalPrice -= existingItems.price;
      }
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice.reducer;
