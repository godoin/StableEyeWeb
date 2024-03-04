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
import { Button } from "@/Components/ui/button";
import axios from "axios";
import ResizeNotif from "@/Components/User/Classify/ResizeNotif";
import WebcamComponent from "@/Components/Global/WebcamComponent";

export default function InputImage() {
  const [isLoading, setIsLoading] = useState(true);
  const [uploadedImagePath, setUploadedImagePath] = useState("");
  const [showWebcamPreview, setShowWebcamPreview] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleFileUpload = async (event: any) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        "http://localhost:3002/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const { imagePath } = response.data;
      const filename = imagePath.split("/").pop();
      const imageUrl = `assets/uploads/${filename}`;

      setUploadedImagePath(imageUrl);
      console.log("Uploaded image path:", imageUrl);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const onHandleRecordZoneClick = () => {
    setShowWebcamPreview(true);
  };

  return (
    <>
      {isLoading ? (
        <InputImageLoading />
      ) : (
        <>
          <section className="h-8 px-4 py-6 flex border-b border-zinc-300 items-center justify-between">
            <span className="text-regular font-medium">Input Image*</span>
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
                <DropdownMenuItem>Refresh</DropdownMenuItem>
                <DropdownMenuItem>Help</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </section>
          <div className="bg-violet-100 pt-6 pb-8 px-4 space-y-4">
            {showWebcamPreview ? (
              <div className="space-y-2">
                <WebcamComponent />
                <Button
                  variant="default"
                  className="w-full bg-violet-700 hover:bg-violet-400"
                >
                  Capture
                </Button>
              </div>
            ) : uploadedImagePath ? (
              <div className="space-y-2">
                <FileDropZone
                  uploadedImagePath={uploadedImagePath}
                  handleFileUpload={handleFileUpload}
                />
                <Button
                  variant="default"
                  className="w-full bg-violet-700 hover:bg-violet-400"
                >
                  Classify Image
                </Button>
              </div>
            ) : (
              <div className="space-y-2">
                <FileDropZone
                  uploadedImagePath={uploadedImagePath}
                  handleFileUpload={handleFileUpload}
                />
                <RecordZone onClick={onHandleRecordZoneClick} />
                <ResizeNotif />
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
