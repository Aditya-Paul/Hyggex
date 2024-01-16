import React from 'react';
import { RiRestartLine } from "react-icons/ri";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdOutlineCropFree } from "react-icons/md";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { MdOutlineLightbulb } from "react-icons/md";
const Study = () => {

    return (
        <div>
            <div className='pt-8 relative flex items-center justify-center '>
                <div className=' text-[#FFF] text-3xl font-bold h-[390px] w-[700px] bg-gradient-to-r from-[#164EC0] to-[#06286E] rounded-3xl flex items-center justify-center '>
                    9 + 6 + 7x - 2x - 3
                </div>

                <div className='absolute top-8'>
                    <div className='pt-8 flex items-center justify-center'>
                        <div className='flex items-center justify-between space-x-44'>
                            <div className='pr-96'><MdOutlineLightbulb style={{ color: 'white', fontSize: '1.875rem' }} /></div>
                            <div className=''><HiMiniSpeakerWave  style={{ color: 'white', fontSize: '1.875rem' }} /></div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='pt-8 flex justify-center'>
                <div className='flex items-center justify-between space-x-44'>
                    <div ><RiRestartLine style={{ color: 'blue', fontSize: '1.875rem' }} /></div>
                    <div className='flex items-center space-x-10'>
                        <div>
                            <FaChevronLeft style={{ background: 'linear-gradient(to right, #164EC0, #06286E)', color: 'white', borderRadius: '9999px', fontSize: '1.875rem', padding: '4px' }} />
                        </div>

                        <div>
                            <p className='text-2xl font-semibold text-[#202B37]'>01/10</p>
                        </div>

                        <div>
                            <FaChevronRight style={{ background: 'linear-gradient(to right, #164EC0, #06286E)', color: 'white', borderRadius: '9999px', fontSize: '1.875rem', padding: '4px' }} />
                        </div>
                    </div>
                    <div><MdOutlineCropFree style={{ color: 'blue', fontSize: '1.875rem' }} /></div>
                </div>
            </div>
        </div>
    );
};

export default Study;