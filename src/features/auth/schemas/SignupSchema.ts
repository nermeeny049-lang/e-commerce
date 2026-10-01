import { z } from "zod";
export const SignupSchema = z
  .object({
    name: z
      .string()
      .min(1, { error: "Name is required" })
      .max(25, { error: "Name must be less than 25 characters" }),
    email: z
      .email({ error: "Invalid email address" })
      .min(1, { error: "email is required" }),
    password: z
      .string()
      .regex(/[A-Z]/, {
        error: "Password must contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        error: "Password must contain at least one lowercase letter",
      })
      .regex(/[0-9]/, { error: "Password must contain at least one number" })
      .regex(/[!@#$%^&*-_]/, {
        error: "Password must contain at least one special character",
      })
      .min(8, { error: "Password must be at least 8 characters long" }),
    rePassword: z.string().min(1, { error: "Confirm Password is required" }),
    phone: z
      .string()
      .regex(/^01[0125][0-9]{8}$/, {
        error: "We only accept Egyptian phone numbers",
      })
      .min(1, { error: "Phone number is required" }),
  })
  .refine((data) => data.password === data.rePassword, {
    error: "password and confirm password must be the same",
    path: ["rePassword"],
  });
export type SignupValues = z.infer<typeof SignupSchema>;
