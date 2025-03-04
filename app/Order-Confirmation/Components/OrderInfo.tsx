"use client";
import { useProductStore } from "@/app/store";
import Link from "next/link";
import React from "react";
import Image from "next/image";

function OrderInfo() {
  const { addtocart } = useProductStore((state) => state);
  console.log("addtocart", addtocart);
  return (
    <div>
                  <section className="py-4 relative">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
              <div className="w-full flex-col justify-start items-center lg:gap-12 gap-8 inline-flex">
                <div className="w-full flex-col justify-start items-center gap-8 flex">
                  <h3 className="w-full md:text-start text-center text-gray-900 text-2xl font-bold font-manrope leading-9">
                    Order Details
                  </h3>
                  <div className="w-full flex-col justify-start items-start gap-5 flex">
                    <div className="w-full flex-col justify-start items-start gap-5 inline-flex border border-gray-200 rounded-2xl lg:p-5 p-4">
                      <ul className="w-full px-6 pb-4 border-b border-gray-200 justify-start items-center md:gap-8 gap-0 md:grid grid-cols-12 hidden">
                        <li className="lg:col-span-4 md:col-span-5 col-span-12 text-gray-900 text-xl font-medium leading-8">
                          Item
                        </li>
                        <div className="lg:col-span-8 md:col-span-7 col-span-12 w-full justify-start items-center gap-8 flex">
                          <li className="col-span-2 w-full text-center text-gray-900 text-xl font-medium leading-8">
                            Basic Price
                          </li>
                          <li className="col-span-2 w-full text-center text-gray-900 text-xl font-medium leading-8">
                            Quantity
                          </li>
                          <li className="col-span-2 w-full text-center text-gray-900 text-xl font-medium leading-8">
                            Total
                          </li>
                        </div>
                      </ul>

                      {addtocart.map((item, index) => {
    return (
        <div className="w-full flex flex-col gap-5" key={index}>
        <div className="grid grid-cols-12 w-full px-6 pb-5 justify-start items-center md:gap-8 gap-3 border-b border-gray-300">
          <div className="lg:col-span-4 md:col-span-5 col-span-12 justify-start items-center md:gap-6 gap-3 md:pb-5 flex md:flex-row flex-col">
            <Image
              className="w-[100px] h-[100px]"
              src={item.images[0]}
              alt="Story Book image"
              width={100} height={100}
            />
            <div className="flex-col justify-start md:items-start items-center gap-1.5 inline-flex">
              <h4 className="text-gray-900 text-xl font-medium leading-8">
                {item.title}
              </h4>
              {/* <h6 className="text-gray-500 text-base font-normal leading-7">
               {item.description}
              </h6> */}
            </div>
          </div>
          <div className="lg:col-span-8 md:col-span-7 col-span-12 w-full justify-start items-center md:gap-8 gap-3 flex md:flex-row flex-col">
            <h5 className="md:col-span-2 col-span-12 w-full text-center text-gray-500 text-lg font-medium leading-8">
            ₹{item.price}
            </h5>
            <h5 className="md:col-span-2 col-span-12 w-full flex justify-center text-center text-gray-900 text-lg font-medium leading-8">
            {item.quantity}
            </h5>
            <h5 className="md:col-span-2 col-span-12 w-full flex justify-center text-center text-gray-900 text-lg font-bold leading-8">
            ₹{item.price*item.quantity}
            </h5>
          </div>
          
        </div>

      </div>
    );
  })}
                    </div>
                  </div>
                  <div className="w-full justify-start items-center gap-5 flex sm:flex-row flex-col">
                    <button className="md:w-fit w-full px-5 py-2.5 bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 ease-in-out rounded-xl justify-center items-center flex">
                      <span className="px-2 py-px text-indigo-600 text-base font-semibold leading-relaxed">
                      Track My Order
                      </span>
                    </button>
                    <Link href="/" className="md:w-fit w-full px-5 py-2.5 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                      <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                        Continue Shopping 
                      </span>
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </section>
    </div>
  );
}

export default OrderInfo;

