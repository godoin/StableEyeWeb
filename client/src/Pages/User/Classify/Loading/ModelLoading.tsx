import React from "react";
import { Skeleton } from "@/Components/ui/skeleton";

export default function ModelLoading() {
  return (
    <div className="bg-white rounded-lg border border-zinc-300">
      <section className="h-8 px-5 py-6 flex border-b border-zinc-300 items-center justify-between">
        <Skeleton className="h-8 w-24" />
        <Skeleton className="h-8 w-4" />
      </section>
      <div className="p-4 space-y-4">
        <Skeleton className="h-24 w-full" />
        <div className="flex flex-col lg:flex-row gap-4">
          <Skeleton className="flex-1 h-44" />
          <Skeleton className="flex h-44 w-full lg:flex-none lg:w-56" />
        </div>
      </div>
    </div>
  );
}
