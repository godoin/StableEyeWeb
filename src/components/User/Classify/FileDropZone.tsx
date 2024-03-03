import Image from "@/Components/Global/Image";
import React from "react";

export default function FileDropZone() {
  return (
    <div className="flex items-center justify-center w-full">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full p-2 border-2 border-violet-300 border-dashed rounded-lg cursor-pointer bg-violet-200 dark:hover:bg-violet-800 dark:bg-violet-700 hover:bg-violet-100 dark:border-violet-600 dark:hover:border-violet-500 dark:hover:bg-violet-600"
      >
        <div className="flex flex-col items-center gap-4 justify-center pt-5 pb-6">
          <Image
            src="assets/images/icons/upload_image.png"
            alt="Upload Image"
            className="h-5.5 w-4"
          />
          <div className="grid w-full text-center">
            <p className="text-sm text-violet-500 dark:text-violet-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-violet-500 dark:text-violet-400">
              PNG, JPG or JPEG (MAX. 800x400px)
            </p>
          </div>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
      </label>
    </div>
  );
}
