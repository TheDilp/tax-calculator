import React from "react";

export default function ToggleButton({ title }) {
  return (
    <button className="shadow-sm rounded-lg p-2 w-1/2 text-lg border-slate-100 border-2 hover:text-blue-400 active:bg-blue-500 active:text-white active:shadow-none transition-colors">
      {title}
    </button>
  );
}
