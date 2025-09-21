import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react';
import { useClerk, UserButton, useUser} from '@clerk/clerk-react';

const Navbar = () => {

    const navigate = useNavigate();

    const { user } = useUser();
    const { openSignIn } = useClerk(); 

  return (
    <div className='fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32'>
          {/* Logo */}
        <div className='logo'>
          <h3 className='h-font text-4xl tracking-tighter font-medium text-blue-500'>
            Think.Ai
          </h3>
        </div>

        <h3   alt="logo" className='h-font text-4xl tracking-tighter font-medium text-blue-500 cursor-pointer' onClick={()=>navigate('/')}/>

        {
            user ? <UserButton /> : (
                <button onClick={openSignIn} className='bg-blue-500  flex items-center gap-2 rounded-full text-sm cursor-pointer  text-white px-10 py-2.5'>Get started <ArrowRight className='w-4 h-4'/></button>
            )
        }
    </div>
  )
}

export default Navbar