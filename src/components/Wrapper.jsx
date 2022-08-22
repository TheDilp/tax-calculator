import React from "react";
import IncomeProvider from "../contexts/IncomeContext";
import Footer from "./Footer/Footer";
import InputsWrapper from "./Inputs/InputsWrapper";
import ResultsWrapper from "./Results/ResultsWrapper";

export default function Wrapper() {
  return (
    <div className="sm:w-full lg:w-1/2 flex flex-row flex-wrap content-start shadow-md rounded-sm">
      <div className="w-full h-10 pb-10 ">
        <h1 className="hidden lg:block text-3xl font-semibold text-center border-b-2">
          Income Tax Calculator
        </h1>
        <span className="lg:hidden w-full h-10 flex items-center">
          <div className="w-1/2 bg-blue-300 border-r-2 h-full flex justify-center items-center">
            <h3 className="text-xl font-bold">Income</h3>
          </div>
          <div className="w-1/2 h-full flex justify-center items-center">
            <h3 className="text-xl font-bold">Income Details</h3>
          </div>
        </span>
      </div>
      <div className="w-full flex flex-row h-86">
        <IncomeProvider>
          <InputsWrapper />
          <ResultsWrapper />
        </IncomeProvider>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
