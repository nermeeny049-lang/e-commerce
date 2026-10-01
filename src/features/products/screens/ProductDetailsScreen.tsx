import { getSpecificProduct } from "../services/getSpecificProduct";
import ProductInfo from "../components/productDetails/productInfo";
export default async function ProductDetailsScreen({ id }: { id: string }) {
  const productDetailsResponse = await getSpecificProduct(id);
  return (
    <>
      <ProductInfo productInfo={productDetailsResponse.data} />
    </>
  );
}
