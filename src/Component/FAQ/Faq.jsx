import React from 'react';
// import { FaChevronDown } from "react-icons/fa6";
const Faq = () => {
    return (
        <div className='pt-28 px-14 pb-[150px]'>
            <div>
                <h1 className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-[#164EC0] to-[#06286E]'>FAQ</h1>
            </div>
            <div className='flex-col space-y-8 pt-12'>
                {/* <div className='border-2 border-[#217EEC] px-6 h-[55px] w-[840px] rounded-xl flex items-center justify-between'>
                    <h1 className='text-[#28262C] text-base font-semibold'>Can education flashcards be used for all age groups?</h1>
                    <h1><FaChevronDown /></h1>
                </div>
                <div className='border-2 border-[#217EEC] px-6 h-[55px] w-[840px] rounded-xl flex items-center justify-between'>
                    <h1 className='text-[#28262C] text-base font-semibold'>How do education flashcards work?</h1>
                    <h1><FaChevronDown /></h1>
                </div>
                <div className='border-2 border-[#217EEC] px-6 h-[55px] w-[840px] rounded-xl flex items-center justify-between'>
                    <h1 className='text-[#28262C] text-base font-semibold'>Can education flashcards be used for test preparation?</h1>
                    <h1><FaChevronDown /></h1>
                </div> */}

                <div className="collapse collapse-arrow border-2 border-[#217EEC] w-[840px] ">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-[#28262C] text-base font-semibold">
                Can education flashcards be used for all age groups?
                </div>
                <div className="collapse-content">
                    <p>Yes</p>
                </div>
            </div>
            <div className="collapse collapse-arrow border-2 border-[#217EEC] w-[840px] ">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-[#28262C] text-base font-semibold">
                How do education flashcards work?
                </div>
                <div className="collapse-content">
                    <p>Have to explore.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow border-2 border-[#217EEC] w-[840px] ">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-[#28262C] text-base font-semibold">
                Can education flashcards be used for test preparation?
                </div>
                <div className="collapse-content">
                    <p>Yes</p>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Faq;