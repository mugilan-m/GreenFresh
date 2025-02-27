import Link from "next/link";
import React from "react";

function generateOrderNumber() {
  const prefix = "GF";
  const randomNumber = Math.floor(100000 + Math.random() * 900000);
  return `${prefix}${randomNumber}`;
}

function OrderNumber() {
  const orderNumber = generateOrderNumber();

  return (
    <div className="ml-2">
            <div className="flex gap-3 text-xl">
      Your order is confirmed! {" "}
      <div className="bg-green-300 rounded-3xl w-10 h-10 p-2 text-green-800 mb-2 ">
        <svg
          className="_vZPglRSyqi4oTXg5L1_ _pwSRUXRHN5bHphyTRKz nBaPhMqZS2qacmQKOOCx ZY40Gz4IBiIj5o_8hP5w soAkn7UnTd5mqIs7Xdxf J5YS661Px05AzgP8bTc5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 11.917 9.724 16.5 19 7.5"
          ></path>
        </svg>
      </div>
      
    </div>

                <p className="text-sm text-gray-600 m-2">
        Your order  <strong className="font-bold text-xl text-black">#{orderNumber}</strong> will be processed within 24 hours during working days. We
        will notify you by email once your order has been shipped. if you have
        any questions about your purchase email us at
        <strong className="font-bold text-black"> greenfresh@gmail.com</strong>{" "}
        or <Link href="/About">Contact us</Link>{" "}
      </p>
    </div>

  );
}

export default OrderNumber;
