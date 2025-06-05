import type { Metadata } from "next";
import "./globals.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Toaster } from "react-hot-toast";
import { getServerSession } from "next-auth";
import SessionProvider from "./Components/SessionProvider";
export const metadata: Metadata = {
  title: "Green Fresh",
  description: "Green Fresh Ecommerce website for customers to buy groceries",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession()
  return (
    <html lang="en">
        <head>
    <meta charSet="utf-8" />
    <meta name="description" content="Author: Mugilan M , Green Fresh an  Ecommerce website for customers to buy groceries"/>
    <meta name="google-site-verification" content="+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34=" />
    <title>Example Books - high-quality used books for children</title>
    <meta name="robots" content="noindex,nofollow" />
  </head>
      <body
      >
        <SessionProvider session={session}>
        <div className="w-screen h-screen">
        <Header/>

        {children}
       <div className="font-bold"> <Toaster position="top-right"  /></div>

        <div className="mb-[-10px]">
        <Footer/>
        </div>
        </div>
        </SessionProvider>


      </body>
    </html>
  );
}
