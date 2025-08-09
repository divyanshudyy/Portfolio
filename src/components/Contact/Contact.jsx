import BlurText from "../Hero/BlurText";
import { LoginForm } from "@/components/ui/login-form";
export default function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10"
    >
      <div className="flex flex-col items-center gap-2">
        <BlurText
          text="Let’s Build Something"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-4xl mb-8 text-white font-bold"
        />
      </div>
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </section>
  );
}
