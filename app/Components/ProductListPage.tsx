/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import React from "react";
import { Card, CardBody, CardFooter } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useProductStore } from "../store";
import toast from "react-hot-toast";
import { Product } from ".";
import Image from "next/image";
function ProductListPage(data:any) {
    const {  addWishlist,Addtocart} = useProductStore((state) => state);
    const router = useRouter();
    console.log("ProductListPagedata--->",data.data[0]);
    const handleButtonClick = (title: string) => {
      toast.success(`${title}   added to cart `);
  
      setTimeout(() => {
        router.push("/cart");
      }, 1000);
    };
  return (
    <>
          {data.data.map((item:Product) => (
        <Card
          key={item.id}
          isPressable
          shadow="sm"
          
        >
          <CardBody className="overflow-visible p-0 "
           onClick={() => router.push(`/PDP/${item.id}`)}
          >
            
            {item.images && item.images.length > 0 ? (
              <Image
                className="w-full object-contain h-[340px]"
                src={item.images[0]}
                alt={item.title}
                width="100%"
              />
            ) : (
              <div>No Image Available</div>
            )}
          </CardBody>
          <CardFooter className=" flex items-center justify-center text-small">
            <h1 className=" text-2xl leading-8  ford-colormoderatek h-16 line-clamp-2 font-semibold"
            onClick={() => router.push(`/PDP/${item.id}`)}
            >
              {item.title}
            </h1>
          </CardFooter>
          <span className="font-medium text-2xl leading-8   ml-5">
          ₹{item.price}
          </span>
          <div className="flex gap-5">
            <span className="font-normal text-base leading-6  text-ford-text-moderate(default) ml-5  ">
              {data.length === 0 ? "Product out of stock" : "Product instock"}
            </span>
            {data.length === 0 ? (
              <svg
                data-testid="out-of-stock-icon"
                fill="none"
                height="24"
                viewBox="0 0 33 32"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5101 17.924L9.77212 24.662L8.00412 22.894L14.7421 16.156L7.67212 9.08601L9.41812 7.33901L16.4891 14.409L23.5601 7.33801L25.3281 9.10601L18.2571 16.177L24.9751 22.895L23.2281 24.642L16.5101 17.924Z"
                  fill="#BF152C"
                ></path>
              </svg>
            ) : (
              <svg
                data-testid="green-check"
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.2 8.04001L18.36 7.20001L9.59999 15.96L5.63999 12L4.79999 12.84L9.59999 17.64L19.2 8.04001Z"
                  fill="#008200"
                  stroke="#008200"
                ></path>
              </svg>
            )}
          </div>
          <div className="flex gap-5">
            <span className="font-normal text-base leading-6  text-ford-text-moderate(default)  ml-5">
              Free Shipping available
            </span>
            {data.length === 0 ? (
              <svg
                data-testid="out-of-stock-icon"
                fill="none"
                height="24"
                viewBox="0 0 33 32"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5101 17.924L9.77212 24.662L8.00412 22.894L14.7421 16.156L7.67212 9.08601L9.41812 7.33901L16.4891 14.409L23.5601 7.33801L25.3281 9.10601L18.2571 16.177L24.9751 22.895L23.2281 24.642L16.5101 17.924Z"
                  fill="#BF152C"
                ></path>
              </svg>
            ) : (
              <svg
                data-testid="green-check"
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.2 8.04001L18.36 7.20001L9.59999 15.96L5.63999 12L4.79999 12.84L9.59999 17.64L19.2 8.04001Z"
                  fill="#008200"
                  stroke="#008200"
                ></path>
              </svg>
            )}
          </div>

          <div className="mt-10  gap-10 mb-4">
            <button
              // onPress={() => router.push(`/PDP/${item.id}`)}
              onClick={() => {
                Addtocart(item);
                handleButtonClick(item?.title); 
              
              }}
              
              className="p-2  rounded-lg bg-green-600 text-white"
              color="primary"
            >
              Add to cart
            </button>
            <button
            onClick={() => {
              addWishlist(item)
            }}
              className=" p-2 rounded-lg ml-10 bg-blue-600 text-white"
              
            >
              Add to Wishlist
            </button>
          </div>
        </Card>
      ))}
    </>
  )
}

export default ProductListPage