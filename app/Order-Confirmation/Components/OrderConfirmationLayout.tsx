"use client"
import { Skeleton } from '@heroui/react'
import React from 'react'

function OrderConfirmationLayout() {
  return (
    <div className="mx-auto container m-10 ">
    <h1 className="text-5xl font-bold "><Skeleton className="w-2/5 h-10 rounded-lg" /> </h1>

    <span className="text-xl m-2">
    <div>
        <div className="ml-2">
      <div className="flex gap-3 text-xl items-center">
        <Skeleton className="w-32 h-6 rounded-lg" />
        <Skeleton className="w-10 h-10 rounded-full" />
      </div>

      <div className="m-2">
        <Skeleton className="w-full h-4 rounded-lg" /> 
        <Skeleton className="w-1/2 h-4 rounded-lg mt-2" /> 
        <Skeleton className="w-1/4 h-4 rounded-lg mt-2" /> 
   </div></div>
    </div>
    </span>
    <div>
      <section className="py-4 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full flex-col justify-start items-center lg:gap-12 gap-8 inline-flex">
            <div className="w-full flex-col justify-start items-center gap-8 flex">
              {/* Order Details Heading */}
              <Skeleton className="w-48 h-8 rounded-lg" />

              <div className="w-full flex-col justify-start items-start gap-5 flex">
                <div className="w-full flex-col justify-start items-start gap-5 inline-flex border border-gray-200 rounded-2xl lg:p-5 p-4">
                  {/* List Header (Item, Basic Price, Quantity, Total) */}
                  <ul className="w-full px-6 pb-4 border-b border-gray-200 justify-start items-center md:gap-8 gap-0 md:grid grid-cols-12 hidden">
                    <li className="lg:col-span-4 md:col-span-5 col-span-12 text-gray-900 text-xl font-medium leading-8">
                      <Skeleton className="w-24 h-6 rounded-lg" />
                    </li>
                    <div className="lg:col-span-8 md:col-span-7 col-span-12 w-full justify-start items-center gap-8 flex">
                      <li className="col-span-2 w-full text-center text-gray-900 text-xl font-medium leading-8">
                        <Skeleton className="w-16 h-6 rounded-lg" />
                      </li>
                      <li className="col-span-2 w-full text-center text-gray-900 text-xl font-medium leading-8">
                        <Skeleton className="w-16 h-6 rounded-lg" />
                      </li>
                      <li className="col-span-2 w-full text-center text-gray-900 text-xl font-medium leading-8">
                        <Skeleton className="w-16 h-6 rounded-lg" />
                      </li>
                    </div>
                  </ul>

                  {/* Simulate a few item rows */}
                  {[1, 2, 3].map((index) => (
                    <div
                      className="w-full flex flex-col gap-5"
                      key={index}
                    >
                      <div className="grid grid-cols-12 w-full px-6 pb-5 justify-start items-center md:gap-8 gap-3 border-b border-gray-300">
                        {/* Item Image and Details */}
                        <div className="lg:col-span-4 md:col-span-5 col-span-12 justify-start items-center md:gap-6 gap-3 md:pb-5 flex md:flex-row flex-col">
                          <Skeleton className="w-[100px] h-[100px] rounded-lg" />
                          <div className="flex-col justify-start md:items-start items-center gap-1.5 inline-flex">
                            <Skeleton className="w-32 h-6 rounded-lg" />
                            {/* <Skeleton className="w-48 h-4 rounded-lg" /> */} {/* Description */}
                          </div>
                        </div>

                        {/* Price, Quantity, Total */}
                        <div className="lg:col-span-8 md:col-span-7 col-span-12 w-full justify-start items-center md:gap-8 gap-3 flex md:flex-row flex-col">
                          <h5 className="md:col-span-2 col-span-12 w-full text-center text-gray-500 text-lg font-medium leading-8">
                            <Skeleton className="w-16 h-6 rounded-lg" />
                          </h5>
                          <h5 className="md:col-span-2 col-span-12 w-full flex justify-center text-center text-gray-900 text-lg font-medium leading-8">
                            <Skeleton className="w-8 h-6 rounded-lg" />
                          </h5>
                          <h5 className="md:col-span-2 col-span-12 w-full flex justify-center text-center text-gray-900 text-lg font-bold leading-8">
                            <Skeleton className="w-16 h-6 rounded-lg" />
                          </h5>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Buttons (Track My Order, Continue Shopping) */}
              <div className="w-full justify-start items-center gap-5 flex sm:flex-row flex-col">
                <Skeleton className="w-40 h-10 rounded-xl" />
                <Skeleton className="w-40 h-10 rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>    <div>
    </div>
   
  </div>

  )
}

export default OrderConfirmationLayout