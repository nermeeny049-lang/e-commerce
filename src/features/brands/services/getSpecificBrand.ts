import { apiClient } from "<prefix>/services/apiClient";
import { AxiosRequestConfig } from "axios";
import { BrandResponse } from "../types/brand.type";

export async function getSpecificBrand(id: string): Promise<BrandResponse> {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: `/brands/${id}`,
  };
  const { data } = await apiClient.request(options);
  return data;
}
