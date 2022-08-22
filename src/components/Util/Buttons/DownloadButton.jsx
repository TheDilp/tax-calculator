import React from "react";
import DownloadIcon from "../Icons/DownloadIcon";

export default function DownloadButton() {
  return (
    <button className="ml-auto flex lg:hidden items-center py-1 px-4 rounded-md border-2 border-blue-300 text-blue-500 hover:bg-blue-500 hover:text-white">
      Download <DownloadIcon />
    </button>
  );
}
