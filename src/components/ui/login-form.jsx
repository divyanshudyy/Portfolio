"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import BlurText from "../Hero/BlurText";

// ✅ Import shadcn form components
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
    console.log(values);
    form.reset();
    const { email, comment } = values;

    const templateParams = {
      email: email,
      message: comment,
    };
    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          form.reset(); // Clear form after success
        },
        (error) => {
          console.error("FAILED...", error);
        }
      );
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-2">
              <BlurText
                text="Contact Me"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-4xl mb-8 text-white font-bold"
              />
            </div>

            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="m@example.com"
                          className="text-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="comment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Comment</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Type your query here."
                          className="text-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" className="w-full">
                Send
              </Button>
            </div>

            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
              <span className="relative z-10 px-2 text-white bg-zinc-950">
                Or
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Button variant="outline" type="button" className="w-full">
                <a
                  href="https://github.com/divyanshudyy?tab=overview&from=2025-04-01&to=2025-04-10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </Button>
              <Button variant="outline" type="button" className="w-full">
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
