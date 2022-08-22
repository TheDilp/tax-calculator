import React from "react";
import CalculatorCard from "./components/CalculatorCard";

export default function App() {
  return (
    <div
      id="App"
      className="sm:w-screen h-screen flex justify-center items-center px-4 lg:px-0 bg-slate-50"
    >
      <CalculatorCard />
    </div>
  );
}
