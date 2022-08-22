import React, { useState } from "react";
import IncomeProvider from "../contexts/IncomeContext";
import Footer from "./Footer/Footer";
import InputsWrapper from "./Inputs/InputsWrapper";
import ResultsWrapper from "./Results/ResultsWrapper";
import CalcButton from "./Util/CalcButton";
import CalculatorTitle from "./Util/CalculatorTitle";
import TabButton from "./Util/TabButton";

export default function Wrapper() {
  const [page, setPage] = useState(0);

  return (
    <div className="w-full lg:w-1/2 flex flex-row flex-wrap content-start shadow-md rounded-md overflow-hidden">
      <div className="w-full h-10 pb-10">
        <CalculatorTitle />
        <div className="lg:hidden w-full flex items-center">
          <TabButton
            title="Income"
            onClick={() => setPage(0)}
            selected={page === 0}
          />
          <TabButton
            title="Income Results"
            onClick={() => setPage(1)}
            selected={page === 1}
          />
        </div>
      </div>
      <div className="w-full flex flex-row h-86">
        <IncomeProvider>
          <div
            className={`w-full lg:w-1/2 flex-wrap content-evenly lg:content-start  ${
              page === 1 ? "hidden lg:flex " : "flex"
            }`}
          >
            <InputsWrapper />
            <CalcButton onClick={() => setPage(1)} />
          </div>

          <div
            className={`w-full lg:w-1/2 flex-wrap content-evenly ${
              page === 0 ? "hidden lg:flex" : "flex"
            }`}
          >
            <ResultsWrapper />
          </div>
        </IncomeProvider>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
