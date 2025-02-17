import React from "react";
import Image from "next/image";
import Link from "next/link";
function HomeBanner() {
  return (
    <div className=" m-0 mx-auto container flex">
      <div>
        <div className="absolute mt-[130px] ml-[50px] w-[600px] h-[400px] space-x-1 space-y-4">
        <span className="pt-10 text-gray-500 ml-1" >
              Exclusive Offer 15%
            </span><br/>
            <span className="text-5xl font-bold">
              Best Online <br/>Deals, Free Stuff
            </span><br/>
<div>
<span className="font-sans text-xl">
              Only on this week… Don’t miss
            </span><br/>
</div>
<div>
<span className="text-gray-500">
              Start from $5.99
            </span><br/></div>
        <div>
        <Link href='/ProductPage' className="mt-30 bg-green-500 text-white p-3 rounded-lg">
                Get Best Deal ->
              </Link>
        </div>
        </div>

      <Image src="https://freshcart77.myshopify.com/cdn/shop/files/slider-image-1.jpg?crop=center&height=560&v=1722432890&width=850"
        alt="bannerimage" className="min-h-[560px] w-[847.969px] ml-[-10px] shadow-xl rounded-xl" width={847}  height={560}
      />

      </div>
      <div >
        <div className="absolute mt-12 ml-5">
          <span className="text-2xl font-bold">
          10% cashback on<br/> personal care </span>
        <div>
        <span className="text-gray-500 my-2"><br/>
          Max cashback: $12  </span><br/>
          <span className="text-gray-500 ">Code: <strong>MJ0257 </strong></span><br/>
<div className="absolute mt-5">
<Link href='/ProductPage' className="mt-5 p-3 bg-black text-white rounded-xl">
                Shop Now
              </Link>
</div>
        </div>
        <div>

        </div>
        </div>
      <Image src="https://freshcart77.myshopify.com/cdn/shop/files/ad-banner-1.jpg?crop=center&height=268&v=1723107359&width=424"
              alt="bannerimage" className="min-h-[268px] w-[424px] shadow-xl rounded-xl  " width={424} height={268}

      />
      <div className="absolute  mt-20 ml-5">
        <h1 className="font-bold text-2xl">
        Say yes to <br/>season’s fresh
        </h1>
        <p className="mt-3 text-gray-500">
        Refresh your day <br/> the fruity way
        </p>
        <div className="absolute mt-5">
<Link href='/ProductPage' className="mt-5 p-3 bg-black text-white rounded-xl">
                Shop Now
              </Link>
</div>
      </div>
            <Image src="https://freshcart77.myshopify.com/cdn/shop/files/ad-banner-2.jpg?crop=center&height=268&v=1723107714&width=424"
              alt="bannerimage" className="min-h-[268px] w-[424px] mt-6 shadow-xl rounded-xl" width={424} height={268}

      />
      </div>
    </div>
  );
}

export default HomeBanner;
