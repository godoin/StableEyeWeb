import React from "react";
import Image from "@/Components/Global/Image";

export default function RecordZone({ onClick }: any) {
  return (
    <div className="flex items-center justify-center w-full" onClick={onClick}>
      <label
        htmlFor="recordzone-webcam"
        className="flex flex-col items-center justify-center w-full p-2 border-2 border-violet-300 border-dashed rounded-lg cursor-pointer bg-violet-200 hover:bg-violet-100 dark:bg-violet-700 dark:hover:bg-violet-600 dark:border-violet-600 dark:hover:bordviolet-500"
      >
        <div className="flex flex-col items-center justify-center gap-4 pt-5 pb-6">
          <Image
            src="assets/images/icons/record_image.png"
            alt="Upload Image"
            className="h-5 w-6"
          />
          <p className="mb-2 text-sm text-violet-500 dark:text-violet-400">
            Open your webcam and capture an image
          </p>
        </div>
        <input id="recordzone-webcam" type="file" className="hidden" />
      </label>
    </div>
  );
}
