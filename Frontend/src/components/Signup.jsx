import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate(); // Initialize the navigation hook

  // Function to handle sign up
  const handleSignUp = () => {
    // Add logic for account creation here
    navigate('/home'); // Redirect to the home page
  };

  return (
    <div className="flex h-screen w-screen">
      {/* Left Section with Branding */}
      <div
        className="w-1/2 bg-black text-white flex flex-col justify-between bg-cover p-8"
        style={{ backgroundImage: "url('./assets/accnt.png')" }}
      >
        {/* Branding / Logo Section */}
        <div className="flex items-start">
          <img src="/assets/logo.png" alt="logo" className="h-16" />
        </div>
      </div>

      {/* Right Section with Sign Up Form */}
      <div className="w-1/2 flex flex-col items-center justify-center px-8">
        <div className="w-full max-w-sm">
          {/* Heading */}
          <h1 className="text-3xl font-semibold mb-2">Sign Up</h1>
          <p className="text-sm text-muted-foreground mb-6">
            Create a new account by filling out the information below
          </p>

          {/* Sign Up Form */}
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Full Name"
              className="w-full"
            />
            <Input
              type="text"
              placeholder="Employee ID"
              className="w-full"
            />
            <Input
              type="email"
              placeholder="Email"
              className="w-full"
            />
            <Input
              type="password"
              placeholder="Password"
              className="w-full"
            />
            <Input
              type="password"
              placeholder="Confirm Password"
              className="w-full"
            />
            <Button variant="default" className="w-full" onClick={handleSignUp}>
              Create Account
            </Button>
          </div>

          {/* Redirect to Login */}
          <div className="mt-4 flex justify-center items-center">
            <p className="text-sm">Already have an account?</p>
            <Button
              variant="link"
              className="ml-2"
              onClick={() => navigate('/login')}
            >
              Log In
            </Button>
          </div>
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
