"use client"

import React from "react";
import { useProductStore } from "../store";
import Productcard from "../Components/Productcard";
import OrderSummary from "../Components/OrderSummary";
import Link from "next/link";
import {Image} from "@heroui/react";

  function Page() {
  const { addtocart } = useProductStore((state) => state);

  console.log("CartProducts", addtocart);
  if (addtocart.length <= 0) {
    return (
      <div className="mx-auto container justify-center align-middle">
        <Link className="bg-blue-400 p-3 rounded-2xl w-25 " href="/ProductPage">
          Back
        </Link>
        <div className="mx-auto container flex  justify-center ">
          <Image
            src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png"
            className="w-[100%] h-50 rounded-3xl"
            alt="images"
            width={2000}
            height={500}
          />
        </div>
        <div className="flex justify-center absolute z-50 mt-[-70px] ml-[36%]">
          <Link
            href="/ProductPage"
            className="text-white font-bold ml-2 p-3  rounded-lg  shadow-blue-800 bg-black"
          >
            Shop New products 
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="flex">
      <>
        <div className="w-[60%] bg-red">
          <Productcard data={addtocart} />
        </div>
        <div className="w-[38%] mt-20 relative">
          <OrderSummary data={addtocart} />
        </div>
      </>
    </div>
  );
}

export default Page;
