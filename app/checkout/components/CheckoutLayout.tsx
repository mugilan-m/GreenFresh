"use client"
import { Skeleton } from "@heroui/react";

export default function CheckoutLayout() {
  return (
    <div className="m-5">
      <h1 className="text-xl font-bold ml-[50px]">
        <Skeleton className="w-32 h-6 rounded-md" />
      </h1>

      <div className="container mx-auto flex gap-5  w-[90%] m-5">
        <div className="w-[400px]">
          <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
            <Skeleton className="w-24 h-4 rounded-md" />
          </label>
          <Skeleton className="w-full h-10 rounded-lg" />
        </div>
        <div className="w-[400px]">
          <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
            <Skeleton className="w-24 h-4 rounded-md" />
          </label>
          <Skeleton className="w-full h-10 rounded-lg" />
        </div>
      </div>

      <div className="container mx-auto flex gap-5  w-[90%]">
        <div className="w-[400px]">
          <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
            <Skeleton className="w-24 h-4 rounded-md" />
          </label>
          <Skeleton className="w-full h-10 rounded-lg" />
        </div>
        <div className="w-[400px]">
          <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
            <Skeleton className="w-24 h-4 rounded-md" />
          </label>
          <Skeleton className="w-full h-10 rounded-lg" />
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-xl font-bold ml-[50px] mb-5">
          <Skeleton className="w-32 h-6 rounded-md" />
        </h1>
        <div className="container mx-auto flex gap-5  w-[90%]">
          <div className="w-[400px]">
            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
              <Skeleton className="w-24 h-4 rounded-md" />
            </label>
            <Skeleton className="w-full h-10 rounded-lg" />
          </div>
          <div className="w-[400px]">
            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
              <Skeleton className="w-48 h-4 rounded-md" />
            </label>
            <Skeleton className="w-full h-10 rounded-lg" />
          </div>
        </div>

        <div className="container mx-auto flex gap-5  w-[90%]">
          <div className="w-[280px]">
            <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">
              <Skeleton className="w-24 h-4 rounded-md" />
            </label>
            <Skeleton className="w-full h-10 rounded-lg" />
          </div>
          <div className="w-[200px]">
            <label className="block mt-2 mb-1 text-sm font-bold text-gray-900 dark:text-white">
              <Skeleton className="w-24 h-4 rounded-md" />
            </label>
            <Skeleton className="w-full h-10 rounded-lg" />
          </div>
          <div className="w-[300px]">
            <label className="block mt-2 mb-1 text-sm font-bold text-gray-900 dark:text-white">
              <Skeleton className="w-24 h-4 rounded-md" />
            </label>
            <Skeleton className="w-full h-10 rounded-lg" />
          </div>
        </div>

        <div>
          <h1 className="text-xl font-bold ml-[50px] mb-5 mt-5">
            <Skeleton className="w-48 h-6 rounded-md" />
          </h1>
          <div className="ml-12 flex justify-between m-2 w-[75%] bg-green-100 p-4 rounded-xl border-green-500 border-2 font-bold">
            <Skeleton className="w-32 h-6 rounded-md" />
            <Skeleton className="w-16 h-6 rounded-md" />
          </div>
        </div>
      </div>
      <div className="mt-10 p-5">
      <h2 className="text-xl font-bold mb-4">
        <Skeleton className="w-48 h-6 rounded-md" />
      </h2>
      <Skeleton className="w-full h-12 rounded-lg mb-3" />
      <Skeleton className="w-full h-12 rounded-lg mb-3" />
      <Skeleton className="w-full h-12 rounded-lg mb-3" />
      <Skeleton className="w-32 h-8 rounded-md" />
    </div>
    </div>
  );
}
