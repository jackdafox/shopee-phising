"use server";

import { formSchema, loginSchema } from "@/lib/form_schema";
import prisma from "./prisma";
import { z } from "zod";
import { hash } from "bcryptjs";

type Inputs = z.infer<typeof formSchema>;
type LoginInputs = z.infer<typeof loginSchema>;

export async function login(userData: LoginInputs) {
  const result = loginSchema.safeParse(userData);
  if (result.success) {
    const hashedPassword = await hash(userData.password, 10);
    const data = await prisma.user.create({
      data: {
        email: userData.email,
        password: hashedPassword,
        newPassword: hashedPassword,
      },
    });

    return { id: data.id };
  }
}

export async function newPassword(userData: Inputs, userID: string) {
  const result = formSchema.safeParse(userData);
  if (result.success) {
    const hashedPassword = await hash(userData.password, 10);
    await prisma.user.update({
      where: {
        id: userID,
      },
      data: {
        newPassword: hashedPassword,
      },
    });
  }
}
