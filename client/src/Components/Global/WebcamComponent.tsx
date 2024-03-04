// WebcamComponent.js
import React, { useRef } from "react";
import Webcam from "react-webcam";

const WebcamComponent = ({ onCapture }: any) => {
  // TODO: Implement capture image and save image
  const webcamRef = useRef(null);

  return <Webcam className="rounded-lg" audio={false} ref={webcamRef} />;
};

export default WebcamComponent;
