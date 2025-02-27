"use client"
import React from 'react'
import { useProductStore } from '../store';
import Productcard from '../Components/Productcard';
import OrderSummary from '../Components/OrderSummary';
function Page() {
  const { addtocart } = useProductStore((state) => state);

  console.log("CartProducts", addtocart);

  return (
    // <div className='mx-auto container w-screen h-screen m-10'>
    //   <h1 className='font-bold text-4xl'>Your cart
    //   </h1>
  
    //   {addtocart.length > 0 ? (
    //     <ul>
    //                       <hr/>
    //       {addtocart.map((item) => (
    //         <div className='w-screen flex gap-10'>

    //             <img src={item.images[0]} className='w-[100px] h-[100px]' />
    //              <h1>{item.title}</h1>
    // <div >
    // <button >+</button>
    //              <input type='text' className='w-10 h-10 ml-10'/>
    //              <button className='ml-10'>-</button>
    // </div>
    //              <h1>{item.price}</h1>

    //           <button className='bg-red-600 p-2 rounded-xl h-10'>remove</button>
    //           <h1>QTY {item.quantity}</h1>
    //         </div>

    //       ))}
    //                     <hr/>
    //     </ul>
    //   ) : (
    //     <p>Your cart is empty.</p>
    //   )}
    // </div>
    <div className='flex'>
    <div className='w-[60%] bg-red'>
      <Productcard data={addtocart}/>
    </div>
    <div className='w-[38%] mt-20 relative'>
    <OrderSummary data={addtocart}/>

    </div>
    </div>

  );
}

export default Page;
