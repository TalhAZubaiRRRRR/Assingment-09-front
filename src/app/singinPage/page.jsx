"use client";


import { authClient, signIn } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify/unstyled";

export default function SignINPage() {
      const router = useRouter();
  
      const handleSubmit = async (e) => {
          e.preventDefault();
  
          const email = e.target.email.value;
          const password = e.target.password.value;
          
  
          try {
              const { data, error } = await signIn.email({
                  
                  email,
                  password,
                  
              });
              console.log(data,error)
  
              if (error) {
                  toast.error(error.message || "SignIN failed");
                  return;
              }
  
              if (data) {
                  toast.success("SignIn successful!");
                  setTimeout(() => {
                      router.push("/");
                  }, 800);
              }
          } catch (err) {
              toast.error("Something went wrong. Please try again.");
          }


          
      };

      

    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
            // callbackURL: "/"   // Uncomment if needed
        });
    };

    return (
        <div className="min-h-screen bg-[#1E2937] flex items-center justify-center px-4 py-12">
            <Card className="w-full max-w-md shadow-2xl border-0 overflow-hidden">
                
                {/* Dark Header - Matching your website */}
                <div className="bg-[#0f172a] text-white py-10 px-6 text-center rounded-2xl">
                    <div className="flex justify-center mb-4">
                        <Image
                            src="/download.png"
                            alt="StudyRoom"
                            width={75}
                            height={75}
                            className="object-contain bg-white rounded-full"
                        />
                    </div>
                    <h1 className="text-3xl font-bold">Sign In</h1>
                    <p className="text-gray-300 mt-2">Welcome back to StudyRoom</p>
                </div>

                {/* Form Area */}
                <div className="p-8 bg-white">
                    <Form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                        
                        <TextField
                            isRequired
                            name="email"
                            type="email"
                            validate={(value) => {
                                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                    return "Please enter a valid email address";
                                }
                                return null;
                            }}
                        >
                            <Label className="text-gray-800 font-medium">Email Address</Label>
                            <Input 
                                placeholder="john@example.com" 
                                className="mt-1 border-gray-300 focus:border-[#14b8a6]"
                            />
                            <FieldError />
                        </TextField>

                        <TextField
                            isRequired
                            name="password"
                            type="password"
                            validate={(value) => {
                                if (value.length < 8) return "Password must be at least 8 characters";
                                if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
                                if (!/[0-9]/.test(value)) return "Password must contain at least one number";
                                return null;
                            }}
                        >
                            <Label className="text-gray-800 font-medium">Password</Label>
                            <Input 
                                placeholder="Enter your password" 
                                className="mt-1 border-gray-300 focus:border-[#14b8a6]"
                            />
                            <Description className="text-gray-600 text-sm mt-1.5">
                                Must be at least 8 characters with 1 uppercase and 1 number
                            </Description>
                            <FieldError />
                        </TextField>

                        <div className="flex flex-col sm:flex-row gap-4 mt-6">
                            <Button 
                                type="submit" 
                                className="w-full bg-[#14b8a6] hover:bg-[#0f766e] text-white font-semibold py-6 text-base shadow-md"
                            >
                                <Check className="mr-2" />
                                Sign In
                            </Button>

                            <Button 
                                type="reset" 
                                variant="secondary" 
                                className="w-full py-6 text-base border border-gray-300"
                            >
                                Reset
                            </Button>
                        </div>
                    </Form>

                    <div className="my-8 text-center text-gray-500 font-medium">or</div>

                    {/* Google Sign In */}
                    <Button
                        type="button"
                        onClick={handleGoogleSignIn}
                        className="bg-[#0F766E] w-full border-2 border-gray-300 hover:bg-[#0F766E] py-6 text-base flex items-center justify-center gap-3 font-medium"
                    >
                        <FaGoogle className="text-white text-xl" />
                        Sign in with Google
                    </Button>

                    {/* Sign Up Link */}
                    <p className="text-center text-sm text-gray-600 mt-8">
                        Don&apos;t have an account?{" "}
                        <a href="/register" className="text-[#0F766E] hover:underline font-semibold">
                            Sign up
                        </a>
                    </p>
                </div>
            </Card>

            <ToastContainer />
        </div>
    );
}