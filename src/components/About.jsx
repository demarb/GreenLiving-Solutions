import React from 'react'
import TeamGraphic from "../assets/about-us.jpg"

export default function About() {
  return (
    <section id='about' className='bg-white text-black px-40 py-14 max-sm:px-5'>
        <div className='flex items-center max-sm:flex-col'>
            <img src={TeamGraphic} className='w-1/2 rounded-2xl max-sm:w-full' alt=" group of people" />
            <div className='pl-20 max-sm:pl-5 max-sm:pt-5'>
                <h1 className='text-3xl text-amber-600'>What We Do?</h1>
                <p>
                    At GreenLiving Solutions, we're dedicated to transforming the way you live by offering:
                </p>
                <ul className='py-5'>
                    <li><span className='font-bold'>Solar Power: </span>Generate clean energy through solar panel installations.</li>

                    <li><span className='font-bold'>Water Innovation: </span>Conserve resources with rainwater harvesting systems.</li>

                    <li><span className='font-bold'>Energy Efficiency: </span>Upgrade to eco-friendly appliances and lighting.</li>

                    <li><span className='font-bold'>Natural Landscaping: </span>Create lush, sustainable landscapes.</li>
                </ul>
                
                <p>Create lush, sustainable landscapes.</p>

            </div>
        </div>
        

    </section>
  )
}
