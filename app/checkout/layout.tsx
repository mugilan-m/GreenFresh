import { Metadata } from "next";
import OrderSummary from "../Components/OrderSummary";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Checkout",
  description: "checkout page for GreenFresh Market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen h-screen flex">
        <div className="w-[70%]  h-screen">
        <Link className="cursor-pointer z-10 "  href="/cart"><p className="text-blue-900 ml-3 text-base text-ford-fill-brand-strong font-bold xs:text-xs xs:!leading-4 xs:ml-3" >&lt; Back To Cart</p></Link>
        {children}
        </div>
      <div className="w-[30%] ">
        <OrderSummary/>
      </div>
    </div>
  );
}
