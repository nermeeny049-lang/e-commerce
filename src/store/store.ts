import { configureStore } from "@reduxjs/toolkit";
import { authReducer, InitialState } from "../features/auth/slices/auth.slice";
import {
  cartReducer,
  CartValuesType,
} from "<prefix>/features/cart/slices/cart.slice";
import { ProductsResponse } from "<prefix>/features/wishlist/types/wishlistTypes";

export type PreloadedState = {
  authReducer: InitialState;
  cartReducer: CartValuesType;
};

export function createStore(preloadedState: PreloadedState) {
  const store = configureStore({
    reducer: {
      authReducer,
      cartReducer,
    },
    preloadedState,
  });
  return store;
}

export type AppStore = ReturnType<typeof createStore>;
export type AppState = ReturnType<AppStore["getState"]>;
