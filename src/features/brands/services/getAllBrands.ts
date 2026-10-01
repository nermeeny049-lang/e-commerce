import { apiClient } from "<prefix>/services/apiClient";
import { AxiosRequestConfig } from "axios";
import { BrandsApiResponse } from "../types/brand.type";

export async function getAllBrands(): Promise<BrandsApiResponse> {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: "/brands",
  };
  const { data } = await apiClient.request(options);
  return data;
}
