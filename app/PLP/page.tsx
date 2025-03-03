"use client";
import React, {  useEffect, useState } from "react";
import { Image } from "@heroui/react";
import ProductListPage from "../Components/ProductListPage";
import { useSearchParams } from 'next/navigation'
import Link from "next/link";
import CardSkeleton from "../Components/CardSkeleton";

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
}

interface ApiResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

function Page() {
  const [data, setData] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const searchParams = useSearchParams()
  const search = searchParams.get('query')
  console.log("search",search);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/search?q=${search}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((json: ApiResponse) => {
        setData(json.products);
        localStorage.setItem("ProductData", JSON.stringify(json.products));
      })
      .catch((error: Error) => setError(error))
      .finally(() => setLoading(false));
  }, [search]);

  if (loading) {
   return <CardSkeleton />;
    //return <>LOADING....</>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || data.length === 0) {
    return <div className="mx-auto container align-middle text-center mt-30 h-screen text-2xl pt-20 font-bold">
      No products found ! Go to <Link href='/' className="text-blue-600 underline">Home</Link>
      <Image src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg?t=st=1739354976~exp=1739358576~hmac=d35aa84c4244bcf0e4bc0fc75f55470cfc93d5efbacb9985f517b69cba429df0&w=1800"
      width={700} height={500} className=" ml-[270px] " alt="images"
      />
      </div>;
  }
  console.log("data", data[0]);
  return (
    <div className="m-3">
      <div className="w-20 400 h-20">
      <Link href='/' className="m-5 mb-10 font-serif text-xl font-bold"> Back</Link>
      </div>
    <div className="gap-12 grid grid-cols-2 sm:grid-cols-4">

     <ProductListPage data={data}/>
    </div>
    </div>

  );
}

export default Page;
