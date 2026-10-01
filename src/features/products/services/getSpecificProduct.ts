import { apiClient } from "<prefix>/services/apiClient";
import { AxiosRequestConfig } from "axios";
import { ProductDetailsResponse } from "../types/product.type";

export async function getSpecificProduct(
  id: string,
): Promise<ProductDetailsResponse> {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: `/products/${id}`,
  };
  const { data } = await apiClient.request(options);
  console.log("data", data);
  return data;
}
