import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth";
import Cart from "./cart";
import Setting from "./setting";

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    cart: Cart,
    setting: Setting,
  },
});

export default store;
