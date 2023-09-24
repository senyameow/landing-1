import React from 'react'
import { bg_1, bg_2, bg_3, bg_4, bg_5, mainPepe, welcomeTo } from '../assets'


const BackSection_1 = () => {
    return (
        <>
            <img src={bg_1} alt="" className='w-[1537px] h-full object-cover absolute top-0 ' />
            <img src={bg_2} alt="" className='w-[1537px] h-full object-cover absolute top-0 mix-blend-screen text-[#39B54A] bg-[#39B54A]' />
            <img src={bg_2} alt="" className='w-full h-full  absolute top-0 mix-blend-screen' />

            <img src={bg_3} alt="" className='w-[800px] h-[811px] absolute top-[60%] -translate-y-1/2 left-[50%] -translate-x-1/2 ' />
            <img src={bg_4} alt="" className='w-full h-full text-[#009345] absolute top-0 opacity-100' />
            <img src={bg_5} alt="" className='w-full h-full text-[#009345] absolute top-0 opacity-100' />
            <img src={mainPepe} alt="" className='w-[784px] h-[700px] absolute -top-[0%] left-[23%] ' />
            <img src={welcomeTo} alt="" className='w-[784px] h-[600px] absolute -top-[10%] -left-[2%] ' />
        </>
    )
}

export default BackSection_1