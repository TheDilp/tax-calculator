import React, { useState } from "react";
import IncomeProvider from "../contexts/IncomeContext";
import Footer from "./Footer/Footer";
import InputsWrapper from "./Inputs/InputsWrapper";
import ResultsWrapper from "./Results/ResultsWrapper";

export default function Wrapper() {
  const [page, setPage] = useState(0);
  return (
    <div className="sm:w-full lg:w-1/2 flex flex-row flex-wrap content-start shadow-md rounded-sm">
      <div className="w-full h-10 pb-10 ">
        <h1 className="hidden lg:block text-3xl font-semibold text-center border-b-2">
          Income Tax Calculator
        </h1>
        <div className="lg:hidden w-full flex items-center">
          <div
            className={`w-1/2 ${
              page === 0 ? "bg-blue-300 border-b-2" : ""
            }  h-full flex justify-center items-center py-2 border-blue-500 cursor-pointer transition-all`}
            onClick={() => setPage(0)}
          >
            <h3 className="text-xl font-bold">Income</h3>
          </div>
          <div
            className={`w-1/2 ${
              page === 1 ? "bg-blue-300 border-b-2" : ""
            }   h-full flex justify-center items-center py-2 border-blue-500 cursor-pointer transition-all`}
            onClick={() => setPage(1)}
          >
            <h3 className="text-xl font-bold">Income Details</h3>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row h-86">
        <IncomeProvider>
          {page === 0 && <InputsWrapper />}
          {page === 1 && <ResultsWrapper />}
        </IncomeProvider>
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
