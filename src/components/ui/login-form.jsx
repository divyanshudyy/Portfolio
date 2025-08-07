"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";


import emailjs from "@emailjs/browser";

const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  comment: z
    .string()
    .min(5, { message: "Comment must be at least 5 characters long." })
    .max(500, { message: "Comment can't exceed 500 characters." }),
});

export function LoginForm({ className, ...props }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      comment: "",
    },
  });

  function onSubmit(values) {
    const { email, comment } = values;

    emailjs
      .send(
        serviceID,
        templateID,
        { from_email: email, message: comment },
        publicKey
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Thanks for reaching out! I'll get back to you soon.");
          form.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          toast.error("Failed to send message. Please try again.");
        }
      );
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-col gap-6">
            

            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="m@example.com"
                          className={cn(
                            "text-white focus:outline-none focus:ring-1 backdrop-blur-md  bg-black/40 ",
                            fieldState.error
                              ? "border-red-500 "
                              : "border-border "
                          )}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm mt-1" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="comment"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormLabel className="text-white">Comment</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Type your query here."
                          className={cn(
                            "text-white focus:outline-none focus:ring-1 backdrop-blur-md  bg-black/40",
                            fieldState.error
                              ? "border-red-500"
                              : "border-border"
                          )}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm mt-1" />
                    </FormItem>
                  )}
                />
              </div>

              <Button
                type="submit"
                variant="outline"
                className="w-full bg-white"
              >
                Send
              </Button>
            </div>

            <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-zinc-600">
              <span className="relative z-10 px-2 text-white bg-zinc-900 border-0 rounded-4xl ">
                Or
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Button
                variant="outline"
                type="button"
                className="w-full bg-white "
              >
                <a
                  href="https://github.com/divyanshudyy?tab=overview&from=2025-04-01&to=2025-04-10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </Button>
              <Button
                variant="outline"
                type="button"
                className="w-full bg-white"
              >
                <a
                  href="https://www.linkedin.com/in/divyanshu-divy-8170461ba/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
