import React, { Children } from "react";
import UserNavBar from "./Inc/UserNavbar";
import { PropsWithChildren } from "react";

export default function UserLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative min-h-screen min-w-screen overflow-hidden">
      <UserNavBar />
      <div
        className="mt-14 bg-zinc-200"
        style={{ minHeight: `calc(100vh - 2em)` }}
      >
        {children}
      </div>
    </div>
  );
}
