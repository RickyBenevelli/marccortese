import Link from "next/link";
import React from "react";
// import  { saveAs } from "file-saver"; // NOTE: da disinstallare

const filePath = "/public/placeholder.png"

function DownloadButton() {
    // const saveFile = () => {
    //     saveAs(
    //       "filePath",
    //       "example.png"
    //     );
    //   };
  return (
    <div className="py-5 text-2xl">Save File</div>
  );
}

export default DownloadButton;