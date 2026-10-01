import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddToCartResponse, CartProduct } from "../types/cart.types";

export type CartValuesType = {
  status: string;
  message: string;
  numOfCartItems: number;
  cartId: null | string;
  data: {
    products: CartProduct[];
    totalCartPrice: number;
  };
};

export const cartInitialState: CartValuesType = {
  status: "",
  message: "",
  numOfCartItems: 0,
  cartId: null,
  data: {
    products: [],
    totalCartPrice: 0,
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    setCartInfo: (state, action: PayloadAction<CartValuesType>) => {
      state.status = action.payload.status;
      state.numOfCartItems = action.payload.numOfCartItems;
      state.message = action.payload.message;
      state.data = action.payload.data;
      state.cartId = action.payload.cartId;
      console.log(action);
    },
  },
});
export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
