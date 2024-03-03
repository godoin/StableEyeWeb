import React from "react";
import { PropsWithChildren } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative pt-12 bg-zinc-200 min-h-screen min-w-screen flex flex-col gap-4 items-center">
      {children}
    </div>
  );
}
