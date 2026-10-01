"use server";
import { Axios, AxiosRequestConfig, isAxiosError } from "axios";
import { SignupValues, SignupSchema } from "../schemas/SignupSchema";
import z from "zod";
import { apiClient } from "<prefix>/services/apiClient";

type signupFieldErrors = Partial<Record<keyof SignupValues, string[]>>;
type signupActionReturn =
  | {
      success: true;
      message: string;
    }
  | {
      success: false;
      message: string;
      fieldErrors?: signupFieldErrors;
    };
export async function SignupAction(
  values: SignupValues,
): Promise<signupActionReturn> {
  const validationResult = SignupSchema.safeParse(values);

  if (validationResult.success === false) {
    const { formErrors, fieldErrors } = z.flattenError(validationResult.error);
    return {
      success: false,
      message: formErrors[0] ?? "fix highlighted errors",
      fieldErrors,
    };
  }

  try {
    const options: AxiosRequestConfig = {
      method: "POST",
      url: "/auth/signup",
      data: validationResult.data,
    };
    await apiClient.request(options);
    return {
      success: true,
      message: "account created successfully",
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
