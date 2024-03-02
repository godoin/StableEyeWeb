import React, { Children } from "react";
import UserNavBar from "../inc/user-navbar";
import { PropsWithChildren } from "react";

export default function UserLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative min-h-screen min-w-screen">
      <UserNavBar />
      <div className="mt-16 min-h-[calc(100vh - 16em)] bg-zinc-500">
        {children}
      </div>
    </div>
  );
}
