import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between mt-6 px-16  h-12'>
            <div class="flex items-center justify-center space-x-1 ">
                <img className='' src="https://i.ibb.co/LxHh8CY/Rectangle-removed.png" alt="" />
                <div class="text-center text-4xl text-[#06286E] font-medium">Hygge<span className='text-[#06286E] font-extrabold'>X</span></div>
            </div>
            <div className='flex items-center justify-center space-x-10'>
                <ul className='flex space-x-10'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/flashcard'>Flashcard</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
                </ul>
                <button type="button" className="text-white rounded-full px-10 py-2 bg-gradient-to-t from-[#164EC0] to-[#06286E]  ">
                    Login
                </button>
            </div>
        </div>
    );
};

export default Navbar;