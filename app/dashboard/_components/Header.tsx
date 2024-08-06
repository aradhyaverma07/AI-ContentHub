import { UserButton } from '@clerk/nextjs'

import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm border-b-2  items-end bg-white right-0%'>
   
   
     <div className='flex gap-5 items-end'>
        <h2 className='bg-black p-1 rounded-full text-xs items-end text-white px-2 right-0%'>Join Membership just for ₹199/month</h2>
        <UserButton/>
     </div>
    </div>
  )
}

export default Header
