import Image from "@/Components/Global/Image";
import { Button } from "@/Components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet";
import ConvDetails from "./Sheets/ConvDetails";
import { useEffect, useState } from "react";
import ModelLoading from "./Loading/ModelLoading";
import * as tf from "@tensorflow/tfjs";

// import UploadsFolder from "../../../../assets/uploads/";

export default function ConvolutionalNetworks() {
  const [model, setModel] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [classificationResult, setClassificationResult] = useState(null);

  useEffect(() => {
    async function loadModel() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const loadedModel = await tf.loadLayersModel("/client/models/");
      } catch (error) {
        console.error("Error loading the model:", error);
      } finally {
        setIsLoading(false);
      }
    }
    return () => {};
  }, []);

  return isLoading ? (
    <ModelLoading />
  ) : (
    <div className="bg-white rounded-lg border border-zinc-300">
      <section className="h-8 px-4 py-6 flex border-b border-zinc-300 items-center justify-between">
        <span className="text-regular font-medium">
          Convolutional Neural Networks
        </span>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost" size="icon">
              <Image
                src="assets/images/icons/ellipsis-vertical-solid.svg"
                alt="Dropdown"
                className="h-4"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Rerun</DropdownMenuItem>
            <DropdownMenuItem>
              <Sheet>
                <SheetTrigger onClick={(e) => e.stopPropagation()}>
                  View Details
                </SheetTrigger>
                <SheetContent className="w-3/5">
                  <ConvDetails />
                </SheetContent>
              </Sheet>
            </DropdownMenuItem>
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
        <form action="" className="flex flex-col lg:flex-row gap-4">
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
          <section className="flex w-full lg:flex-none lg:w-56 grid grid-cols-1 justify-between lg:space-y-4 p-4 gap-2 border border-zinc-300 rounded-lg">
            <span>Is the model correct?</span>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-0 justify-center items-center">
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
  );
}
