import React from 'react'
import { bomb, exclamation, heart, rombs } from '../../assets'
import Section_4_mob_start from './Section_4_mob'
import Section_4_start from './Section_4_start'

const Section_4 = () => {
    return (
        <div className='min-h-[1800px] bg-white relative'>
            <div className='pt-[200px] pb-[150px]'>
                <Section_4_mob_start />
                <Section_4_start />

                <div className='lg:px-[150px] px-[50px] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-[100px] items-center justify-center'>

                    <div className='flex items-center w-full justify-center'>
                        <div className={`lg:w-[535px] lg:h-[377px] w-full h-[400px] relative bg-[#398147] card `}>
                            <div className='w-full h-full flex items-center justify-center'>
                                <img src={bomb} alt="" className='absolute left-[55%] -top-[140px] -translate-x-1/2 ' />
                                <div className='flex flex-col space-y-[15px] lg:space-y-[40px]  font-500 px-[20px] lg:px-0 lg:max-w-[455px] mx-auto text-center text-white'>
                                    <div className='lg:text-[30px] text-[60px]'>
                                        Buy $PAPA:
                                    </div>
                                    <div className='lg:text-[24px] text-[25px] leading-[30px] lg:leading-normal lg:px-6 px-0 '>
                                        Visit a uniswap and purchase $PAPA tokens to join our community and start your journey.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center w-full justify-center'>
                        <div className={`lg:w-[535px] lg:h-[377px] w-full h-[400px] relative bg-[#CDF4D3] card `}>
                            <div className='w-full h-full flex items-center justify-center'>
                                <img src={exclamation} alt="" className='absolute left-[50%] -top-[100px] -translate-x-1/2 ' />
                                <div className='flex flex-col space-y-[15px] lg:space-y-[40px] font-500 px-[20px] lg:px-0 lg:max-w-[455px] mx-auto text-center text-black'>
                                    <div className='lg:text-[30px] text-[60px]'>
                                        HODL:
                                    </div>
                                    <div className='lg:text-[24px] text-[25px] leading-[30px] lg:leading-normal lg:px-6 px-0 '>
                                        Hold onto your $PAPA tokens as a symbol of your support for fathers and the Pepe legacy.                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center w-full justify-center'>
                        <div className={`lg:w-[535px] lg:h-[377px] w-full h-[400px] relative bg-[#C4BBFA] card `}>
                            <div className='w-full h-full flex items-center justify-center'>
                                <img src={rombs} alt="" className='absolute left-[50%] -top-[0px] -translate-x-1/2 ' />
                                <div className='flex flex-col space-y-[15px] lg:space-y-[40px]  font-500 px-[20px] lg:px-0 lg:max-w-[455px] mx-auto text-center text-white'>
                                    <div className='lg:text-[30px] text-[60px]'>
                                        Engage:
                                    </div>
                                    <div className='lg:text-[24px] text-[25px] leading-[30px] lg:leading-normal lg:px-6 px-0 '>
                                        Participate in our community discussions, events, and giveaways. Share your stories of fatherhood and Pepe appreciation.                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center w-full justify-center'>
                        <div className={`lg:w-[535px] lg:h-[377px] w-full h-[400px] relative bg-[#E69B4D] card `}>
                            <div className='w-full h-full flex items-center justify-center'>
                                <img src={heart} alt="" className='absolute left-[50%] -top-[80px] -translate-x-1/2 ' />
                                <div className='flex flex-col space-y-[15px] lg:space-y-[40px]  font-500 px-[20px] lg:px-0 lg:max-w-[455px] mx-auto text-center text-white'>
                                    <div className='lg:text-[30px] text-[60px]'>
                                        Spread the Word:
                                    </div>
                                    <div className='lg:text-[24px] text-[25px] leading-[30px] lg:leading-normal lg:px-6 px-0 '>
                                        Participate in our community discussions, events, and giveaways. Share your stories of fatherhood and Pepe appreciation.                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='sm:px-[40px] px-[20px] lg:px-[265px] mx-auto mt-[100px] text__special text-[55px] md:text-[60px] lg:text-[70px] text-center'>
                    Join the PepePapaCoin Community Today!
                </div>

            </div>
        </div>
    )
}

export default Section_4