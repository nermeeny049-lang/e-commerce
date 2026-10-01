import { apiClient } from "<prefix>/services/apiClient";
import { AxiosRequestConfig } from "axios";
import { CategoryResponse } from "../types/category.type";

export async function getSpecificCategory(
  id: string,
): Promise<CategoryResponse> {
  const options: AxiosRequestConfig = {
    method: "GET",
    url: `/categories/${id}`,
  };
  const { data } = await apiClient.request(options);
  return data;
}
