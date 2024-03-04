import React from "react";
import { Skeleton } from "@/Components/ui/skeleton";

export default function InputImageLoading() {
  return (
    <>
      <section className="h-8 px-5 py-6 flex border-b border-zinc-300 items-center justify-between">
        <Skeleton className="h-5 w-16" />
        <Skeleton className="h-8 w-4" />
      </section>
      <div className="bg-violet-100 pt-6 pb-8 px-4 space-y-3">
        <Skeleton className="h-32 py-8 px-6 bg-violet-200 rounded-lg flex flex-col items-center justify-center text-center gap-3" />
        <Skeleton className="h-32 py-8 px-6 bg-violet-200 rounded-lg flex flex-col items-center justify-center text-center gap-3" />
        <div className="h-32 py-8 px-6 flex flex-col sm:flex-row items-center justify-between text-center gap-3">
          <Skeleton className="bg-zinc-300 h-20 w-28" />
          <Skeleton className="bg-zinc-300 h-20 w-28" />
        </div>
        <div className="flex justify-center items-center">
          <Skeleton className="bg-violet-200 h-8 w-4/5" />
        </div>
      </div>
    </>
  );
}
