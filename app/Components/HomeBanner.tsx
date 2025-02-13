import React from "react";
import Image from "next/image";
import Link from "next/link";
function HomeBanner() {
  return (
    <div className=" m-0 mx-auto container flex">
      <div>
      <Link href='/ProductPage' className="absolute mt-60 ml-10 bg-black text-white p-3 rounded-lg">Shop Now</Link>

      <Image src="https://freshcart77.myshopify.com/cdn/shop/files/slider-image-1.jpg?crop=center&height=560&v=1722432890&width=850"
        alt="bannerimage" className="min-h-[560px] w-[847.969px] ml-[-10px] shadow-xl rounded-xl" width={847}  height={560}
      />

      </div>
      <div className="">
      <Image src="https://freshcart77.myshopify.com/cdn/shop/files/ad-banner-1.jpg?crop=center&height=268&v=1723107359&width=424"
              alt="bannerimage" className="min-h-[268px] w-[424px] shadow-xl rounded-xl  " width={424} height={268}

      />
            <Image src="https://freshcart77.myshopify.com/cdn/shop/files/ad-banner-2.jpg?crop=center&height=268&v=1723107714&width=424"
              alt="bannerimage" className="min-h-[268px] w-[424px] mt-6 shadow-xl rounded-xl" width={424} height={268}

      />
      </div>
    </div>
  );
}

export default HomeBanner;
