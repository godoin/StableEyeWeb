import AuthLayout from "@/Components/Layouts/AuthLayout";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Button } from "@/Components/ui/button";
import ApplicationLogo from "@/Components/Global/ApplicationLogo";
import Axios from "axios";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const navigateTo = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3002/login", {
      Email: email,
      Password: password,
    })
      .then((response) => {
        if (response.data.error_message) {
          setLoginStatus("Error: Credentials do not match. Please try again.");
          setTimeout(() => {
            setLoginStatus("");
          }, 4000);
        } else {
          console.log("Login successful");
          navigateTo("/classify");
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };

  return (
    <AuthLayout>
      <form
        action=""
        className="bg-white w-[22em] rounded-lg grid grid-cols-1 justify-between items-center px-6 py-6"
        style={{ minHeight: `calc(100vh - 8em)` }}
      >
        <div className="space-y-12">
          <div className="flex flex-col gap-8 justify-start items-start">
            <ApplicationLogo />
            <div className="grid gap-2">
              <span className="text-5xl font-bold text-violet-700">Login</span>
              <p className="text-zinc-500 text-lg font-medium">
                Please fill the form in order to continue.
              </p>
            </div>
          </div>
          <div className="space-y-2">
            {loginStatus && (
              <div className="p-2 flex items-center text-sm font-semibold bg-red-200 text-red-700 w-full h-16 rounded-sm">
                {loginStatus}
              </div>
            )}
            <div className="space-y-1">
              <Label htmlFor="email" className="text-zinc-700">
                Email Address*
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter your email address"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email" className="text-zinc-700">
                Password*
              </Label>
              <Input
                type="password"
                id="password"
                placeholder="Enter you password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>
            <div className="flex justify-end">
              <Button variant="link" className="text-violet-500 p-0">
                Forgot your password?
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <Button
              variant="default"
              type="submit"
              className="bg-violet-700 hover:bg-violet-500 w-full"
              onClick={loginUser}
            >
              Login
            </Button>
            <div className="text-zinc-500 w-full text-center w-4/5 flex gap-2 items-center justify-center">
              <p className="text-sm">Don't have an account?</p>
              <a href="" className=" text-violet-500 text-sm hover:underline">
                Register
              </a>
            </div>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
}
