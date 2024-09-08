import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons"; // Assuming Icons component exists
import { cn } from "@/lib/utils"; // Utility for conditional classnames

export default function LoginPage() {
  return (
    <div className="flex h-screen w-screen">
      {/* Left Section with Branding */}
      <div className="w-1/2 bg-black text-white flex flex-col justify-between p-8">
        <div>
          <Icons.logo className="h-6 w-6" /> {/* Assuming Icons.logo exists */}
          <span className="ml-2 text-xl font-semibold">Acme Inc</span>
        </div>
        <div className="text-sm">
          <p className="mb-4">
            “This library has saved me countless hours of work and helped me
            deliver stunning designs to my clients faster than ever before.”
          </p>
          <p>Sofia Davis</p>
        </div>
      </div>

      {/* Right Section with Login Form */}
      <div className="w-1/2 flex flex-col items-center justify-center px-8">
        <div className="w-full max-w-sm">
          <div className="mb-6 text-right">
            <a href="/login" className="text-sm text-muted-foreground">
              Login
            </a>
          </div>

          <h1 className="text-2xl font-semibold mb-2">Create an account</h1>
          <p className="text-sm text-muted-foreground mb-6">
            Enter your email below to create your account
          </p>

          {/* Form */}
          <div className="space-y-4">
            <Input
              type="email"
              placeholder="name@example.com"
              className="w-full"
            />
            <Button variant="default" className="w-full">
              Sign In with Email
            </Button>
          </div>

          {/* Divider */}
          <div className="my-6 text-center text-sm text-muted-foreground">
            OR CONTINUE WITH
          </div>

          {/* GitHub Button */}
          <Button variant="outline" className="w-full">
            <Icons.github className="mr-2 h-4 w-4" />
            GitHub
          </Button>

          {/* Terms */}
          <p className="mt-6 text-center text-xs text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <a
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
