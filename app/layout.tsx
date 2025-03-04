import type { Metadata } from "next";
import "./globals.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Green Fresh",
  description: "Green Fresh Ecommerce website for customers to buy groceries",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <div className="w-screen h-screen">
        <Header/>

        {children}
       <div className="font-bold"> <Toaster position="top-right"  /></div>

        <div className="mb-[-10px]">
        <Footer/>
        </div>
        </div>

      </body>
    </html>
  );
}
