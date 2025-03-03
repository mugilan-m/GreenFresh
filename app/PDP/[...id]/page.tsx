"use client";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Rating from "@/app/Components/Rating";
import { FaStar } from "react-icons/fa";
// import Form from "next/form"; //  No such thing
import { Chip, Input } from "@heroui/react";
import { useProductStore } from "@/app/store";
import toast from "react-hot-toast";
import Image from "next/image";

function PDPPage() {
  const pathname = usePathname();
  const idString = pathname.split("/").pop();
  const router = useRouter();

  const [quantity, setQuantity] = useState<number>(1);
  const { Addtocart,addWishlist } = useProductStore((state) => state);
  if (!idString) {
    return <div>Invalid Product ID </div>;
  }
  const productId = parseInt(idString, 10);
  const retString = localStorage.getItem("ProductData");
  let products = null;

  try {
    products = retString ? JSON.parse(retString) : null;
    console.log("products", products);
  } catch (error) {
    console.error("Error parsing ProductData from localStorage:", error);
    products = null;
  }
  const filteredProducts = products
    ? products.filter((product: { id: number }) => product.id === productId)
    : [];

  console.log("filteredProducts ->", filteredProducts[0]);
  const product = products[productId - 1];
  const tags =
    filteredProducts[0]?.tags?.map((tag: string, index: number) => (
      <div key={index}>
        <Chip>{tag}</Chip>
      </div>
    )) || null;

  const handleChange = (event: {
    target: { setCustomValidity: (arg0: string) => void; value: string };
  }) => {
    event.target.setCustomValidity(
      `only ${product?.stock} products  are available  `
    );
    const value = parseInt(event.target.value, 10);
    setQuantity(value);
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(quantity);

    // const formData = {
    //   productId: productId,
    //   quantity: quantity,
    // };

    // try {
    //   const response = await fetch('/api/add-to-cart', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (response.ok) {
    //     console.log('Product added to cart!');
    //   } else {
    //     console.error('Failed to add product to cart');
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  };
  const handleButtonClick = (title: string) => {
    toast.success(`${title}   added to cart `);

    setTimeout(() => {
      router.push("/cart");
    }, 2000);
  };



  return (
    <div>
      <div className="container mx-auto flex flex-row gap-10">
        <div className="w-[670px] h-[470px] ">
          <Link href="/ProductPage" className="font-serif text-xl font-bold ml-[-30px] ">
            {" "}
            Back
          </Link>
          <Image
            className="w-[800] mt-[-80px] object-contain h-[840px] drop-shadow-md shadow-sm"
            src={filteredProducts[0]?.images[0]}
            alt="image"
            width={300}
            height={200}
          />
        </div>
        <div className="w-[600px] h-[600px] drop-shadow-md shadow-sm  ">
          <h1 className="text-xl m-3 font-semibold leading-[22px] tracking-[-0.36px] text-[#262A33] flex gap-3">
            {filteredProducts[0]?.title}


          </h1>
          <p className="m-3 flex gap-2">
            {" "}
            <FaStar className={"w-5 h-5 text-yellow-400"} />
            <FaStar className={"w-5 h-5 text-yellow-400"} />
            <FaStar className={"w-5 h-5 text-yellow-400"} />{" "}
            <span> {filteredProducts[0]?.rating}</span>
          </p>

          <span className="text-[32px] m-3 font-medium leading-[30px] text-[#262A33]">
            ₹{filteredProducts[0]?.price}
          </span>

          <span className="text-[14px] font-semibold leading-[21.6px] tracking-[-0.24px] text-[#079761]">
            7.17 % off
          </span>
          <div className="m-3">
            <h1 className="text-lg font-bold leading-5 text-[#101418]">
              Description
            </h1>
            <p className="w-3/8 p-3 whitespace-normal break-words text-[14px] font-[450] leading-5 text-[#262A33]">
              {filteredProducts[0]?.description}
            </p>
          </div>
          <div className="m-3 flex gap-3">
            <Image
              src="https://static.thenounproject.com/png/952397-512.png"
              width={30}
              height={30}
              alt="products image"
            />
            <p className="">{filteredProducts[0]?.returnPolicy}</p>
          </div>
          <div className="flex m-3 gap-3">
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
            <p>{filteredProducts[0]?.shippingInformation}</p>
          </div>
          <div className="flex m-4 ">
            <p>{filteredProducts[0]?.warrantyInformation}</p>
          </div>
          <div className="flex m-4 ">
            <p>
              {filteredProducts[0]?.availabilityStatus}{" "}
              {filteredProducts[0]?.stock} Remaining
            </p>{" "}
          </div>
          <div className="f m-3">
          <button className="bg-green-900 p-3  text-white rounded-md flex gap-4 font-bold  " 
          onClick={()=>addWishlist(filteredProducts[0])}
          >Add to wishlist
          {/* <svg
              className="min-w-4 fill-ford-fill-interactive fill-gray-600"
              data-testid="wishlist-added-icon"
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="fill-ford-fill-interactive hover:fill-skyview-1200"
                d="M22.0619 3.09682C20.8052 1.83178 19.1415 1.14036 17.3657 1.14036C15.59 1.14036 13.9212 1.8369 12.6645 3.10194L12.0081 3.76263L11.3416 3.0917C10.0849 1.82666 8.41093 1.125 6.63523 1.125C4.86461 1.125 3.19576 1.82154 1.94412 3.08146C0.687392 4.3465 -0.00457183 6.02639 0.000516142 7.81383C0.000516142 9.60127 0.697568 11.276 1.9543 12.5411L11.5095 22.1595C11.6418 22.2926 11.8199 22.3643 11.9929 22.3643C12.1658 22.3643 12.3439 22.2978 12.4762 22.1646L22.0518 12.5616C23.3085 11.2965 24.0005 9.61664 24.0005 7.82919C24.0055 6.04175 23.3187 4.36186 22.0619 3.09682Z"
              ></path>
            </svg> */}
            </button>

          </div>
          <div className="flex m-4 gap-3">{tags}</div>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-5 m-3">
              <span className="font-bold m-2">Qty</span>
              <Input
                type="number"
                className="w-[100px]  p-2 rounded-sm "
                min={1}
                max={filteredProducts[0]?.stock}
                pattern="[0-9]*"
                aria-label="QTY"
                value="2"
                onChange={handleChange}
              />

              <button
                type="submit"
                className="lex h-12 w-[300px]  justify-between overflow-hidden rounded-[10px] border border-[#EF4372] bg-[#EF4372] px-4 py-3 font-bold leading-5 tracking-[0.1px] text-white transition-all duration-300 ease-in-out"
              >
                <div className="flex gap-5">
                  <span className="text-white fill-white">
                    {" "}
                    <svg
                      color="white"
                      fill="none"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.5586 22C11.387 22 12.0586 21.317 12.0586 20.4746C12.0586 19.6321 11.387 18.9492 10.5586 18.9492C9.73017 18.9492 9.05859 19.6321 9.05859 20.4746C9.05859 21.317 9.73017 22 10.5586 22Z"
                        fill="white"
                      ></path>
                      <path
                        d="M17.6177 22C18.4461 22 19.1177 21.317 19.1177 20.4746C19.1177 19.6321 18.4461 18.9492 17.6177 18.9492C16.7892 18.9492 16.1177 19.6321 16.1177 20.4746C16.1177 21.317 16.7892 22 17.6177 22Z"
                        fill="white"
                      ></path>
                      <path
                        d="M2 2.06277C3.76471 2.0629 4.94118 1.4978 6.11765 3.75768M6.11765 3.75768H19.2461C20.6051 3.75768 21.5684 5.0841 21.1479 6.37649L19.5082 11.416C19.2402 12.2397 18.4725 12.7972 17.6064 12.7972H9.05882M6.11765 3.75768L9.05882 12.7972M20.8235 16.752H9.27151C8.17943 16.752 7.29412 15.8667 7.29412 14.7746V14.5619C7.29412 13.5873 8.0842 12.7972 9.05882 12.7972V12.7972"
                        stroke="white"
                        strokeLinecap="round"
                        strokeWidth="1.8"
                      ></path>
                    </svg>
                  </span>
                  <span
                    onClick={() => {
                      Addtocart(filteredProducts[0]);
                      handleButtonClick(filteredProducts[0]?.title);
                    }}
                  >
                    Add to cart{" "}
                  </span>{" "}
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Rating />
    </div>
  );
}

export default PDPPage;
