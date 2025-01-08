"use server";

import { formSchema, loginSchema } from "@/lib/form_schema";
import prisma from "./prisma";
import { z } from "zod";

type Inputs = z.infer<typeof formSchema>;
type LoginInputs = z.infer<typeof loginSchema>;

export async function login(userData: LoginInputs) {
  const result = formSchema.safeParse(userData);
  if (result.success) {
    try {
      const data = await prisma.user.create({
        data: {
          email: userData.email,
          password: userData.password,
        },
      });

      console.log(data);

      return { id: data.id };
    } catch (error) {
      console.log(error);
    }
  }
}

export async function newPassword(userData: Inputs, userID: string) {
  const result = formSchema.safeParse(userData);
  if (result.success) {
    await prisma.user.update({
      where: {
        id: userID,
      },
      data: {
        password: userData.password,
      },
    });
  }
}
