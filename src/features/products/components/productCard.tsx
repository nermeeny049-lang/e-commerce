"use client";
import {
  IconEye,
  IconHeart,
  IconPlus,
  IconStar,
  IconStarFilled,
  IconVs,
} from "@tabler/icons-react";
import { Product } from "../types/product.type";
import Link from "next/link";
import { addProductToCart } from "<prefix>/features/cart/server/cart.actions";
import { toast } from "sonner";
import { cartActions } from "<prefix>/features/cart/slices/cart.slice";
import { useDispatch } from "react-redux";
import { addToFavorate } from "<prefix>/features/wishlist/server/wishlist.actions";

export default function productCard({ productInfo }: { productInfo: Product }) {
  const { setCartInfo } = cartActions;
  const dipatch = useDispatch();
  async function handleAddToCart() {
    const response = await addProductToCart(productInfo._id);
    if (response.status === "error" || response.status === "fail") {
      toast.error(response.message);
      return;
    }
    if (response.status === "success") {
      dipatch(setCartInfo(response));
      toast.success(response.message);
    }
  }
  async function handleAddToFavorate() {
    const response = await addToFavorate(productInfo._id);
    if (response.status === "fail" || response.status === "error") {
      toast.error("can not add to wishlist");
    }
    if (response.status === "success") {
      toast.success("item add to wishlist successfully");
    }
  }
  return (
    <>
      <div className="card group bg-white rounded-xl overflow-hidden shadow-md">
        <div className="inner">
          <div className="image-box relative">
            <img src={productInfo.imageCover} alt="" className="mx-auto h-65" />
            <div className="action-btns group-hover:translate-x-0 transition-transform duration-500 *:size-8 *:shadow-md *:bg-white *:flex *:justify-center *:items-center flex flex-col gap-1 absolute *:rounded-full right-4 top-4 translate-x-20">
              <button onClick={handleAddToFavorate}>
                <IconHeart stroke={2} />
              </button>
              <button>
                <IconVs stroke={2} />
              </button>
              <Link href={`/product/${productInfo._id}`}>
                <IconEye stroke={2} />
              </Link>
            </div>
          </div>
          <div className="card-body px-5 py-4">
            <span className="text-sm font-semibold text-primary-600">
              {productInfo.category.name}
            </span>
            <h3 className="text-base font-semibold line-clamp-2">
              {productInfo.title}
            </h3>
            <div className="ratings flex justify-between items-center gap-3 mt-2 mb-4">
              <div className="stars flex items-center text-yellow-500">
                <IconStarFilled size={16} />
                <IconStarFilled size={16} />
                <IconStarFilled size={16} />
                <IconStarFilled size={16} />
                <IconStar stroke={2} size={16} />
              </div>
              <span>
                {productInfo.ratingsAverage} ({productInfo.ratingsQuantity})
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div className="price">
                <span className="text-lg font-bold mr-1">
                  {productInfo.priceAfterDiscount || productInfo.price} EGP
                </span>
                {productInfo.priceAfterDiscount && (
                  <span className="line-through text-gray-500">
                    {productInfo.price} EGP
                  </span>
                )}
              </div>
              <button
                onClick={handleAddToCart}
                className="bg-primary-600 hover:scale-105 transition-transform duration-200 size-9 rounded-full flex justify-center items-center text-white"
              >
                <IconPlus stroke={2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
