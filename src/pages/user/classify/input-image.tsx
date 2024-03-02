import Image from "@/components/global-components/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function InputImage() {
  return (
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
        <section className="py-8 px-6 bg-violet-200 hover:bg-violet-300 cursor-pointer rounded-lg flex flex-col items-center justify-center text-center gap-3">
          <Image
            src="assets/images/icons/upload_image.png"
            alt="Upload Image"
            className="h-5.5 w-4"
          />
          <p className="text-violet-700 font-semibold">
            Choose images from your files or <br /> drag and drop here.
          </p>
        </section>
        <section className="py-8 px-6 bg-violet-200 hover:bg-violet-300 cursor-pointer rounded-lg flex flex-col items-center justify-center text-center gap-3">
          <Image
            src="assets/images/icons/upload_image.png"
            alt="Upload Image"
            className="h-5.5 w-4"
          />
          <p className="text-violet-700 font-semibold">
            Open your webcam and record a <br /> picture here.
          </p>
        </section>
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
  );
}
