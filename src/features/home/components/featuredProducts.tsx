import getProducts from "<prefix>/features/products/services/getProducts";
import ProductCard from "../../products/components/productCard";
export default async function featuredProducts() {
  const productsResponse = await getProducts();
  return (
    <>
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="title mb-10">
            <h2 className="pl-5 text-3xl font-bold relative before:w-1.5 before:h-full before:bg-primary-600 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:rounded-md">
              Featured <span className="text-primary-600">Products</span>
            </h2>
          </div>
          <div className="product-card grid rounded-2xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
            {productsResponse.data.map((product) => (
              <ProductCard productInfo={product} key={product._id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
