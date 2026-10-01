import { getAllCategories } from "<prefix>/features/categories/services/getAllCategories";
import Link from "next/link";

export default async function HomeCategories() {
  const categoriesResponse = await getAllCategories();

  return (
    <>
      <section className="py-12">
        <div className="container">
          <div className="title mb-10">
            <h2 className="pl-5 text-3xl font-bold relative before:w-1.5 before:h-full before:bg-primary-600 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-md">
              Shop by <span className="text-primary-600">Categories</span>
            </h2>
          </div>
          <div className="category-card grid rounded-2xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
            {categoriesResponse.data.map((category) => (
              <Link
                href={`/categories/${category._id}`}
                key={category._id}
                className="cursor-pointer bg-white hover:bg-gray-100 transition-colors duration-200 shadow-md flex flex-col items-center py-7 gap-3"
              >
                <img
                  src={category.image}
                  className="size-24 rounded-full object-cover"
                  alt={category.name}
                ></img>
                <h3 className="font-semibold">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
