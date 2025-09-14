import React from 'react';
import bgImage from '../assets/img/hero.png'; // or jpg/png in src folder
import { Button } from '../components/modern-ui/button'

function Home() {
    return (
        <div
            className="w-full h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            <div className='w-[90%] m-auto h-full flex flex-col justify-center items-center py-4 gap-6'>
                <h1 className='h-font text-[6vw] leading-[1] tracking-tighter font-medium  w-[60%] text-center '>Create amazing content
                    with <span className='text-blue-500 font-semibold' > AI tools</span></h1>
                <p className='p-font text-1xl leading-normal tracking-normal font-medium w-[60%] text-center'>Transform your content creation with our suite of premium AI tools. Write articles, generate images, and enhance your workflow.</p>
                <div className='flex gap-4'>
                    <Button className='w-fit text-white/89 p-font bg-blue-400 px-9 py-6 flex gap-4 rounded-4xl hover:gap-2 hover:bg-blue-500 transition-all duration-300' >Get Started</Button> 
                    <Button className='w-fit text-black/90 p-font bg-white/90 px-9 py-6 flex gap-4 rounded-4xl hover:gap-2 hover:bg-gray-100  transition-all duration-300' >Watch Demo</Button> 
                </div>
            </div>
        </div>
    );
}

export default Home;
