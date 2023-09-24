import React from 'react'
import { bomb, exclamation, heart, pepe_s4, rombs } from '../../assets'

const Section_4 = () => {
    return (
        <div className='h-[1800px] bg-white relative'>
            <div className='pt-[200px] pb-[150px]'>
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
                <div className='px-[180px] w-full relative z-50 mb-[165px]'>
                    <div className={` w-[830px] h-[170px] ml-auto bg-[#C4BBFA] flex items-start justify-center card px-[60px] `}>
                        <div className='text-white text-[100px] font-500 flex items-center justify-center leading-[96px] h-full'>
                            PepePapaCoin?
                        </div>
                    </div>

                </div>
                <img src={pepe_s4} alt="" className='absolute top-[22%] right-[190px] z-[0]' />

                <div className='px-[150px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[100px]'>

                    <div className={`w-[535px] relative h-[377px] bg-[#398147] card `}>
                        <div className='w-full h-full flex items-center justify-center'>
                            <img src={bomb} alt="" className='absolute left-[55%] -top-[140px] -translate-x-1/2 ' />
                            <div className='flex flex-col space-y-[40px]  font-500 max-w-[455px] mx-auto text-center text-white'>
                                <div className='text-[30px]'>
                                    Buy $PAPA:
                                </div>
                                <div className='text-[24px]'>
                                    Visit a uniswap and purchase $PAPA tokens to join our community and start your journey.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`w-[535px] relative h-[377px] bg-[#CDF4D3] card `}>
                        <div className='w-full h-full flex items-center justify-center'>
                            <img src={exclamation} alt="" className='absolute left-[50%] -top-[100px] -translate-x-1/2 ' />
                            <div className='flex flex-col space-y-[40px] font-500 max-w-[455px] mx-auto text-center text-black'>
                                <div className='text-[30px]'>
                                    HODL:
                                </div>
                                <div className='text-[24px]'>
                                    Hold onto your $PAPA tokens as a symbol of your support for fathers and the Pepe legacy.                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`w-[535px] relative h-[377px] bg-[#C4BBFA] card `}>
                        <div className='w-full h-full flex items-center justify-center'>
                            <img src={rombs} alt="" className='absolute left-[50%] -top-[0px] -translate-x-1/2 ' />
                            <div className='flex flex-col space-y-[40px]  font-500 max-w-[455px] mx-auto text-center text-white'>
                                <div className='text-[30px]'>
                                    Engage:
                                </div>
                                <div className='text-[24px]'>
                                    Participate in our community discussions, events, and giveaways. Share your stories of fatherhood and Pepe appreciation.                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`w-[535px] relative h-[377px] bg-[#E69B4D] card `}>
                        <div className='w-full h-full flex items-center justify-center'>
                            <img src={heart} alt="" className='absolute left-[50%] -top-[80px] -translate-x-1/2 ' />
                            <div className='flex flex-col space-y-[40px]  font-500 max-w-[455px] mx-auto text-center text-white'>
                                <div className='text-[30px]'>
                                    Spread the Word:
                                </div>
                                <div className='text-[24px]'>
                                    Participate in our community discussions, events, and giveaways. Share your stories of fatherhood and Pepe appreciation.                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='sm:px-[40px] xl:px-[265px] mx-auto mt-[100px] text__special text-center'>
                    Join the PepePapaCoin Community Today!
                </div>

            </div>
        </div>
    )
}

export default Section_4