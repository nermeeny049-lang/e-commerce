import Link from "next/link";
import { getAllBrands } from "../services/getAllBrands";

export default async function BrandsScreen() {
  const brandsResponse = await getAllBrands();
  const brands = brandsResponse.data;

  return (
    <main className="flex-1">
      <section className="container py-10 sm:py-14">
        <header className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-gray-200 pb-6">
          <div>
            <h2 className="pl-5 mb-6 text-3xl font-bold relative before:w-1.5 before:h-full before:bg-primary-600 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-md">
              Shop by <span className="text-primary-600">Brand</span>
            </h2>
            <p className="mt-3 max-w-2xl text-gray-600">
              Explore trusted names and discover products from the brands you
              love.
            </p>
          </div>
          <p className="text-sm font-medium text-gray-500">
            {brands.length} {brands.length === 1 ? "brand" : "brands"}
          </p>
        </header>

        {brands.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {brands.map((brand) => (
              <Link
                href={`/brands/${brand._id}`}
                key={brand._id}
                className="group flex min-h-52 flex-col items-center justify-center gap-4 border border-gray-200 bg-white p-5 text-center transition duration-200 hover:-translate-y-0.5 hover:border-primary-300 hover:shadow-md"
              >
                <div className="flex h-28 w-full items-center justify-center">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="font-semibold text-gray-800 transition-colors group-hover:text-primary-700">
                  {brand.name}
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="border-y border-gray-200 py-14 text-center">
            <h2 className="text-lg font-semibold text-gray-900">
              No brands are available right now
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Please check back later.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
