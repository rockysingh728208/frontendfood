import { createSlice } from "@reduxjs/toolkit";

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
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.cartItems;

export const getCartTotalItems = (state) =>
  state.cart.cartItems.reduce((total, item) => total + item.quantity, 0);

export const getCartSubtotal = (state) =>
  state.cart.cartItems.reduce((subtotal, item) => subtotal + item.price * item.quantity, 0);

export const getCartDeliveryCharge = (state) => {
  const subtotal = getCartSubtotal(state);
  return subtotal > 0 ? 30 : 0; 
};

export const getCartTotalAmount = (state) => {
  const subtotal = getCartSubtotal(state);
  const delivery = getCartDeliveryCharge(state);
  return subtotal + delivery;
};

export default cartSlice.reducer;
