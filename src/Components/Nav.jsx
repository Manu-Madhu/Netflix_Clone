import React from 'react'

const Nav = () => {
  return (
    <div className='flex items-center bg-transparent justify-between p-4 md:px-8 z-[100] w-full absolute'>
     <span className='text-red-500 text-4xl font-bold cursor-pointer'>NETFLIX</span>
     <div className=''>
        <button className='text-white text-sm pr-4 rounded-sm'>Sign In</button>
        <button className='text-white text-sm px-5 py-2 bg-red-600 rounded-[5px]'> Sign Up</button>
     </div>
    </div>
  )
}

export default Nav