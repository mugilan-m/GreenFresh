import HomeBanner from "./Components/HomeBanner";
import HomeMiddleBanner from "./Components/HomeMiddleBanner";
import ProductCatagory from "./Components/ProductCatagory";
import RecomendedProducts from "./Components/RecomendedProducts";

export default function Page() {
  return (
    <div 
    className=" mt-[-120px] grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
       <HomeBanner/>
       <ProductCatagory/>
       <RecomendedProducts/>
       <HomeMiddleBanner/>
      </main>
    </div>
  );
}

