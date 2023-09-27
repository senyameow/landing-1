import React from 'react'
import { lamp, pepe_1_s5, pepe_2_s5 } from '../../assets'

const Section_5 = () => {
    return (
        <div className='min-h-[815px] relative w-full s__5 '>
            <div className='lg:px-[160px] px-[50px] py-[220px] mx-auto'>
                <div className='w-full xl:flex xl:items-center xl:justify-center mb-[50px]'>
                    <img src={pepe_1_s5} alt="" className='xl:-top-[30px] xl:relative xl:left-[40px] z-[50] absolute top-[10px] left-0  ' />

                    <div className={`max-w-[827px] min-h-[171px] rounded-[40px] border border-[#231F20] bg-[#FFF] relative z-[40] card`}>

                        <div className='flex items-center justify-center w-full h-full'>
                            <div className='py-[34px] px-[30px] text-center '>
                                <p className={`w-full mx-auto text-[20px] xl:text-[24px] text-black leading-[28px]`}>PapaCoin is more than just a cryptocurrency; it's a movement to celebrate fathers and the Pepe legacy. Join us in honoring fathers worldwide and embracing the power of crypto. Together, we can make <span className='secondary_text'>$PEPEPAPA the ultimate symbol</span> of fatherhood in the digital world.</p>
                            </div>

                        </div>


                    </div>
                    <img src={pepe_2_s5} alt="" className='xl:-top-[30px] xl:relative xl:right-[40px] z-[50] absolute bottom-[10px] right-0' />

                </div>
                <div className={`max-w-[661px] min-h-[181px] rounded-[40px] border border-[#231F20] bg-[#398147] relative z-50 ml-auto card`}>
                    <div className='flex items-center justify-center w-full h-full'>
                        <div className='py-[24px] px-[62px] flex flex-col items-center gap-[7px] justify-center'>
                            <img src={lamp} alt="" />
                            <p className={` w-full text-center mx-auto text-[24px] text-[#FFF]`}>Invest in PepePapaCoin ($PEPEPAPA) and be a part of the crypto revolution that celebrates fathers and the iconic Pepe!</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Section_5