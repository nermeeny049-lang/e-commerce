"use server";

import axios, { AxiosRequestConfig } from "axios";
import { cookies } from "next/headers";
import { AddToCartResponse, CartErrorResponse } from "../types/cart.types";

export async function getCartItems(): Promise<
  AddToCartResponse | CartErrorResponse
> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  if (!token) {
    return {
      status: "fail",
      message: "Please login first to add products to your cart",
    };
  }
  try {
    const options: AxiosRequestConfig = {
      url: "https://ecommerce.routemisr.com/api/v2/cart",
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
    };
  }
}

export async function addProductToCart(
  id: string,
): Promise<AddToCartResponse | CartErrorResponse> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  if (!token) {
    return {
      status: "fail",
      message: "Please login first to add products to your cart",
    };
  }
  try {
    const options: AxiosRequestConfig = {
      url: "https://ecommerce.routemisr.com/api/v2/cart",
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
    };
  }
}

export async function removeFromCart(
  id: string,
): Promise<AddToCartResponse | CartErrorResponse> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  if (!token) {
    return {
      status: "fail",
      message: "Please login first to add products to your cart",
    };
  }
  try {
    const options: AxiosRequestConfig = {
      url: `https://ecommerce.routemisr.com/api/v2/cart/${id}`,
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
    };
  }
}

export async function clearCart(): Promise<
  AddToCartResponse | CartErrorResponse
> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  if (!token) {
    return {
      status: "fail",
      message: "Please login first to add products to your cart",
    };
  }
  try {
    const options: AxiosRequestConfig = {
      url: "https://ecommerce.routemisr.com/api/v2/cart",
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
    };
  }
}
