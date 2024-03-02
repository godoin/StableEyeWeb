import Image from "@/components/global-components/image";
import UserLayout from "@/components/layouts/user-layout";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Classify() {
  return (
    <UserLayout>
      <div className="p-8 flex gap-32 justify-between">
        <main className="flex-none h-fit w-4/12 rounded-lg bg-white border border-zinc-300">
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
        </main>
        <aside className="flex-1 grid grid-cols-1 space-y-4">
          <div className="bg-white rounded-lg border-zinc-300">
            <section className="h-8 px-5 py-6 flex border-b border-zinc-300 items-center justify-between">
              <span className="text-regular font-medium">
                Convolutional Neural Networks
              </span>
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
            <div className="p-4 space-y-4">
              <article className="bg-zinc-300 text-zinc-900 rounded-lg p-4">
                <span className="font-semibold">Model Description</span>
                <p className="font-medium">
                  Trained for 32 epochs, this CNN classifier consists of three
                  convolutional layers and achieved training (98%) accuracy and
                  testing (95%) accuracy utilizing BCELoss for optimized binary
                  classification.
                </p>
              </article>
              <form action="" className="flex gap-4 min-w-full">
                <section className="flex-1 border border-zinc-300 rounded-lg p-4 space-y-4">
                  <hgroup className="space-y-0">
                    <span className="semibold">Classification Confidence</span>
                    <p className="font-medium">
                      Please load an image to start classifying
                    </p>
                  </hgroup>
                  <div className="flex gap-4 w-full">
                    <output className="flex-1 rounded-lg p-4 bg-zinc-300 border border-zinc-500 grid grid-cols-1 text-center items-center">
                      <span>Real Image</span>
                      <span className="text-2xl font-semibold">-</span>
                    </output>
                    <output className="flex-1 rounded-lg p-4 bg-zinc-300 border border-zinc-500 grid grid-cols-1 text-center items-center">
                      <span>Real Image</span>
                      <span className="text-2xl font-semibold">-</span>
                    </output>
                  </div>
                </section>
                <section className="flex-none grid grid-cols-1 justify-between space-y-4 w-64 p-4 border border-zinc-300 rounded-lg">
                  <span>Is the model correct?</span>
                  <div className="grid grid-cols-1 justify-center items-center">
                    <Button
                      variant="secondary"
                      className="cursor-not-allowed bg-zinc-300 hover:bg-zinc-300"
                    >
                      Yes
                    </Button>
                    <Button
                      variant="secondary"
                      className="cursor-not-allowed bg-zinc-300 hover:bg-zinc-300"
                    >
                      No
                    </Button>
                  </div>
                </section>
              </form>
            </div>
          </div>
          <div className="bg-white rounded-lg border-zinc-300">
            <section className="h-8 px-5 py-6 flex border-b border-zinc-300 items-center justify-between">
              <span className="text-regular font-medium">
                Support Vector Machines
              </span>
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
            <div className="p-4 space-y-4">
              <article className="bg-zinc-300 text-zinc-900 rounded-lg p-4">
                <span className="font-semibold">Model Description</span>
                <p className="font-medium">
                  Trained with a linear kernel, this SVM classifier achieved an
                  accuracy of 98% on the training set and 95% on the test set.
                </p>
              </article>
              <form action="" className="flex gap-4 min-w-full">
                <section className="flex-1 border border-zinc-300 rounded-lg p-4 space-y-4">
                  <hgroup className="space-y-0">
                    <span className="semibold">Classification Confidence</span>
                    <p className="font-medium">
                      Please load an image to start classifying
                    </p>
                  </hgroup>
                  <div className="flex gap-4 w-full">
                    <output className="flex-1 rounded-lg p-4 bg-zinc-300 border border-zinc-500 grid grid-cols-1 text-center items-center">
                      <span>Real Image</span>
                      <span className="text-2xl font-semibold">-</span>
                    </output>
                    <output className="flex-1 rounded-lg p-4 bg-zinc-300 border border-zinc-500 grid grid-cols-1 text-center items-center">
                      <span>Real Image</span>
                      <span className="text-2xl font-semibold">-</span>
                    </output>
                  </div>
                </section>
                <section className="flex-none grid grid-cols-1 justify-between space-y-4 w-64 p-4 border border-zinc-300 rounded-lg">
                  <span>Is the model correct?</span>
                  <div className="grid grid-cols-1 justify-center items-center">
                    <Button
                      variant="secondary"
                      className="cursor-not-allowed bg-zinc-300 hover:bg-zinc-300"
                    >
                      Yes
                    </Button>
                    <Button
                      variant="secondary"
                      className="cursor-not-allowed bg-zinc-300 hover:bg-zinc-300"
                    >
                      No
                    </Button>
                  </div>
                </section>
              </form>
            </div>
          </div>
        </aside>
      </div>
    </UserLayout>
  );
}
