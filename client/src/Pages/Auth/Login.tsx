import AuthLayout from "@/Components/Layouts/AuthLayout";
import React from "react";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Button } from "@/Components/ui/button";
import ApplicationLogo from "@/Components/Global/ApplicationLogo";

export default function LoginPage() {
  return (
    <AuthLayout>
      <form
        action=""
        className="bg-white w-[22em] rounded-lg grid grid-cols-1 justify-between items-center px-6"
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
            <div className="space-y-1">
              <Label htmlFor="email" className="text-zinc-700">
                Email Address*
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter your email address"
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
