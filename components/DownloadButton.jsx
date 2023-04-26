import Link from "next/link";
import Image from "next/image";
import React from "react";
// import  { saveAs } from "file-saver"; // NOTE: da disinstallare

import download from "@/public/icons/Download.svg";


function DownloadButton({text, file}) {
  const handleDownload = () => {
    const url = file;
    window.open(url);
  };

  return (
    <button onClick={handleDownload} className="py-5 text-3xl flex flex-row items-center cursor-pointer uppercase italic">
      <p>{text}</p>
      <Image src={download} alt="" className="h-5 w-5 m-5" />
    </button>
  );
}

export default DownloadButton;