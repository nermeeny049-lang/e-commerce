import {
  IconArrowBack,
  IconLock,
  IconShieldHalfFilled,
  IconShoppingBag,
  IconTag,
  IconTruckDelivery,
} from "@tabler/icons-react";
import Link from "next/link";
import { AddToCartResponse } from "../types/cart.types";

export default function cartSummary({
  cartInfo,
}: {
  cartInfo: AddToCartResponse;
}) {
  return (
    <>
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden sticky top-10 shadow-sm">
        <div className="bg-linear-to-r from-primary-600 to-primary-700 px-6 py-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <IconShoppingBag stroke={2} />
            Order Summary
          </h2>
          <p className="text-primary-100 text-sm mt-1">
            you have {cartInfo.numOfCartItems}{" "}
            {cartInfo.numOfCartItems === 1 ? "Item" : "Items"} in your cart
          </p>
        </div>
        <div className="p-6 space-y-5">
          {cartInfo.data.totalCartPrice >= 500 ? (
            <div className="bg-linear-to-r from-green-50 to-emerald-50 rounded-xl p-4 gap-3 flex items-center">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <IconTruckDelivery stroke={2} className="text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-green-700">Free Shopping!</p>
                <p className="text-sm text-green-600">
                  You qualify for free delivrey
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-2 mb-2">
                <IconTruckDelivery
                  stroke={2}
                  className="text-orange-500 shrink-0"
                />
                <span className="font-medium text-sm text-gray-700">
                  Add {500 - cartInfo.data.totalCartPrice} EGP for free shopping
                </span>
              </div>{" "}
              <div className="h-2 bg-orange-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-linear-to-r from-orange-400 to-amber-400 rounded-full transition-all duration-500"
                  style={{
                    width: `${(cartInfo.data.totalCartPrice / 500) * 100}%`,
                  }}
                ></div>
              </div>
            </>
          )}

          <div className="bg-linear-to-r from-orange-50 to-amber-50 rounded-xl p-4">
            <div className="space-y-3">
              <div className="flex mt-4 justify-between text-gray-600 text-sm sm:text-base">
                <span>Subtotal</span>
                <span className="font-medium text-gray-900">
                  {cartInfo.data.totalCartPrice} EGP
                </span>
              </div>
              <div className="flex justify-between text-gray-600 text-sm sm:text-base">
                <span>Shipping</span>
                {cartInfo.data.totalCartPrice >= 500 ? (
                  <span className="font-medium text-green-600">FREE</span>
                ) : (
                  <span className="font-medium text-gray-900">{50} EGP</span>
                )}
              </div>
              <div className="border-t border-dashed border-gray-200 pt-3 mt-3">
                <div className="flex justify-between items-baseline">
                  <span className="text-gray-900 font-semibold text-base sm:text-lg">
                    Total
                  </span>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-gray-900">
                      {cartInfo.data.totalCartPrice +
                        (cartInfo.data.totalCartPrice >= 500 ? 0 : 50)}
                    </span>
                    <span className="text-sm font-medium text-gray-500 ml-1">
                      EGP
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="w-full flex items-center justify-center my-4 gap-2 hover:border-gray-500 transition-all duration-300 py-3 border hover:scale-102 border-gray-300 border-dashed rounded-xl text-gray-600"
            >
              <IconTag stroke={2} />
              <span className="text-sm font-medium">Apply Promo Code</span>
            </button>
            <Link
              href={"/checkout"}
              className="w-full bg-linear-to-r from-primary-600 to-primary-700 text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-1 hover:scale-102 duration-300"
            >
              <IconLock stroke={2} />
              <span>Secure Checkout</span>
            </Link>
            <div className="flex items-center justify-center gap-4 py-2 mt-4">
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <IconShieldHalfFilled className="text-green-500" />
                <span>Secure Payment</span>
              </div>
              <div className="w-px h-4 bg-gray-200" />
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <IconTruckDelivery stroke={2} className="text-blue-500" />
                <span>Fast Delivery</span>
              </div>
            </div>
            <Link
              href="/"
              className="gap-1 text-center text-primary-600 hover:text-primary-700 text-sm font-medium py-2 transition-all flex items-center justify-center hover:scale-105 duration-300"
            >
              <IconArrowBack stroke={2} />
              continue
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
