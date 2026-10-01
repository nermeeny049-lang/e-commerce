import { apiClient } from "<prefix>/services/apiClient";
import { AxiosRequestConfig } from "axios";
import { ProductsAPIResponse } from "../types/product.type";

export default async function getProducts(filters?: {
  category?: string;
  brand?: string;
}): Promise<ProductsAPIResponse> {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: "/products",
    params: filters,
  };
  const { data } = await apiClient.request(options);
  return data;
}
