import React from 'react'
import { bg_1, bg_2, bg_3, bg_4, bg_5, mainPepe, welcomeTo, welcome_mobile } from '../assets'


const BackSection_1 = () => {
    return (
        <>
            <img src={bg_1} alt="" className='lg:w-[1537px] w-full h-screen object-cover absolute top-0 ' />
            <img src={bg_2} alt="" className='lg:w-[1537px] w-full h-screen object-cover absolute top-0 mix-blend-screen text-[#39B54A] bg-[#39B54A]' />
            <img src={bg_2} alt="" className='w-full h-full  absolute top-0 mix-blend-screen' />

            <img src={bg_3} alt="" className='lg:w-[800px] lg:h-[811px] sm:w-full sm:h-full absolute top-[60%] -translate-y-1/2 left-[50%] -translate-x-1/2 ' />
            <img src={bg_4} alt="" className='w-full h-full text-[#009345] absolute top-0 opacity-100' />
            <img src={bg_5} alt="" className='w-full h-full text-[#009345] absolute top-0 opacity-100' />
            <img src={mainPepe} alt="" className='w-[369px] h-[369px] sm:w-[450px] sm:h-[450px] lg:w-[779px] lg:h-[739px] absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 lg:top-[45%] lg:left-[50%] ' />
            <img src={welcomeTo} alt="" className='hidden md:w-[450px] md:h-[340px] md:top-0 lg:w-[784px] lg:h-[600px] md:block sm:absolute lg:-top-[10%] lg:-left-[2%] ' />
            <img src={welcome_mobile} alt="" className='absolute block md:hidden top-[0%] left-[10%] w-[270px] h-[227px]' />
        </>
    )
}

export default BackSection_1