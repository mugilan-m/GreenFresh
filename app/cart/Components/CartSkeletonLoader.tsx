"use client"
import {Card, Skeleton} from "@heroui/react";
export default  function CartSkeletonLoader() {

  return (
<div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8 bg-red-500">
      <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
        <div className="space-y-6">
          <Card className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
            <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">

              {/* Image Skeleton */}
              <div className="shrink-0 md:order-1">
                <Skeleton className="rounded-lg">
                  <div className="h-[180px] w-[180px] bg-default-300" />
                </Skeleton>
              </div>

              {/* Quantity Controls Skeleton */}
              <div className="flex items-center justify-between md:order-3 md:justify-end">
                <div className="flex items-center">
                  <Skeleton className="w-[80px] h-[30px]">
                    <div className="w-[40px] h-[30px] bg-default-300 rounded-md"/>
                  </Skeleton>
                </div>
                <div className="text-end md:order-4 md:w-32">
                  <Skeleton className="w-[100px]">
                    <div className="h-5 w-[80px] rounded-lg bg-default-300" />
                  </Skeleton>
                  <Skeleton className="w-[60px]">
                    <div className="h-3 w-[50px] rounded-lg bg-default-200" />
                  </Skeleton>
                </div>
              </div>

              {/* Title and Description Skeleton */}
              <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                <Skeleton className="rounded-lg">
                  <div className="h-6 w-4/5 rounded-lg bg-default-300" />
                </Skeleton>
                <Skeleton className="rounded-lg">
                  <div className="h-4 w-3/5 rounded-lg bg-default-200" />
                </Skeleton>
                <Skeleton className="rounded-lg">
                  <div className="h-4 w-2/5 rounded-lg bg-default-200" />
                </Skeleton>

                {/* Buttons Skeleton */}
                <div className="flex items-center gap-4">
                  <Skeleton className="w-[120px]">
                    <div className="h-8 w-[100px] rounded-lg bg-default-300" />
                  </Skeleton>
                  <Skeleton className="w-[80px]">
                    <div className="h-8 w-[60px] rounded-lg bg-default-300" />
                  </Skeleton>
                </div>
              </div>

            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
