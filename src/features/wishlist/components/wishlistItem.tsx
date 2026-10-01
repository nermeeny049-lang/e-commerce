"use client";
import {
  IconCircleCheckFilled,
  IconHeartFilled,
  IconMinus,
  IconPlus,
  IconTrash,
} from "@tabler/icons-react";
import Link from "next/link";
import { Product } from "../types/wishlistTypes";
import { addToFavorate, removeFromFavorate } from "../server/wishlist.actions";
import { toast } from "sonner";
import Swal from "sweetalert2";

export default function wishlistItem({ Item }: { Item: Product }) {
  async function handleRemoveFromFavorate() {
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
        const response = await removeFromFavorate(Item._id);
        if (response.status === "error" || response.status === "fail") {
          toast.error("Somthing went wrong, please try again later");
          return;
        }
        if (response.status === "success") {
          toast.success("Item removed successfully");
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
            <Link
              href={`/product/${Item._id}`}
              className="relative shrink-0 group"
            >
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl bg-linear-to-br from-gray-50 via-white to-gray-100 p-3 border border-gray-100">
                <img
                  src={Item.imageCover}
                  alt="product image"
                  width={128}
                  height={128}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              {Item.quantity > 0 ? (
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
            <div className="flex-1 min-w-0 flex justify-between flex-col">
              <div className="mb-3">
                <Link href={""} className="group/title block">
                  <h3 className="font-semibold flex items-center justify-between text-gray-900 leading-relaxed text-base">
                    {Item.title}
                    <IconHeartFilled className="text-red-600 hover:scale-105 transition-transform duration-200" />
                  </h3>
                </Link>
                <div className="flex items-center gap-2 mt-2">
                  <span className="inline-block px-2.5 py-1 bg-linear-to-r from-primary-50 to-emerald-50 text-primary-700 text-xs font-medium">
                    {Item.category.name}
                  </span>
                  <span className="text-xs text-gray-400">.</span>
                  <span className="text-xs text-gray-500">
                    SKU:{Item._id.slice(-7)}
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-primary-600 font-bold text-lg">
                    {Item.price} EGP
                  </span>
                  <span className="text-xs text-gray-400"> per unit</span>
                </div>
              </div>
              <div className="mt-auto w-full flex flex-wrap items-center justify-end gap-4">
                <button
                  type="button"
                  className="rounded-xl w-10 h-10 border-red-200 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white flex items-center justify-center transition-all duration-300"
                  title="remove item"
                  aria-label="remove from wishlist"
                  onClick={handleRemoveFromFavorate}
                >
                  <IconTrash stroke={2} className="text-xs" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
