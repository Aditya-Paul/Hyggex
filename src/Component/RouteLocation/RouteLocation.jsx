import React from 'react';
import { GoHome } from "react-icons/go";
import { FaChevronRight } from "react-icons/fa";
const RouteLocation = () => {
    return (
        <div className='flex justify-center items-center space-x-2 pl-14'>
            <div ><GoHome style={{ fontSize: '1.65rem' }}/></div>
            <div className='p-1'><FaChevronRight /></div>
            <h1 className='text-[#696671]'>Flashcard</h1>
            <div className='p-1'><FaChevronRight /></div>
            <h1 className='text-[#696671]'>Mathematics</h1>
            <div className='p-1'><FaChevronRight /></div>
            <h1 className='text-[#06286E] text-lg font-bold'>Relation and Function</h1>
        </div>
    );
};

export default RouteLocation;