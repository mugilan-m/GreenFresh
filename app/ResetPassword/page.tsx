"use client"
import Form from 'next/form'
import Link from 'next/link'
import React from 'react'
import { SiginFormData } from '../action'
import Image from "next/image";
// import { signIn } from "next-auth/react";

function page() {
  return (
<section className="bg-gray-50 dark:bg-gray-900 ">
  <div className="flex flex-col items-center justify-center px-6 py-8  mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <Image className="w-40 h-30 mr-2" src="https://static1.squarespace.com/static/6348419bc7daf073f761786c/t/66294ac74cb7b26d9e1d4dc9/1713982151290/GreenFresh+Logo+-+Stacked+%28Green+%2B+Black%29.png?format=1500w" alt="logo"
          width={40} height={30}
          />
           
      </a>
      <div className="w-full  mb-[10px] p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
             Sign up 
          </h2>
          <Form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" action={SiginFormData} >

              <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> email</label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
              </div>



              <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create Account</button>
          </Form>
          <div className='flex gap-5 mt-5 w-full'>


</div>

          <p className='mt-5 flex gap-2'>Already have an account <Link href="/Login" className='text-blue-500 hover:underline'>Login</Link></p>
      </div>
      
  </div>
</section>  )
}

export default page