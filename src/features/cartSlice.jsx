import { createSlice } from "@reduxjs/toolkit";
import productData from "../ProductData.json";

const initialState = {
  cart: [],
  items: productData,
  totalQuantity: 0,
  totalPrice: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      console.log("find=", find);
      console.log("action=", action);

      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },

    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const itemTotal = cartItem.price * cartItem.quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += cartItem.quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0
        }
      );
      state.totalPrice = parseInt(totalPrice.toFixed(2), 10);
      state.totalQuantity = totalQuantity;
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    },

    decreaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    }
  }
});

export const {
  addToCart,
  getCartTotal,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity
} = cartSlice.actions;

export default cartSlice.reducer;
