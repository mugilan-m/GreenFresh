"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Product } from ".";

function OrderSummary({ data }: { data: Product[] }) {  
    const cartData = data;
    console.log("order summary cartData->",cartData);
    const [SubTotal, setSubTotal] = useState<string | null>(null);

    useEffect(() => {
      if (typeof window !== "undefined") {
        const storedSubTotal = localStorage.getItem("SubTotal");
        setSubTotal(storedSubTotal);
      }
    }, []);

  return (
    <div>
      <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
        <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
          <p className="text-xl font-semibold text-gray-900 dark:text-white">
            Order summary
          </p>

          <div className="space-y-4">
            <div className="space-y-2">
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Original price
                </dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">
                ₹
                {parseInt((SubTotal ?? "0").toString(),10)}
                </dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Savings
                </dt>
                <dd className="text-base font-medium text-green-600">
                  -₹299.00
                </dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Store Pickup
                </dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">
                ₹99
                </dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Tax
                </dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">
                  $799
                </dd>
              </dl>
            </div>

            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
              <dt className="text-base font-bold text-gray-900 dark:text-white">
                Total
              </dt>
              <dd className="text-base font-bold text-gray-900 dark:text-white">
              ₹8,191.00
              </dd>
            </dl>
          </div>

          <Link
            href="/checkout"
            className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Proceed to Checkout
          </Link>

          <div className="flex items-center justify-center gap-2">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              {" "}
              or{" "}
            </span>
            <Link
              href="/"
              title=""
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
            >
              Continue Shopping
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="space-y-4  rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
          <div>
            <label
              htmlFor="voucher"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              {" "}
              Do you have a voucher or gift card?{" "}
            </label>
            <input
              type="text"
              id="voucher"
             
              className="block  rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
              placeholder=""
              required
            />
          </div>
          <button
            type="submit"
            className="flex  items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Apply Code
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
