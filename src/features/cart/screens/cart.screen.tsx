"use client";
import {
  IconArrowAutofitLeft,
  IconGardenCart,
  IconTrash,
} from "@tabler/icons-react";
import Link from "next/link";
import CartItem from "../components/cartItem";
import CartSummary from "../components/cartSummary";
import { clearCart, getCartItems } from "../server/cart.actions";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "<prefix>/store/store";
import { toast } from "sonner";
import { cartActions, cartInitialState } from "../slices/cart.slice";

export default function CartScreen() {
  const cartResponse = useSelector((state: AppState) => state.cartReducer);
  const { setCartInfo } = cartActions;
  const dipatch = useDispatch();
  async function handleClearCart() {
    const response = await clearCart();
    if (response.status === "error" || response.status === "fail") {
      toast.error(response.message);
      return;
    }
    if (response.status === "success") {
      dipatch(setCartInfo(cartInitialState));
      toast.success(response.message);
    }
  }
  if (cartResponse.status === "fail" || cartResponse.status === "error") {
    return (
      <>
        <h2>ERROR!!!</h2>
      </>
    );
  }
  if (cartResponse.status === "success") {
    return (
      <>
        <div className="bg-gray-50 py-8 min-h-screen">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <nav className="flex items-center gap-2 text-sm mb-4 text-gray-500">
                <Link href="/" className="hover:text-primary-600 transition">
                  Home
                </Link>
                <span>/</span>
                <div className="text-gray-900 font-medium">Shopping Cart</div>
              </nav>
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                    <span className="bg-linear-to-r from-primary-600 to-primary-700 text-white w-12 h-12 rounded-xl flex items-center justify-center">
                      <IconGardenCart stroke={2} />
                    </span>
                    Shopping Cart
                  </h1>
                  <p className="mt-2 text-gray-500">
                    You have{" "}
                    <span className="text-primary-600 font-semibold">
                      {cartResponse.numOfCartItems}{" "}
                      {cartResponse.numOfCartItems === 1 ? "Item" : "Items"}
                    </span>{" "}
                    item in your cart
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  {cartResponse.data.products.map((product) => (
                    <CartItem productInfo={product} />
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                  <Link
                    href="/"
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm flex justify-center items-center gap-2 transition-colors duration-200"
                  >
                    <span>
                      <IconArrowAutofitLeft />
                    </span>
                    Continue Shopping
                  </Link>
                  <button
                    type="button"
                    onClick={handleClearCart}
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                  >
                    <IconTrash
                      stroke={2}
                      className="text-xs group-hover:scale-110 transition-transform"
                    />
                    <span>Clear All Items</span>
                  </button>
                </div>
              </div>
              <div className="lg:col-span-1">
                <CartSummary cartInfo={cartResponse} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
