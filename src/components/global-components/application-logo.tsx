import React from "react";
import Image from "./image";

export default function ApplicationLogo() {
  return (
    <a href="/">
      <Image
        src="assets/images/logo.png"
        alt="StableEye Logo"
        className="h-14"
      />
    </a>
  );
}
