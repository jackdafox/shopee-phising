"use server";

import { formSchema } from "@/lib/form_schema";
import prisma from "./prisma";
import { z } from "zod";

type Inputs = z.infer<typeof formSchema>;

export async function resetPassword(userData: Inputs) {
  const result = formSchema.safeParse(userData);
  if (result.success) {
    await prisma.user.create({
      data: {
        email: userData.email,
        password: userData.password,
      },
    });
  }
}
