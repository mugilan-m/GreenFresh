"use client"

import React from "react";
import { useProductStore } from "../store";
import Productcard from "../Components/Productcard";
import OrderSummary from "../Components/OrderSummary";
import Link from "next/link";
  function Page() {
  const { addtocart } = useProductStore((state) => state);

  console.log("CartProducts", addtocart);

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
