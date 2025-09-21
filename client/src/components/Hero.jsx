import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets';

const Hero = () => {

    const navigate = useNavigate();

  return (
    <div className='px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen'>

        <div className='text-center mb-6'>
            <h1 className='h-font text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-medium tracking-tighter mx-auto leading-[1.2]'>Create amazing content <br /> with <span className='text-[color:var(--color-primary)]'>AI tools</span> </h1>
            <p className='p-font mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-600'>Transform your content creation with our suite of primium AI tools, Write articles, generate images, and enhance your workflow.</p>
        </div>

        <div className='flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs'>
            <button onClick={()=> navigate('/ai')} className='bg-blue-500 text-white px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer'>Start creating now</button>
            <button className='bg-white px-10 py-3 rounded-lg border border-gray-300 hover:scale-102 active:scale-95 transition cursor-pointer'>Watch demo</button>
        </div>
         <div className="relative mt-16 sm:mt-20 text-center w-full max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                    <p className="text-xs sm:text-sm font-semibold text-gray-500 tracking-widest mb-4">TRUSTED BY OVER 10,000+ USERS</p>
                     <div className="flex justify-center items-center -space-x-4">
                         <img className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-white bg-gray-100 object-cover" src="https://placehold.co/48x48/e2e8f0/334155?text=P" alt="User Priya" title="Priya"/>
                         <img className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-white bg-gray-100 object-cover" src="https://placehold.co/48x48/e2e8f0/334155?text=R" alt="User Rohan" title="Rohan"/>
                         <img className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-white bg-gray-100 object-cover" src="https://placehold.co/48x48/e2e8f0/334155?text=S" alt="User Sneha" title="Sneha"/>
                         <img className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-white bg-gray-100 object-cover" src="https://placehold.co/48x48/e2e8f0/334155?text=A" alt="User Amit" title="Amit"/>
                         <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-semibold text-sky-600">
                             10k+
                         </div>
                     </div>

    </div>
  )
}

export default Hero
