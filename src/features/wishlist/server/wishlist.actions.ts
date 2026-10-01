"use server";
import axios, { AxiosRequestConfig } from "axios";
import { cookies } from "next/headers";
import {
  ProductsResponse,
  ProductsResponseError,
} from "../types/wishlistTypes";

export default async function getFavorateItems(): Promise<
  ProductsResponse | ProductsResponseError
> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  if (!token) {
    return {
      status: "fail",
      message: "Please login first to add products to your wishlist",
      data: null,
      count: 0,
    };
  }
  try {
    const options: AxiosRequestConfig = {
      url: "https://ecommerce.routemisr.com/api/v1/wishlist",
      method: "GET",
      headers: {
        token: token?.value,
      },
    };
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    return {
      status: "fail",
      message: "Somthing went wrong, please try again later",
      data: null,
      count: 0,
    };
  }
}

export async function addToFavorate(
  id: string,
): Promise<ProductsResponse | ProductsResponseError> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  if (!token) {
    return {
      status: "fail",
      message: "Please login first to add products to your wishlist",
      data: null,
      count: 0,
    };
  }
  try {
    const options: AxiosRequestConfig = {
      url: "https://ecommerce.routemisr.com/api/v1/wishlist",
      method: "POST",
      headers: {
        token: token?.value,
      },
      data: {
        productId: id,
      },
    };
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    return {
      status: "fail",
      message: "Somthing went wrong, please try again later",
      data: null,
      count: 0,
    };
  }
}

export async function removeFromFavorate(
  id: string,
): Promise<ProductsResponse | ProductsResponseError> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  if (!token) {
    return {
      status: "fail",
      message: "Please login first to remove products to your wishlist",
      data: null,
      count: 0,
    };
  }
  try {
    const options: AxiosRequestConfig = {
      url: `https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
      method: "DELETE",
      headers: {
        token: token?.value,
      },
    };
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    return {
      status: "fail",
      message: "Somthing went wrong, please try again later",
      data: null,
      count: 0,
    };
  }
}
