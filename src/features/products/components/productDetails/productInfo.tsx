"use client";
import {
  IconBolt,
  IconGardenCart,
  IconHeart,
  IconMinus,
  IconPlus,
  IconRotate,
  IconShare3,
  IconShieldHalfFilled,
  IconTruckDelivery,
} from "@tabler/icons-react";
import { PProduct } from "../../types/product.type";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import { cartActions } from "<prefix>/features/cart/slices/cart.slice";
import { useDispatch } from "react-redux";
import { addProductToCart } from "<prefix>/features/cart/server/cart.actions";
import { toast } from "sonner";

export default function productInfo({
  productInfo,
}: {
  productInfo: PProduct;
}) {
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
  return (
    <>
      <section id="product-details" className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div id="product-images" className="lg:w-1/4">
              <div className="bg-white rounded-xl shadow-sm p-4 top-4 sticky">
                <ImageGallery
                  showFullscreenButton={false}
                  showPlayButton={false}
                  showNav={false}
                  items={productInfo.images.map((image) => {
                    return {
                      original: image,
                      thumbnail: image,
                    };
                  })}
                />
              </div>
            </div>
            <div id="product-info" className="lg:w-3/4">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-primary-50 text-primary-700 text-xs px-3 py-1.5 rounded-full hover:bg-primary-100 transition-transform duration-200">
                    {productInfo.category.name}
                  </span>
                  <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full">
                    {productInfo.brand.name}
                  </span>
                </div>
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  {productInfo.title}
                </h1>
                <div className="flex items-center gap-3 mb-4"></div>
                <div className="flex items-center gap-3 mb-6 flex-wrap">
                  <span className="text-3xl font-bold text-gray-900">
                    {productInfo.priceAfterDiscount || productInfo.price} EGP
                  </span>
                  {productInfo.priceAfterDiscount && (
                    <span className="line-through text-gray-500">
                      {productInfo.price} EGP
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 mb-6">
                  {productInfo.quantity > 0 ? (
                    <span className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-primary-50 text-primary-700">
                      <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                      In Stock
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-red-50 text-red-700">
                      <span className="w-2 h-2 rounded-full bg-red-500"></span>
                      Out of Stock
                    </span>
                  )}
                </div>
                <div className="border-t border-gray-100 pt-5 mb-6">
                  <p className="leading-relaxed text-gray-600">
                    {productInfo.description}
                  </p>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden">
                      <button
                        id="decrease-qty"
                        className="px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-primary-600 transition disabled:opacity-50"
                      >
                        <IconMinus stroke={2} />
                      </button>
                      <input
                        type="number"
                        min={1}
                        defaultValue={1}
                        id="quantity"
                        className="w-16 text-center border-0 focus:ring-0 focus:outline-none text-lg font-medium"
                      />
                      <button
                        id="increase-qty"
                        className="px-4 py-3 text-gray-600 hover:bg-gray-100 hover:text-primary-600 transition disabled:opacity-50"
                      >
                        <IconPlus stroke={2} />
                      </button>
                    </div>
                    <span className="text-sm text-gray-500">
                      {productInfo.quantity} available
                    </span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">total price:</span>
                    <span className="text-2xl font-bold text-primary-600">
                      {productInfo.priceAfterDiscount || productInfo.price} EGP
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <button
                    className="flex gap-2 w-1/2 justify-center text-white py-3.5 px-6 rounded-xl font-medium hover:bg-primary-700 active:scale-[0.98] transition-all bg-primary-600"
                    id="add-to-cart"
                    onClick={handleAddToCart}
                  >
                    <IconGardenCart stroke={2} />
                    <span>Add to Cart</span>
                  </button>
                  <button
                    className="flex gap-2 w-1/2 justify-center text-white py-3.5 px-6 rounded-xl font-medium hover:bg-gray-800 active:scale-[0.98] transition-all bg-gray-900"
                    id="buy-now"
                  >
                    <IconBolt stroke={2} />
                    <span>Buy Now</span>
                  </button>
                </div>
                <div className="flex gap-3 mb-6">
                  <button
                    className="flex-1 border-2 px-4 py-3 rounded-xl font-medium transition flex items-center justify-center gap-2 border-gray-200 text-gray-700 hover:border-primary-300 hover:text-primary-600"
                    id="wishlist-button"
                  >
                    <IconHeart stroke={2} />
                  </button>
                  <button className="border-2 px-4 py-3 rounded-xl font-medium transition gap-2 border-gray-200 text-gray-700 hover:border-primary-300 hover:text-primary-600">
                    <IconShare3 stroke={2} />
                  </button>
                </div>
                <div className="border-t pt-6 border-gray-100">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex gap-3 items-center">
                      <div className="h-10 w-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center shrink-0">
                        <IconTruckDelivery stroke={2} />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm">
                          Free Delivery
                        </h4>
                        <p className="text-xs text-gray-500">Orders over 50$</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center">
                      <div className="h-10 w-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center shrink-0">
                        <IconRotate stroke={2} />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm">
                          30 Days Return
                        </h4>
                        <p className="text-xs text-gray-500">money back</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-center">
                      <div className="h-10 w-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center shrink-0">
                        <IconShieldHalfFilled stroke={2} />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-sm">
                          Secure Payment
                        </h4>
                        <p className="text-xs text-gray-500">100% protected</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
