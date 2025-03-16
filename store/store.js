import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/cartslicer"; // Importing the cart slice

const store = configureStore({
  reducer: {
    cart: cartReducer, // Explicitly naming the reducer as 'cart'
  },
});

export default store;
