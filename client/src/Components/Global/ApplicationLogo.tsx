import React from "react";
import Image from "./Image";

interface ApplicationLogoProps {
  className?: string;
}

export default function ApplicationLogo(props: ApplicationLogoProps) {
  return (
    <a
      href="/"
      className={`flex items-center text-center justify-center gap-4 + ${props.className}`}
    >
      <Image
        src="assets/images/logo.png"
        alt="StableEye Logo"
        className="h-14"
      />
      <span className="flex md:hidden font-semibold text-violet-700 text-xl">
        StableEye
      </span>
    </a>
  );
}
