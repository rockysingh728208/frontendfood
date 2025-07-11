import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        const newItem = {
          ...action.payload,
          cartItemKey: uuidv4(), // unique key for cart operations
          quantity: 1,
        };
        state.cartItems.push(newItem);
      }
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.cartItemKey !== action.payload
      );
    },

    incrementQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.cartItemKey === action.payload
      );
      if (item) {
        item.quantity += 1;
      }
    },

    decrementQuantity: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.cartItemKey === action.payload
      );

      if (itemIndex !== -1) {
        if (state.cartItems[itemIndex].quantity > 1) {
          state.cartItems[itemIndex].quantity -= 1;
        } else {
          state.cartItems.splice(itemIndex, 1);
        }
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

// Export actions
export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.cartItems;

export const getCartTotalItems = (state) =>
  state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);

export const getCartSubtotal = (state) =>
  state.cart.cartItems.reduce(
    (subtotal, item) => subtotal + item.price * item.quantity,
    0
  );

export const getCartDeliveryCharge = (state) => {
  const subtotal = getCartSubtotal(state);
  return subtotal > 0 ? 30 : 0;
};

export const getCartTotalAmount = (state) => {
  const subtotal = getCartSubtotal(state);
  const delivery = getCartDeliveryCharge(state);
  return subtotal + delivery;
};

// Export reducer
export default cartSlice.reducer;
