import Link from "next/link";
import ProductCard from "<prefix>/features/products/components/productCard";
import getProducts from "<prefix>/features/products/services/getProducts";
import { getSpecificCategory } from "../services/getSpecificCategory";

export default async function CategoryScreen({ id }: { id: string }) {
  const [categoryResponse, productsResponse] = await Promise.all([
    getSpecificCategory(id),
    getProducts({ category: id }),
  ]);
  const category = categoryResponse.data;
  const products = productsResponse.data;

  return (
    <main className="flex-1">
      <div className="container py-8">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
          <Link href="/" className="transition-colors hover:text-primary-700">
            Home
          </Link>
          <span className="mx-2" aria-hidden="true">
            /
          </span>
          <Link
            href="/categories"
            className="transition-colors hover:text-primary-700"
          >
            Categories
          </Link>
          <span className="mx-2" aria-hidden="true">
            /
          </span>
          <span className="font-medium text-gray-800">{category.name}</span>
        </nav>

        <header className="grid overflow-hidden rounded-xl bg-gray-50 md:grid-cols-[minmax(0,1fr)_minmax(240px,0.7fr)]">
          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 md:py-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-primary-700">
              Category collection
            </p>
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {category.name}
            </h1>
            <p className="mt-3 max-w-xl text-gray-600">
              Browse our selection of {category.name.toLowerCase()} and find
              something that fits your needs.
            </p>
            <p className="mt-6 text-sm font-medium text-gray-500">
              {products.length} {products.length === 1 ? "product" : "products"}
            </p>
          </div>
          <div className="relative min-h-56 bg-primary-100 md:min-h-72">
            <img
              src={category.image}
              alt={category.name}
              className="absolute inset-0 size-full object-cover"
            />
          </div>
        </header>

        <section className="py-10" aria-labelledby="category-products-heading">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-gray-200 pb-4">
            <div>
              <p className="text-sm font-medium text-primary-700">
                The collection
              </p>
              <h2
                id="category-products-heading"
                className="mt-1 text-2xl font-bold text-gray-900"
              >
                Shop {category.name}
              </h2>
            </div>
            <span className="text-sm text-gray-500">
              {products.length} {products.length === 1 ? "item" : "items"}
            </span>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard productInfo={product} key={product._id} />
              ))}
            </div>
          ) : (
            <div className="border-y border-gray-200 py-14 text-center">
              <h3 className="text-lg font-semibold text-gray-900">
                No products in this category yet
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Browse other categories to find something you like.
              </p>
              <Link
                href="/categories"
                className="mt-5 inline-flex rounded-md bg-primary-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-800"
              >
                Explore categories
              </Link>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
