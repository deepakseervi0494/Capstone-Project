"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { signUpWithGithub ,signUpWithGoogle } from "@/lib/oauth";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { loginSchema } from "../schemas";
import { useLogin } from "../api/use-login";

const SignInCard = () => {
  const { mutate, isPending } = useLogin();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const OnSubmit = (values: z.infer<typeof loginSchema>) => {
    mutate({ json: values });
  };
  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow:none pb-3">
      <CardHeader className="flex items-center justify-center text-center p-5">
        <CardTitle className="text-3xl">Welcome Back !</CardTitle>
      </CardHeader>
      <div className="px-7">
        <Separator></Separator>
      </div>
      <CardContent className="p-7">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(OnSubmit)} className="space-y-4">
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        type="email"
                        placeholder="Enter Your Email"
                      ></Input>
                    </FormControl>
                    <FormMessage> </FormMessage>
                  </FormItem>
                );
              }}
            ></FormField>
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem className="mt-0">
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        type="password"
                        placeholder="Enter Password"
                      ></Input>
                    </FormControl>
                    <FormMessage className="mt-0"> </FormMessage>
                  </FormItem>
                );
              }}
            ></FormField>

            <Button disabled={isPending} size={"lg"} className="w-full">
              Log In
            </Button>
          </form>
        </Form>
      </CardContent>
      <div className="px-7">
        <Separator></Separator>
      </div>
      <CardContent className="px-7 flex flex-col gap-y-4">
        <Button
        onClick={()=>signUpWithGoogle()}
          variant={"secondary"}
          size={"lg"}
          className="w-full "
          disabled={isPending}
        >
          <FcGoogle className="mr-2 size-5"></FcGoogle>Login With Google
        </Button>
        <Button
          onClick={()=>signUpWithGithub()}
          variant={"secondary"}
          size={"lg"}
          className="w-full "
          disabled={isPending}
        >
          <FaGithub className="mr-2 size-5"></FaGithub>Login With Git-Hub
        </Button>
      </CardContent>
      <div className="flex justify-center items-center">
        Don't Have Account?
        <Link href="/sign-up" className="text-cyan-400">
          &nbsp;Sign Up
        </Link>
      </div>
    </Card>
  );
};

export default SignInCard;
