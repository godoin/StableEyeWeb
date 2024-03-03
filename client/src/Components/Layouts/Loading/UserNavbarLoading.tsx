import React from "react";
import ApplicationLogo from "../../Global/ApplicationLogo";
import { Skeleton } from "@/Components/ui/skeleton";

export default function UserNavbarLoading() {
  return (
    <div className="fixed top-0 left-0 flex justify-between items-center h-14 border-b border-zinc-500 bg-white px-2 min-w-full">
      <div className="w-full flex gap-8 items-center">
        <ApplicationLogo />
        <div className="hidden md:flex gap-8 text-sm">
          {/* <Skeleton className="h-8 w-96" /> */}
        </div>
      </div>
      <div className="flex gap-3">
        <div className="flex gap-3 items-center">
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-8 w-8" />
          <Skeleton className="h-8 w-8" />
        </div>
        <div className="h-14 px-2 py-3 flex items-center border-x border-zinc-500 cursor-pointer">
          <Skeleton className="h-10 w-10 rounded-full" />
        </div>
      </div>
    </div>
  );
}
