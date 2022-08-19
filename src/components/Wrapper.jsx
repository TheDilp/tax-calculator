import React from "react";
import Inputs from "./Inputs";
import Results from "./Results/Results";

export default function Wrapper() {
  return (
    <div className="w-1/2 flex flex-row flex-wrap content-start shadow-md rounded-sm h-96">
      <div className="w-full h-10 border-b-2">
        <h1 className="text-3xl font-semibold text-center">
          Income Tax Calculator
        </h1>
      </div>
      <div className="w-full flex flex-row h-86">
        <Inputs />
        <Results />
      </div>
    </div>
  );
}
