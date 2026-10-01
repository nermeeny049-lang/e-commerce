import { z } from "zod";
export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, { error: "email is required" })
    .pipe(z.email({ error: "Invalid email address" })),
  password: z
    .string()
    .min(1, { error: "Password is required" })
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
});

export type LoginValues = z.infer<typeof LoginSchema>;
