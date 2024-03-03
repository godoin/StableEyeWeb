import Image from "@/Components/Global/Image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import InputImageLoading from "./Loading/InputImageLoading";
import FileDropZone from "@/Components/User/Classify/FileDropZone";
import RecordZone from "@/Components/User/Classify/RecordZone";

export default function InputImage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading ? (
        <InputImageLoading />
      ) : (
        <>
          <section className="h-8 px-5 py-6 flex border-b border-zinc-300 items-center justify-between">
            <span className="text-regular font-medium">Input Image*</span>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Image
                  src="assets/images/icons/ellipsis-vertical-solid.svg"
                  alt="Dropdown"
                  className="h-4"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Refresh</DropdownMenuItem>
                <DropdownMenuItem>Help</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </section>
          <div className="bg-violet-100 pt-6 pb-8 px-4 space-y-4">
            <FileDropZone />
            <RecordZone />
            <section className="grid text-center items-center justify-center">
              <Image
                src="assets/images/resize_image.png"
                alt="Resized to 256 by 256"
              />
              <p className="font-semibold text-violet-700">
                Images will be resized to 256 x 256
              </p>
            </section>
          </div>
        </>
      )}
    </>
  );
}
