import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Logo from "../../assets/images/logo.png";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (email === "admin@gmail.com" && password === "123123") {
            localStorage.setItem("role", "admin");
            navigate("/admin");
        }
        else if (email === "agent@gmail.com" && password === "abc123") {
            localStorage.setItem("role", "agent");
            navigate("/agent");
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Email or Password is wrong",
            });
        }
    };

    return (
        <div className="w-screen h-screen flex items-center justify-center">

            <div className="absolute inset-0 bg-gradient-to-br from-[#eaf4ff] via-[#f5ffe5] to-[#e0f0ff]"></div>

            <div className="relative flex flex-col items-center">

                <img src={Logo} alt="Logo" className="w-40 mb-7" />

                <div className="bg-white w-[430px] p-10 rounded-[20px] shadow-lg border border-gray-200">

                    <h1 className="text-sky-500 text-3xl font-semibold font-['Poppins'] leading-[61.95px] tracking-tight mb-1">Log In</h1>
                    <p className="justify-center text-Input-field-Text-Color text-base font-normal font-['Poppins'] leading-normal tracking-tight mb-5">Please enter your login credentials to access your account</p>

                    <form onSubmit={handleLogin} className="flex flex-col gap-4">

                        <div>
                            <Label htmlFor="email" className="mb-1 block text-gray-700">Email</Label>
                            <TextInput
                                id="email"
                                type="email"
                                placeholder="Enter email"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <Label htmlFor="password" className="text-gray-700">Password</Label>
                                <a href="#" className="text-blue-600 text-sm hover:underline">
                                    Forgot Password?
                                </a>
                            </div>
                            <TextInput
                                id="password"
                                type="password"
                                placeholder="Enter password"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember" className="text-sm">Remember Me</Label>
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-base font-medium font-['Poppins']"
                        >
                            Login
                        </Button>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;
