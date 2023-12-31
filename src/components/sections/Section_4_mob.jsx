import React from 'react'
import { pepe_s4 } from '../../assets'

const Section_4_mob_start = () => {
    return (
        <div className='hidden lg:flex lg:flex-col'>
            <div className='ml-[180px]'>
                <div className={`w-[650px] h-[252px] bg-[#C4BBFA] flex items-start justify-center card px-[60px] `}>
                    <div className='text-white relative text-[100px] font-500 flex items-center justify-center leading-[96px] h-full'>
                        How to Get Started
                    </div>
                </div>
            </div>
            <div className='ml-[628px]'>
                <div className={`w-[322px] -mt-[50px] -rotate-[28deg] h-[151px] bg-[#E69B4D] flex items-start justify-center card px-[60px] `}>
                    <div className='text-black relative text-[100px] font-500 flex items-center justify-center leading-[96px] h-full'>
                        With
                    </div>
                </div>
            </div>
            <div className='px-[180px] w-full relative z-50 mb-[165px] flex'>
                <div className={` w-[830px] h-[170px] ml-auto bg-[#C4BBFA] flex items-center justify-center card px-[30px] `}>
                    <div className='text-white text-[100px] font-500 flex items-center justify-center leading-[96px] h-full'>
                        PepePapaCoin?
                    </div>
                </div>

            </div>

            <img src={pepe_s4} alt="" className='absolute lg:top-[19%] right-[15%] sm:right-[11%] md:hidden xl:block xl:right-[190px] z-[0]' />
        </div>
    )
}

export default Section_4_mob_start