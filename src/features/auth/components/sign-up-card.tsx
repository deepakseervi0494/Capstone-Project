"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { registerSchema } from "../schemas";
import { useRegister } from "../api/use-register";
const SignUpCard = () => {
  const { mutate, isPending } = useRegister();
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const OnSubmit = (values: z.infer<typeof registerSchema>) => {
    mutate({ json: values });
  };
  return (
    <Card className="w-full h-[500px] md:w-[487px] border-none shadow:none">
      <CardHeader className="flex items-center justify-center text-center p-5">
        <CardTitle className="text-3xl">Sign Up</CardTitle>
        <CardDescription>
          By signing Up you agree to our{" "}
          <span className="text-cyan-400">Privacy and Policy</span> and{" "}
          <span className="text-cyan-400">T&C</span>
        </CardDescription>
      </CardHeader>
      <div className="px-7 py-0">
        <Separator></Separator>
      </div>
      <CardContent className="p-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(OnSubmit)} className="space-y-3">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem >
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="Enter Your Name"
                      ></Input>
                    </FormControl>
                    <FormMessage> </FormMessage>
                  </FormItem>
                );
              }}
            ></FormField>

            <FormField
              name="email"
              control={form.control}
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
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
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="Enter Password"
                      ></Input>
                    </FormControl>
                    <FormMessage> </FormMessage>
                  </FormItem>
                );
              }}
            ></FormField>
            <Button disabled={isPending} size={"lg"} className="w-full">
              Register
            </Button>
          </form>
        </Form>
      </CardContent>

      <CardContent className="px-5 flex gap-x-2">
        <Button
          variant={"secondary"}
          size={"lg"}
          className="w-full "
          disabled={isPending}
        >
          <FcGoogle className="mr-1 size-5"></FcGoogle>Login With Google
        </Button>
        <Button
          variant={"secondary"}
          size={"lg"}
          className="w-full "
          disabled={isPending}
        >
          <FaGithub className="mr-1 size-5"></FaGithub>Login With Git-Hub
        </Button>
      </CardContent>
      <div className="flex justify-center">
        Already have an Account?
        <Link href="/sign-in" className="text-cyan-400">
          &nbsp;Sign In
        </Link>
      </div>
    </Card>
  );
};
export default SignUpCard;
