"use client";


import { authClient, signUp } from "@/lib/auth-client";
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
import { toast, ToastContainer } from "react-toastify";

export default function RegisterPage() {
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        

        try {
            const { data, error } = await signUp.email({
                name,
                email,
                password,
                image,
            });
            console.log(data,error)

            if (error) {
                toast.error(error.message || "Signup failed");
                return;
            }

            if (data) {
                toast.success("Signup successful!");
                setTimeout(() => {
                    router.push("/");
                }, 800);
            }
        } catch (err) {
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-[#1E2937] flex items-center justify-center px-4 py-12 ">
            <Card className="w-full max-w-md shadow-2xl border-0 overflow-hidden">
                
                {/* Dark Header */}
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
                    <h1 className="text-3xl font-bold">Create Account</h1>
                    <p className="text-gray-300 mt-2">Join StudyRoom today</p>
                </div>

                {/* Form Area */}
                <div className="p-8 bg-white">
                    <Form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                        
                        <TextField isRequired name="name" type="text">
                            <Label className="text-gray-800 font-medium">Full Name</Label>
                            <Input 
                                placeholder="Enter your full name" 
                                className="mt-1 border-gray-300 focus:border-[#14b8a6]"
                            />
                            <FieldError />
                        </TextField>

                        <TextField isRequired name="image" type="url">
                            <Label className="text-gray-800 font-medium">Profile Image URL (Optional)</Label>
                            <Input 
                                placeholder="https://example.com/your-image.jpg" 
                                className="mt-1 border-gray-300 focus:border-[#14b8a6]"
                            />
                            <FieldError />
                        </TextField>

                        <TextField isRequired name="email" type="email">
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
                                if (!/[A-Z]/.test(value)) return "Must contain uppercase letter";
                                if (!/[0-9]/.test(value)) return "Must contain a number";
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
                                Create Account
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

                    <p className="text-center text-sm text-gray-600 mt-8">
                        Already have an account?{" "}
                        <a href="/singinPage" className="text-[#14b8a6] hover:underline font-semibold">
                            Sign in
                        </a>
                    </p>
                </div>
            </Card>
            <ToastContainer/>
        </div>
    );
}