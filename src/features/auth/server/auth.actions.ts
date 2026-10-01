"use server";
import { apiClient } from "<prefix>/services/apiClient";
import { AxiosRequestConfig } from "axios";
import { cookies } from "next/headers";
export async function setToken(token: string): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set("token", token, {
    httpOnly: true,
  });
}
export async function getToken(): Promise<string | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  if (!token) {
    return null;
  }
  return token.value;
}
export async function deleteToken(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete("token");
}
export async function verifyToken(): Promise<{
  isAuthenticated: boolean;
  userInfo: { id: string; name: string; role: string } | null;
}> {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  if (!token) {
    return {
      isAuthenticated: false,
      userInfo: null,
    };
  }
  try {
    const options: AxiosRequestConfig = {
      method: "GET",
      url: "/auth/verifyToken",
      headers: {
        token: token.value,
      },
    };
    const { data } = await apiClient.request(options);
    if (data.message === "verified") {
      return {
        isAuthenticated: true,
        userInfo: {
          id: data.decoded.id,
          name: data.decoded.name,
          role: data.decoded.role,
        },
      };
    }
    return {
      isAuthenticated: false,
      userInfo: null,
    };
  } catch (error) {
    return {
      isAuthenticated: false,
      userInfo: null,
    };
  }
}
