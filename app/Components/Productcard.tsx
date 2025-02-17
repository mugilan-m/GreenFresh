import React from "react";
import {Card, CardBody, Image, Button, Slider} from "@heroui/react";
import OrderSummary from "./OrderSummary";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useProductStore } from "../store";
export default function Productcard(data: any) {
    const router = useRouter();
  const { removecart } = useProductStore((state) => state);

  const cartData = data.data;
  console.log("cartData->",cartData);

  if (!cartData || cartData.length === 0) {
    return (
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16 w-screen h-screen">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0 ">
        <h2 className="text-4xl font-semibold text-gray-900 dark:text-white sm:text-5xl align-middle justify-center items-center">

        Your cart was empty           <Link href={'/ProductPage'} className="text-blue-700 underline text-3xl font-semibold mt-5 dark:text-white sm:text-5xl align-middle justify-center items-center">shop now</Link>


        </h2>
        <Image src="https://bakestudio.in/assets/images/cart/empty-cart.gif" width={750} height={450} className="mx-auto flex ml-[150px]"/>

        <h1 className="">
        </h1>

        </div>
        </section>
    )

    
  }

  
  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
    <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>
      { 
  cartData && cartData.map((item: Product,index:number)=>{
    return(

      <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8" key={index}>
        <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
              <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                <Link href={`/PDP/${item.id}`}  className="shrink-0 md:order-1">
                  <Image className="h-[180px] w-[180px] dark:hidden" src={item.images[0]} alt="imac image"  />
                </Link>
  
                <label htmlFor="counter-input" className="sr-only">Choose quantity:</label>
                <div className="flex items-center justify-between md:order-3 md:justify-end">
                  <div className="flex items-center">
                    <button type="button" id="decrement-button" data-input-counter-decrement="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                      <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                      </svg>
                    </button>
                    <input type="text" id="counter-input" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value={item.quantity} required />
                    <button type="button" id="increment-button" data-input-counter-increment="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                      <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                      </svg>
                    </button>
                  </div>
                  <div className="text-end md:order-4 md:w-32">
                  <h1 className=" text-2xl leading-8    font-bold text-gray-900 dark:text-white">₹{item.price*item.quantity}</h1>
                    <span className=" font-normal text-sm leading-5    text-gray-900 dark:text-white">₹{item.price} each</span>
                  </div>
                </div>
  
                <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                  <Link href={`/PDP/${item.id}`} className="text-base font-bold text-gray-900  dark:text-white">
               {item.title}
               <p className="font-normal text-sm leading-5    text-gray-500 dark:text-white">{item.description}</p>
                    </Link>
  
                  <div className="flex items-center gap-4">
                    <button type="button" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                      <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
                      </svg>
                      Add to Favorites
                    </button>
  
                    <button type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                    onClick={()=>removecart(item.id)}
                    >
                      <svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                      </svg>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
  
          </div>

        </div>

      </div>
    )
  })
}

      </div>
  </section>





  );
}


// <div className="relative flex  col-span-6 md:col-span-4 gap-15">
// <Image
//   alt="Album cover"
//   className="object-cover"
//   height={300}
//   src={item.images}
//   width="100%"
// />
// <div className="flex gap-3 m-3 w-[800px]">
// <Image src="https://cdn-icons-png.flaticon.com/128/14784/14784881.png" className="w-10 h-10"/>
// <h6 className="text-small font-mono font-bold  mt-2">
           
//            {item.returnPolicy}</h6>
// </div>

// <div className="flex flex-col col-span-6 md:col-span-8">
// <div className="flex justify-between items-start">
//   <div className="flex flex-col gap-0">
//     <h3 className="font-semibold text-foreground/90">{item.title}</h3>
//     <p className="text-small text-foreground/80">{item.description}</p>
//     <h1 className="text-large font-medium mt-2">{item.shippingInformation}</h1>
//   </div>

// </div>
// </div>
         

// </div>

// </div>