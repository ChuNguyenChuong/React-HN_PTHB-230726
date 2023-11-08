import { createSlice } from "@reduxjs/toolkit";
import { updateCartApi } from "../../helper/axious";
// import store from "../index";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
  },
  reducers: {
    addCart: (state, action) => {
      const { product, userId } = action.payload;
      if (state.cartList.length === 0) {
        state.cartList.push({ ...product, counter: 1 });
      } else {
        const idList = state.cartList.map((item) => item.id);
        if (idList.includes(product.id)) {
          state.cartList = state.cartList.map((item) => {
            if (item.id === product.id) {
              item.counter = item.counter + 1;
            }
            return item;
          });
        } else {
          state.cartList.push({ ...product, counter: 1 });
        }
      }
      localStorage.setItem("cart", JSON.stringify(state.cartList));
      updateCartApi(userId, state.cartList);

      return state;
    },
    addDefaultCart: (state, actions) => {
      state.cartList = actions.payload[0].cartList;
      localStorage.setItem("cart", JSON.stringify(state.cartList));
      return state;
    },
    incrementProduct: (state, action) => {
      const { id, userId } = action.payload;
      state.cartList = state.cartList.map((item) => {
        if (item.id === id) {
          item.counter = item.counter + 1;
        }
        return item;
      });
      updateCartApi(userId, state.cartList);
      return state;
    },
    decrementProduct: (state, action) => {
      const { id, userId } = action.payload;
      state.cartList = state.cartList.map((item) => {
        if (item.id === id && item.counter > 1) {
          item.counter = item.counter - 1;
        }
        return item;
      });
      updateCartApi(userId, state.cartList);
      return state;
    },
    deleteProduct: (state, action) => {
      const id = action.payload;
      state.cartList = state.cartList.filter((item) => item.id != id);
      return state;
    },
    clearCart: (state) => {
      state.cartList = [];
      return state;
    },
  },
});

export const { addCart, decrementProduct, incrementProduct, deleteProduct, clearCart, addDefaultCart } =
  cartSlice.actions;

export default cartSlice.reducer;
