import React from 'react'

export default function Hero() {

  function handleClick() {
    
  }

  return (
    <section className="flex h-screen">
        <div className='bg-hero-background bg-no-repeat bg-contain w-1/3 max-sm:hidden'>
        
        </div>
        <div className='bg-black text-white flex-1 my-auto px-10 max-sm:bg-hero-background max-sm:my-0'>
            <h1 className='text-5xl max-sm:pt-20'>Embrace Sustainable Living with GreenLiving Solutions</h1>
            {/* <button className='border-solid border border-white rounded-lg my-4 p-3 hover:cursor-pointer hover:border-amber-600'>Learn More</button> */}
            <h1 className='my-8'>
              <a href='#about' className='border-solid border border-white rounded-lg py-4 mt-20 p-3 hover:cursor-pointer hover:border-amber-600'>Learn More</a>
            </h1>
        </div>
        
    </section>
  )
}
