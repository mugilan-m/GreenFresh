"use client";
import React from "react";

function error() {
  return (
    <div className="container mx-auto  m-20 ">
      <h1 className="font-semibold text-3xl  mb-5  ">
        {" "}
        Checkout is currently unavailable.{" "}
      </h1>

      <button
        type="button"
        data-testid="ChevronButton"
        className="gap-2 bg-blue-600 rounded-2xl items-center justify-center text-sm leading-5 font-bold capitalize transition-colors ford-component-btn h-10 !outline-none select-none disabled:pointer-events-none disabled:text-ford-text-subtle text-white disabled:bg-neutral-200 hover:bg-ford-stroke-underline-active bg-ford-fill-interactive py-2.5 inline-flex w-fit px-4 pr-6"
      >
        <span data-testid="ChevronText">
          <div className="grid-cols-[24px_1fr] grid content-center items-center font-bold">
            <div className="flex h-6 items-center justify-start">
              <svg
                fill="none"
                height="16"
                role="img"
                viewBox="0 0 9 16"
                width="9"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-180 undefined"
                data-testid="Chevron-Icon-Left-sm"
              >
                <title>Chevron Left Icon</title>
                <path
                  d="M8.8 8L1.6 0.800003L0.760002 1.64L7.12 8L0.760002 14.36L1.6 15.2L8.8 8Z"
                  data-testid="SM"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <span className="truncate" data-testid="ChevronText__content">
              Back
            </span>
          </div>
        </span>
      </button>
    </div>
  );
}

export default error;
