"use client"
import {Card, Skeleton} from "@heroui/react";
export default  function CartSkeletonLoader() {

  return (
<div className="flex">
  <div className="w-[60%] bg-red">
    {/* Productcard Skeleton */}
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
  <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Your cart</h2>

    {/* Cart Item Skeleton (Repeated for each item) */}
    {Array.from({ length: 3 }).map((_, index) => (  // Repeat 3 times for example
      <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8" key={index}>
        <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
              <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">

                {/* Image Placeholder */}
                <div className="shrink-0 md:order-1 animate-pulse">
                  <div className="bg-gray-300 h-[180px] w-[180px] rounded-md dark:bg-gray-700"></div>
                </div>

                {/* Quantity Controls Placeholder */}
                <div className="flex items-center justify-between md:order-3 md:justify-end animate-pulse">
                  <div className="flex items-center">
                    <div className="bg-gray-300 h-5 w-5 rounded-md dark:bg-gray-700"></div>
                    <div className="bg-gray-300 h-5 w-10 mx-2 rounded-md dark:bg-gray-700"></div>
                    <div className="bg-gray-300 h-5 w-5 rounded-md dark:bg-gray-700"></div>
                  </div>
                  <div className="text-end md:order-4 md:w-32">
                    <div className="bg-gray-300 h-8 w-20 rounded-md dark:bg-gray-700 mb-1"></div>
                    <div className="bg-gray-300 h-4 w-16 rounded-md dark:bg-gray-700"></div>
                  </div>
                </div>

                {/* Product Info Placeholder */}
                <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md animate-pulse">
                  <div className="bg-gray-300 h-6 w-3/4 rounded-md dark:bg-gray-700"></div>
                  <div className="bg-gray-300 h-4 w-1/2 rounded-md dark:bg-gray-700"></div>
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-300 h-5 w-24 rounded-md dark:bg-gray-700"></div>
                    <div className="bg-gray-300 h-5 w-16 rounded-md dark:bg-gray-700"></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

    <div className="animate-pulse">
      <div className="bg-gray-300 h-48 rounded-md mb-4"></div> {/* Placeholder for Image */}
      <div className="bg-gray-300 h-6 w-3/4 rounded-md mb-2"></div> {/* Placeholder for Title */}
      <div className="bg-gray-300 h-4 w-1/2 rounded-md mb-2"></div> {/* Placeholder for Description */}
      <div className="bg-gray-300 h-8 w-1/4 rounded-md"></div>       {/* Placeholder for Price/Button */}
    </div>
  </div>

  <div className="w-[38%] mt-20 relative">
    {/* OrderSummary Skeleton */}
    <div className="animate-pulse">
      <div className="bg-gray-300 h-8 w-full rounded-md mb-4"></div>   {/* Placeholder for Heading */}
      <div className="bg-gray-300 h-6 w-full rounded-md mb-2"></div>   {/* Placeholder for Subtotal */}
      <div className="bg-gray-300 h-6 w-full rounded-md mb-2"></div>   {/* Placeholder for Shipping */}
      <div className="bg-gray-300 h-6 w-full rounded-md mb-2"></div>   {/* Placeholder for Tax */}
      <div className="bg-gray-300 h-10 w-full rounded-md mt-4"></div>  {/* Placeholder for Total */}
      <div className="bg-gray-300 h-12 w-full rounded-md mt-8"></div>  {/* Placeholder for Checkout Button */}
    </div>
  </div>
</div>

  );
}
