import { z } from "zod";

export const formSchema = z
  .object({
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

export const loginSchema = z.object({
  email: z.string().min(1, {
    message: "Email must not be empty",
  }),
  password: z.string().min(1, {
    message: "Password must not be empty",
  })
});
