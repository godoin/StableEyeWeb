import GuestNavbar from "./inc/GuestNavbar";
import { PropsWithChildren } from "react";

export default function GuestLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen min-w-screen">
      <GuestNavbar />
      <div className="">{children}</div>
    </div>
  );
}
