import React from "react";
import Image from "@/Components/Global/Image";

export default function ResizeNotif() {
  return (
    <section className="grid text-center items-center justify-center">
      <Image src="assets/images/resize_image.png" alt="Resized to 256 by 256" />
      <p className="font-semibold text-violet-700">
        Images will be resized to 256 x 256
      </p>
    </section>
  );
}
