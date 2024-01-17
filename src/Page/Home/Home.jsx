import React from 'react';
import RouteLocation from '../../Component/RouteLocation/RouteLocation.jsx';
import Option from '../../Component/Option/Option.jsx';
import Study from '../../Component/Study/Study.jsx';
import { FaPlus,FaChevronDown } from "react-icons/fa6";
import Faq from '../../Component/FAQ/Faq.jsx';

const Home = () => {
    return (
        <div>
            {/* display route location */}
            <div className='flex mt-12'>
                <RouteLocation></RouteLocation>
            </div>

            {/* Text */}
            <h1 className='pt-12 px-14 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-[#164EC0] to-[#06286E]'>Relations and Functions ( Mathematics )</h1>

            {/* option */}
            <Option></Option>

            {/* study */}
            <Study></Study>

            {/* flashcard */}
            <div className='pt-20 px-14'>
                <div className=' flex justify-between items-center'>
                    <div className='flex items-center space-x-5'>
                        <div className=''>
                            <img className='shadow-2xl p-4 rounded-full' src="https://i.ibb.co/LxHh8CY/Rectangle-removed.png" alt="" />
                        </div>

                        <div >
                            <div>
                                <p className='text-[#696671] text-xs font-bold'>Published by</p>
                            </div>
                            <div>
                                <h1 class=" text-4xl text-[#06286E] font-medium">Hygge<span className='text-[#06286E] font-extrabold'>X</span></h1>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center items-center space-x-2'>
                        <div><FaPlus style={{ background: 'linear-gradient(to right, #164EC0, #06286E)', color: 'white', borderRadius: '9999px', fontSize: '1.875rem', padding: '4px' }}/></div>
                        <div><h1 className='text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-t from-[#164EC0] to-[#06286E]'>Create Flashcard</h1></div>
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <Faq></Faq>
        </div>
    );
};

export default Home;