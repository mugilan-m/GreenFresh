
import React from 'react'
import CheckoutLayout from './components/CheckoutLayout'
import { resolve } from 'dns'
import Link from 'next/link'
import ContactInfo from './components/ContactInfo'
async function page() {
  await new Promise(resolve => setTimeout(resolve ,2000))
  return (
    <div className='m-5'>
        <ContactInfo/>
      </div>
  )
}

export default page