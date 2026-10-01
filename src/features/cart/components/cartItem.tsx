"use client";
import {
  IconCircleCheckFilled,
  IconMinus,
  IconPlus,
  IconTrash,
} from "@tabler/icons-react";
import Link from "next/link";
import { CartProduct } from "../types/cart.types";
import { removeFromCart } from "../server/cart.actions";
import { toast } from "sonner";
import { cartActions } from "../slices/cart.slice";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

export default function cartItem({
  productInfo,
}: {
  productInfo: CartProduct;
}) {
  const { count, price, product } = productInfo;
  const { setCartInfo } = cartActions;
  const dipatch = useDispatch();
  async function handleRemoveFromCart() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await removeFromCart(product._id);
        if (response.status === "error" || response.status === "fail") {
          toast.error(response.message);
          return;
        }
        if (response.status === "success") {
          dipatch(setCartInfo(response));
          toast.success(response.message);
        }

        Swal.fire({
          title: "Deleted!",
          text: "Your product has been deleted.",
          icon: "success",
        });
      }
    });
  }
  return (
    <>
      <div className="relative bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300">
        <div className="p-4 sm:p-5">
          <div className="flex gap-4 sm:gap-6">
            <Link href={``} className="relative shrink-0 group">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-linear-to-br from-gray-50 via-white to-gray-100 p-3 border border-gray-100">
                <img
                  src={product.imageCover}
                  alt="product image"
                  width={128}
                  height={128}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              {product.quantity > 0 ? (
                <div className="absolute -bottom-1 -right-1 bg-green-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center justify-center">
                  <IconCircleCheckFilled className="size-3" />
                  In Stoke
                </div>
              ) : (
                <div className="absolute -bottom-1 -right-1 bg-red-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center justify-center">
                  <IconCircleCheckFilled className="size-3" />
                  Out of Stoke
                </div>
              )}
            </Link>
            <div className="flex-1 min-w-0 flex flex-col">
              <div className="mb-3">
                <Link href={""} className="group/title block">
                  <h3 className="font-semibold text-gray-900 group-hover/title:text-primary-600 transition-colors leading-relaxed text-base">
                    {product.title}
                  </h3>
                </Link>
                <div className="flex items-center gap-2 mt-2">
                  <span className="inline-block px-2.5 py-1 bg-linear-to-r from-primary-50 to-emerald-50 text-primary-700 text-xs font-medium">
                    {product.category.name}
                  </span>
                  <span className="text-xs text-gray-400">.</span>
                  <span className="text-xs text-gray-500">
                    SKU:{product._id.slice(-7)}
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-primary-600 font-bold text-lg">
                    {price} EGP
                  </span>
                  <span className="text-xs text-gray-400"> per unit</span>
                </div>
              </div>
              <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <div className="bg-gray-50 flex items-center rounded-xl p-1 border border-gray-200">
                    <button
                      type="button"
                      className="h-8 w-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-gray-700"
                      aria-label="Decrease-Quantity"
                    >
                      <IconMinus stroke={2} className="text-sm" />
                    </button>
                    <span className="w-12 text-center font-bold text-gray-900 flex item-center justify-center">
                      {count}
                    </span>
                    <button
                      type="button"
                      className="h-8 w-8 rounded-lg bg-primary-600 hover:bg-primary-700 transition-colors duration-200 shadow-primary-600/30 shadow-sm flex items-center justify-center text-white"
                      aria-label="Increase-Quantity"
                    >
                      <IconPlus stroke={2} className="text-sm" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-xs text-gray-400 mb-0.5">total</p>
                    <p className="text-lg text-gray-800 font-bold">
                      {price * count}{" "}
                      <span className="text-sm font-medium text-gray-400">
                        EGP
                      </span>
                    </p>
                  </div>
                  <button
                    type="button"
                    className="rounded-xl w-10 h-10 border-red-200 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white flex items-center justify-center transition-all duration-300"
                    title="remove item"
                    aria-label="remove from cart"
                    onClick={handleRemoveFromCart}
                  >
                    <IconTrash stroke={2} className="text-xs" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
