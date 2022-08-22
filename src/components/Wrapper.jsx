import React from "react";
import IncomeProvider from "../contexts/IncomeContext";
import Footer from "./Footer/Footer";
import InputsWrapper from "./Inputs/InputsWrapper";
import ResultsWrapper from "./Results/ResultsWrapper";

export default function Wrapper() {
  return (
    <div className="sm:w-full lg:w-1/2 flex flex-row flex-wrap content-start shadow-md rounded-sm">
      <div className="w-full h-10 pb-10 border-b-2">
        <h1 className="text-3xl font-semibold text-center">
          Income Tax Calculator
        </h1>
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
