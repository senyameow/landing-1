import React from 'react'
import { pepe_s4 } from '../../assets'

const Section_4_start = () => {
    return (
        <div className='lg:hidden flex-col px-[50px] flex mx-auto items-center justify-center'>
            <div className=''>
                <div className={`max-w-[650px] h-[252px] bg-[#C4BBFA] flex items-start justify-center card px-[60px] `}>
                    <div className='text-white relative leading-[60px] text-[60px] text-center lg:text-start sm:text-[70px] md:text-[80px] lg:text-[100px] font-500 flex items-center justify-center lg:leading-[96px] h-full'>
                        How to Get Started
                    </div>
                </div>
            </div>
            <div className=''>
                <div className={`max-w-[322px] -mt-[20px]  h-[151px] bg-[#E69B4D] flex items-start justify-center card px-[60px] z-[50]`}>
                    <div className='text-black relative text-[60px] sm:text-[70px] md:text-[80px] lg:text-[100px] font-500 flex items-center justify-center lg:leading-[96px] h-full'>
                        With
                    </div>
                </div>
            </div>
            <div className=' w-full relative z-50 mb-[165px]'>
                <div className={` max-w-[630px] h-[170px] bg-[#C4BBFA] flex items-start justify-center card `}>
                    <div className='text-white text-[40px]  sm:text-[70px] md:text-[80px] lg:text-[100px] break-words font-500 flex items-center justify-center lg:leading-[96px] h-full'>
                        PepePapaCoin?
                    </div>
                </div>
            </div>
            <img src={pepe_s4} alt="" className='absolute top-[15%] right-[35px] z-[0] w-[125px] h-[110px] -rotate-12' />

        </div>
    )
}

export default Section_4_start