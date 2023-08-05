import React from 'react'

export default function Nav() {
  return (
    <nav className='bg-black-300 p-4 flex flex-row flex-wrap justify-between text-white max-sm:flex-col max-sm:mx-auto'>
        <h1 className="text-3xl">GreenLiving Solutions [Demo]</h1>
        <ul className='flex justify-around items-center w-1/4 font-bold text-lg max-sm:hidden'>
            <li><a href='#about' className=' hover:text-amber-600 cursor-pointer'>About</a></li>
            <li><a href='#contact' className=' hover:text-amber-600 cursor-pointer'>Contact</a></li>
        </ul>
    </nav>
  )
}
