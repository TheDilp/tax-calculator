import React from "react";

export default function TabButton({ title, onClick, selected }) {
  return (
    <div
      className={`w-1/2 ${
        selected ? "bg-blue-300 border-blue-500 " : ""
      }  h-full flex justify-center items-center py-2 border-b-2 cursor-pointer transition-all`}
      onClick={onClick}
    >
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
  );
}
