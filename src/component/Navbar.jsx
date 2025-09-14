import React from 'react'
import { Button } from '../components/modern-ui/button'
import { ArrowRight } from 'lucide-react';


function Navbar() {
  return (
    <div className='w-full bg-transparent backdrop-blur-2xl  fixed'>
      <nav className='w-[90%] m-auto h-full flex justify-between items-center py-4'>
        <div className='logo'>
          <h3 className='h-font text-4xl tracking-tighter font-medium  text-blue-500'>Think.Ai</h3>
        </div>
        <div>
          {/* It's best practice to wrap `<a>` tags in `<li>` when they are direct children of a `<ul>` */}
          <ul className='flex gap-x-6'>
            {/* We apply the `group` class to the parent `<a>` tag */}
            <li>
              <a href="#" className='relative text-[16px] tracking-normal font-semibold p-font group hover:text-blue-500'>
                Home
                {/* This span is the underline. It's initially hidden (w-0) and expands on hover (group-hover:w-full) */}
                <span className='absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full'></span>
              </a>
            </li>
            <li>
              <a href="#" className='relative text-[16px] tracking-normal font-semibold p-font group hover:text-blue-500'>
                Features
                <span className='absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full'></span>
              </a>
            </li>
            <li>
              <a href="#" className='relative text-[16px] tracking-normal font-semibold p-font group hover:text-blue-500'>
                Tools
                <span className='absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full'></span>
              </a>
            </li>
            <li>
              <a href="#" className='relative text-[16px] tracking-normal font-semibold p-font group hover:text-blue-500'>
                Pricing
                <span className='absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full'></span>
              </a>
            </li>
            <li>
              <a href="#" className='relative text-[16px] tracking-normal font-semibold p-font group hover:text-blue-500'>
                Reviews
                <span className='absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full'></span>
              </a>
            </li>
          </ul>
        </div>
        <div>
        <Button className='w-fit text-white/89 p-font bg-blue-400 px-9 py-6 flex gap-4 rounded-4xl hover:gap-2 hover:bg-blue-500 transition-all duration-300' ><ArrowRight /> Get Started</Button>
      

        </div>
      </nav>
    </div>
  )
}

export default Navbar