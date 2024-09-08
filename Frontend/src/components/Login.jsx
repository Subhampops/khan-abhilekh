import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { useState } from 'react'; // Import useState to manage state

export default function Login() {
  const navigate = useNavigate(); // Initialize the navigation hook

  // State to manage input values
  const [employeeID, setEmployeeID] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle login
  const handleLogin = async () => {
    // Simulate authentication logic
    if (employeeID === 'EMP001' && password === 'password') {
      // Redirect to the home page
      navigate('/home');
    } else {
      alert('Invalid Employee ID or Password. Please try again.');
    }
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

      {/* Right Section with Login Form */}
      <div className="w-1/2 flex flex-col items-center justify-center px-8">
        <div className="w-full max-w-sm">
          {/* Heading */}
          <h1 className="text-3xl font-semibold mb-2">Log in</h1>
          <p className="text-sm text-muted-foreground mb-6">
            Enter your Employee ID and Password to log in to your account
          </p>

          {/* Login Form */}
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Employee ID"
              className="w-full"
              value={employeeID}
              onChange={(e) => setEmployeeID(e.target.value)} // Update state on change
            />
            <Input
              type="password"
              placeholder="Password"
              className="w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update state on change
            />
            {/* Forgot Password Link */}
            <div className="flex justify-end">
              <Button
                variant="link"
                className="text-sm text-primary hover:underline"
                onClick={() => navigate('/forgot-password')}
              >
                Forgot Password?
              </Button>
            </div>
            <Button variant="default" className="w-full" onClick={handleLogin}>
              Sign In
            </Button>
          </div>

          {/* Or Sign Up Section */}
          <div className="mt-4 flex justify-center items-center">
            <p className="text-sm">Don't have an account?</p>
            <Button
              variant="link"
              className="ml-2"
              onClick={() => navigate('/signup')}
            >
              Sign Up
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
