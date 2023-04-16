import Link from "next/link";
import Image from "next/image";
import React from "react";
// import  { saveAs } from "file-saver"; // NOTE: da disinstallare

import download from "@/public/icons/Download.svg";

const filePath = "/public/placeholder.png"

function DownloadButton() {
    // const saveFile = () => {
    //     saveAs(
    //       "filePath",
    //       "example.png"
    //     );
    //   };
  return (
    <div className="py-5 text-2xl flex flex-row items-center cursor-pointer">
      <p>Save File</p>
      <Image src={download} alt="" className="h-5 w-5 m-5" />
    </div>
  );
}

export default DownloadButton;