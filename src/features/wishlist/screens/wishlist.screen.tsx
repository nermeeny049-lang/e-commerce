import {
  IconArrowAutofitLeft,
  IconGardenCart,
  IconHeart,
  IconTrash,
} from "@tabler/icons-react";
import Link from "next/link";
import WishlistItem from "../components/wishlistItem";
import getFavorateItems from "../server/wishlist.actions";

export default async function wishlistScreen() {
  const wishlistResponse = await getFavorateItems();

  if (
    wishlistResponse.status === "fail" ||
    wishlistResponse.status === "error"
  ) {
    return <>ERROR!!!</>;
  }
  if (wishlistResponse.status === "success") {
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
                <div className="text-gray-900 font-medium">My Wishlist</div>
              </nav>
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                    <span className="bg-linear-to-r from-primary-600 to-primary-700 text-white w-12 h-12 rounded-xl flex items-center justify-center">
                      <IconHeart stroke={2} />
                    </span>
                    My Wishlist
                  </h1>
                  <p className="mt-2 text-gray-500">
                    You have{" "}
                    <span className="text-primary-600 font-semibold">
                      {wishlistResponse.count}
                    </span>{" "}
                    item in your wishlist
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-4">
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                    {wishlistResponse.status === "success" &&
                      wishlistResponse.data?.map((item) => (
                        <WishlistItem key={item._id} Item={item} />
                      ))}
                  </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
