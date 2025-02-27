import Link from "next/link";
import React from "react";
import OrderNumber from "./Components/OrderNumber";
import OrderInfo from "./Components/OrderInfo";

async function Page() {
  await new Promise(resolve => setTimeout(resolve ,2000))

  return (
    <div className="mx-auto container m-10 ">
      <h1 className="text-5xl font-bold ">Thank You Mugilan!</h1>

      <span className="text-xl m-2">
        {" "}


        <OrderNumber />{" "}
      </span>
      <OrderInfo />
      <div>
      </div>
     
    </div>
  );
}

export default Page;
