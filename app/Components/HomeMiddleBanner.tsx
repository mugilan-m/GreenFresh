import Form from 'next/form'
import React from 'react'
import Image from 'next/image'
function HomeMiddleBanner() {
  return (
    <div>
        
      <div className='bg-image text-white flex rounded-lg '>
      <div className='w-[1000px]  '>
            <h1 className='mt-20 pl-[230px]'>
              $30 discount for your first order
            </h1>
            <h1 className='mt-3 pl-[230px] text-3xl font-bold '>
              Get top deals, latest trends, and more.
              </h1>
              <span className='mt-[19px] pl-[230px] text-gray-500'>
              Join our email subscription now to get updates on promotions and coupons.
            </span>
            <div className='mt-3 pl-[230px]'> 
                <Form action={''}>
                <input type='email' className='w-[330px] gap-3 p-3 rounded-lg text-black' placeholder='Email' />
            <button className='bg-green-500 p-3 rounded-lg ml-5' type='submit'>
                      Subscribe
                    </button>
                </Form>

            </div>

        </div>
        <Image
        src="https://freshcart77.myshopify.com/cdn/shop/files/girl-email.png?crop=center&height=390&v=1722521921&width=390"
        // className="pl-[720px]"
        width={390} height={390}
        alt='images'
        />
      </div>
    </div>
  )
}

export default HomeMiddleBanner