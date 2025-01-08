"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { z } from "zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/lib/form_schema";
import { login } from "@/app/_actions";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [loading, setLoading] = React.useState(false);
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setLoading(true);
    const result = await login(values);
    if (result) {
      router.push(`/reset-password/${result.id}`);
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-full max-w-md mx-auto p-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-bold">Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} className="w-full" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-bold">Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Password"
                  type="password"
                  {...field}
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Link
          href="https://support.spotify.com/article/reset-password/"
          className="underline text-sm hover:text-[#1ed760]"
        >
          <h1 className="py-5">Need Support?</h1>
        </Link>
        <Button
          type="submit"
          className="w-full rounded-full p-6 hover:bg-[#4bdd7e]  text-black font-bold  bg-[#1ed760] text-sm md:text-base"
          disabled={loading}
        >
          Verify
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
