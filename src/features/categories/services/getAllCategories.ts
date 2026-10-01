import { apiClient } from "<prefix>/services/apiClient";
import { AxiosRequestConfig } from "axios";
import { CategoriesApiResponse } from "../types/category.type";

export async function getAllCategories(): Promise<CategoriesApiResponse> {
  const options: AxiosRequestConfig = {
    url: "/categories",
    method: "GET",
  };
  const { data } = await apiClient.request(options);
  console.log("data", data);
  return data;
}
