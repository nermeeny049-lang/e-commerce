"use server";
import { apiClient } from "<prefix>/services/apiClient";
import { LoginSchema, LoginValues } from "../schemas/LoginSchema";
import z from "zod";
import { AxiosRequestConfig, isAxiosError } from "axios";
type loginResponse = {
  message: string;
  user: {
    name: string;
    email: string;
    role: string;
  };
  token: string;
};
type loginFieldErrors = Partial<Record<keyof LoginValues, string[]>>;
type loginActionReturn =
  | {
      success: true;
      message: string;
      data: loginResponse;
    }
  | {
      success: false;
      message: string;
      fieldErrors?: loginFieldErrors;
    };
export async function LoginAction(
  values: LoginValues,
): Promise<loginActionReturn> {
  const ValidationResult = LoginSchema.safeParse(values);
  if (ValidationResult.success === false) {
    const { formErrors, fieldErrors } = z.flattenError(ValidationResult.error);
    return {
      success: false,
      message: formErrors[0] ?? "fix highlighted errors",
      fieldErrors,
    };
  }
  try {
    const options: AxiosRequestConfig = {
      method: "POST",
      url: "/auth/signin",
      data: ValidationResult.data,
    };
    const { data } = await apiClient.request(options);
    return {
      success: true,
      message: "successful login",
      data,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        success: false,
        message:
          error.response?.data?.message ||
          "can't reach server, try again later",
      };
    }
    return {
      success: false,
      message: "an error occurred",
    };
  }
}
