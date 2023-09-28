import { createSlice } from "@reduxjs/toolkit";

const cartItems = { items: [], totalQuantity: 0, changed: false };

const cartSlice = createSlice({
  name: "Cart",
  initialState: cartItems,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },

    addItemsToCart(state, action) {
      const newItems = action.payload;
      const existingItems = state.items.find((item) => item.id === newItems.id);
      state.totalQuantity = state.items.length;
      state.changed = true;
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
      state.changed = true;
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
