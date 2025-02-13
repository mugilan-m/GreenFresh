import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div className='mx-auto container justify-center align-middle'>
        <h1 className='justify-center align-middle flex text-3xl text-black '>Dashboard content</h1>
            <Link className='bg-blue-400 p-3 rounded-2xl w-25' href='/'>Back</Link>
    </div>
  )
}

export default page