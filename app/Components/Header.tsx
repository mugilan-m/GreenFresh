"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

function Header() {
  const loggedin = false;
  const pathname = usePathname();
  const isPage =
    pathname === "/checkout" ||
    pathname === "/Signin" ||
    pathname === "/Login" ||
    pathname === "/Order-Confirmation";
  return (
    <header className="bg-custom-gradient px-4 py-3">
      {!isPage ? (
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              className="dark:invert w-[200px] h-[70px] object-contain"
              src="https://static1.squarespace.com/static/6348419bc7daf073f761786c/t/66294ac74cb7b26d9e1d4dc9/1713982151290/GreenFresh+Logo+-+Stacked+%28Green+%2B+Black%29.png?format=1500w"
              alt="Next.js logo"
              width={200}
              height={70}
            />
          </Link>
          <div className="md:hidden"></div>
          <nav className={"md:flex space-x-9"}>
            <form action="/PLP">
              <input
                type="text"
                name="query"
                placeholder="Search for over 5000 products"
                className="rounded-md p-3 mb-3 shadow-sm w-[600px] "
              />
              <button className="absolute ml-[-100px] m-4" type="submit">
                <svg
                  fill="none"
                  height="18px"
                  viewBox="0 0 15 15"
                  width="18px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 8.98528 8.98528 11 6.5 11C4.01472 11 2 8.98528 2 6.5ZM6.5 1C3.46243 1 1 3.46243 1 6.5C1 9.53757 3.46243 12 6.5 12C9.53757 12 12 9.53757 12 6.5C12 3.46243 9.53757 1 6.5 1ZM11.2669 10.4068C11.0773 10.206 10.7609 10.1969 10.5601 10.3864C10.3593 10.576 10.3502 10.8924 10.5397 11.0932L13.1368 13.8442C13.3264 14.045 13.6428 14.0541 13.8436 13.8646C14.0444 13.675 14.0535 13.3585 13.864 13.1577L11.2669 10.4068Z"
                    fill="#383837"
                    fillRule="evenodd"
                    style={{
                      height: "18px",
                      width: "18px",
                      color: "rgb(56, 56, 55)",
                    }}
                  ></path>
                  <path
                    d="M11.2669 10.4068L11.485 10.2008L11.2669 10.4068ZM10.5397 11.0932L10.7579 10.8873L10.5397 11.0932ZM13.1368 13.8442L12.9186 14.0502L13.1368 13.8442ZM13.8436 13.8646L13.6377 13.6464L13.8436 13.8646ZM13.864 13.1577L13.6458 13.3637L13.6458 13.3637L13.864 13.1577ZM6.5 1.7C3.84903 1.7 1.7 3.84903 1.7 6.5H2.3C2.3 4.1804 4.1804 2.3 6.5 2.3V1.7ZM11.3 6.5C11.3 3.84903 9.15097 1.7 6.5 1.7V2.3C8.8196 2.3 10.7 4.1804 10.7 6.5H11.3ZM6.5 11.3C9.15097 11.3 11.3 9.15097 11.3 6.5H10.7C10.7 8.8196 8.8196 10.7 6.5 10.7V11.3ZM1.7 6.5C1.7 9.15097 3.84903 11.3 6.5 11.3V10.7C4.1804 10.7 2.3 8.8196 2.3 6.5H1.7ZM1.3 6.5C1.3 3.62812 3.62812 1.3 6.5 1.3V0.7C3.29675 0.7 0.7 3.29675 0.7 6.5H1.3ZM6.5 11.7C3.62812 11.7 1.3 9.37188 1.3 6.5H0.7C0.7 9.70325 3.29675 12.3 6.5 12.3V11.7ZM11.7 6.5C11.7 9.37188 9.37188 11.7 6.5 11.7V12.3C9.70325 12.3 12.3 9.70325 12.3 6.5H11.7ZM6.5 1.3C9.37188 1.3 11.7 3.62812 11.7 6.5H12.3C12.3 3.29675 9.70325 0.7 6.5 0.7V1.3ZM10.766 10.6046C10.8463 10.5287 10.9729 10.5324 11.0488 10.6127L11.485 10.2008C11.1817 9.87955 10.6754 9.86497 10.3541 10.1683L10.766 10.6046ZM10.7579 10.8873C10.6821 10.807 10.6857 10.6804 10.766 10.6046L10.3541 10.1683C10.0329 10.4716 10.0183 10.9779 10.3216 11.2992L10.7579 10.8873ZM13.3549 13.6383L10.7579 10.8873L10.3216 11.2992L12.9186 14.0502L13.3549 13.6383ZM13.6377 13.6464C13.5574 13.7222 13.4308 13.7186 13.3549 13.6383L12.9186 14.0502C13.222 14.3714 13.7283 14.386 14.0496 14.0827L13.6377 13.6464ZM13.6458 13.3637C13.7216 13.444 13.718 13.5706 13.6377 13.6464L14.0496 14.0827C14.3708 13.7794 14.3854 13.2731 14.0821 12.9518L13.6458 13.3637ZM11.0488 10.6127L13.6458 13.3637L14.0821 12.9518L11.485 10.2008L11.0488 10.6127Z"
                    fill="#383837"
                  ></path>
                </svg>
              </button>
            </form>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/Wishlist">Wishlist</Link>
            {loggedin && loggedin ? (
              <Link href="/About">My Account</Link>
            ) : (
              <Link href="/Signin">
                <svg
                  fill="none"
                  height="24px"
                  viewBox="0 0 26 26"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12.5"
                    cy="11.168"
                    r="3.5"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeWidth="1.6"
                  ></circle>
                  <circle
                    cx="12.5"
                    cy="13.5"
                    r="10.5"
                    stroke="#000000"
                    strokeWidth="1.6"
                  ></circle>
                  <path
                    d="M19.5 21.3236C19.0871 20.0832 18.1773 18.9872 16.9117 18.2054C15.646 17.4237 14.0953 17 12.5 17C10.9047 17 9.35398 17.4237 8.08835 18.2054C6.82271 18.9872 5.91289 20.0832 5.5 21.3236"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeWidth="1.6"
                  ></path>
                </svg>
                <span className="text-sm">Login</span>
              </Link>
            )}

            <Link href="/cart">
              <svg
                color="#000000"
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5586 22C11.387 22 12.0586 21.317 12.0586 20.4746C12.0586 19.6321 11.387 18.9492 10.5586 18.9492C9.73017 18.9492 9.05859 19.6321 9.05859 20.4746C9.05859 21.317 9.73017 22 10.5586 22Z"
                  fill="#000000"
                ></path>
                <path
                  d="M17.6177 22C18.4461 22 19.1177 21.317 19.1177 20.4746C19.1177 19.6321 18.4461 18.9492 17.6177 18.9492C16.7892 18.9492 16.1177 19.6321 16.1177 20.4746C16.1177 21.317 16.7892 22 17.6177 22Z"
                  fill="#000000"
                ></path>
                <path
                  d="M2 2.06277C3.76471 2.0629 4.94118 1.4978 6.11765 3.75768M6.11765 3.75768H19.2461C20.6051 3.75768 21.5684 5.0841 21.1479 6.37649L19.5082 11.416C19.2402 12.2397 18.4725 12.7972 17.6064 12.7972H9.05882M6.11765 3.75768L9.05882 12.7972M20.8235 16.752H9.27151C8.17943 16.752 7.29412 15.8667 7.29412 14.7746V14.5619C7.29412 13.5873 8.0842 12.7972 9.05882 12.7972V12.7972"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeWidth="1.8"
                ></path>
              </svg>
              <span className="text-sm"> Cart</span>
            </Link>
          </nav>
        </div>
      ) : (
        <></>
      )}
    </header>
  );
}

export default Header;
