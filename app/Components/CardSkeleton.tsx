"use client";
import React from "react";
import { Card, Skeleton } from "@heroui/react"; 
import Link from "next/link";

const CardSkeleton = () => {
  const retString = localStorage?.getItem("ProductData");
  const retArray = retString ? JSON.parse(retString) : null; 
  
  console.log("retArray", retArray);

  return (
    <div className="m-3">
    <div className="w-20 400 h-20">
    <Link href='/' className="m-5 mb-10 font-serif text-xl font-bold"> Back</Link>
    </div>
  <div className="gap-12 grid grid-cols-2 sm:grid-cols-4">
  {retArray.map(( index: number) => (
              <Card className="w-[350px] space-y-5 p-4" radius="lg" key={index}>
              <Skeleton className="rounded-lg h-[350px]">
                <div className="h-full w-full rounded-lg bg-default-300" />
              </Skeleton>
              <div className="space-y-3">
                <Skeleton className="w-full rounded-lg h-16">
                  <div className="h-full w-full rounded-lg bg-default-200" />
                </Skeleton>
                <Skeleton className="w-full rounded-lg h-6">
                  <div className="h-full w-full rounded-lg bg-default-200" />
                </Skeleton>
                <Skeleton className="w-full rounded-lg h-6">
                  <div className="h-full w-full rounded-lg bg-default-300" />
                </Skeleton>
                <Skeleton className="w-full rounded-lg h-8">
                  <div className="h-full w-full rounded-lg bg-default-300" />
                </Skeleton>
              </div>
            </Card>
      ))}
  </div>
  </div>
  );
};

export default CardSkeleton;
