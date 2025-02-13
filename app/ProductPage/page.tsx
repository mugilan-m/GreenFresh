"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import CardSkeleton from "../Components/CardSkeleton";
import ProductListPage from "../Components/ProductListPage";

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

function Home() {
  const [data, setData] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((json: ApiResponse) => {
        setData(json.products);
        if (typeof window !== "undefined" ) {
        localStorage?.setItem("ProductData", JSON.stringify(json.products));

        }
      })
      .catch((error: Error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
   return <CardSkeleton />;
    // return <>LOADING....</>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || data.length === 0) {
    return <div>No products found.</div>;
  }
  console.log("data", data?.length);
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

export default Home;
