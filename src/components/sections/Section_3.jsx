import React from 'react'
import { banner_s3, bg_s3, pepe_s3 } from '../../assets'

import { asset_1, asset_2, asset_3, asset_4 } from '../../assets'
import Banner_s3 from '../Banner_s3'

const Section_3 = () => {
    return (
        <section className='h-[1868px] w-full bg-[#CDF4D3] relative overflow-hidden'>
            <img src={bg_s3} alt="" className='w-[2811px] opacity-50 absolute ' />
            <img src={pepe_s3} alt='' className='absolute w-[200px] h-[163px] top-[343px]' />
            <Banner_s3 />
            <div className='py-[200px] px-[300px] mx-auto h-full w-full z-50'>
                <div className='flex flex-col gap-[101px]'>
                    <div className={`w-[847px] h-[171px] rounded-[40px] border border-[#231F20] bg-[#FFF] relative z-50`}>
                        <div className='flex items-center justify-center w-full h-full'>
                            <div className='py-[24px] pl-[120px] pr-[70px] flex flex-col items-start gap-[7px] justify-center'>
                                <h3 className={`text-[#007436] text-[24px] font-500 `}>A Tribute to Fathers:</h3>
                                <p className={`max-w-[660px] mx-auto text-[24px] text-[#231F20]`}>While we celebrate fatherhood, PapaCoin also offers exciting profit potential for investors. As the crypto market evolves, $PAPA aims to become a valuable digital asset.</p>
                            </div>

                        </div>
                        <div className='absolute -top-[40%] -left-[8%] w-full h-full'>
                            <img src={asset_1} alt="" />
                        </div>
                    </div>
                    <div className={`w-[847px] h-[171px] rounded-[40px] border border-[#231F20] bg-[#398147] relative z-50`}>
                        <div className='flex items-center justify-center w-full h-full'>
                            <div className='py-[24px] pl-[120px] pr-[70px] flex flex-col items-start gap-[7px] justify-center'>
                                <h3 className={`text-[#FFF] text-[24px] font-500 `}>Profit Potential:</h3>
                                <p className={`max-w-[660px] mx-auto text-[24px] text-[#FFF]`}>While we celebrate fatherhood, PapaCoin also offers exciting profit potential for investors. As the crypto market evolves, $PAPA aims to become a valuable digital asset.</p>
                            </div>

                        </div>
                        <div className='absolute -top-[40%] -left-[8%] w-full h-full'>
                            <img src={asset_2} alt="" />
                        </div>
                    </div>
                    <div className={`w-[847px] h-[171px] rounded-[40px] border border-[#231F20] bg-[#FFF] relative z-50`}>
                        <div className='flex items-center justify-center w-full h-full'>
                            <div className='py-[24px] pl-[120px] pr-[70px] flex flex-col items-start gap-[7px] justify-center'>
                                <h3 className={`text-[#007436] text-[24px] font-500 `}>Community-Driven:</h3>
                                <p className={`max-w-[660px] mx-auto text-[24px] text-[#231F20]`}>PepePapaCoin is built on the principles of community and unity. Join our passionate community of fathers, crypto enthusiasts, and Pepe fans who believe in the power of $PAPA.</p>
                            </div>

                        </div>
                        <div className='absolute -top-[40%] -left-[8%] w-full h-full'>
                            <img src={asset_3} alt="" />
                        </div>
                    </div>
                    <div className={`w-[847px] h-[171px] rounded-[40px] border border-[#231F20] bg-[#398147] relative z-50`}>
                        <div className='flex items-center justify-center w-full h-full'>
                            <div className='py-[24px] pl-[120px] pr-[70px] flex flex-col items-start gap-[7px] justify-center'>
                                <h3 className={`text-[#FFF] text-[24px] font-500 `}>Pepe's Legacy:</h3>
                                <p className={`max-w-[660px] mx-auto text-[24px] text-[#FFF]`}>PepePapaCoin is not only a tribute to fathers but also to the world-famous Pepe. We celebrate the enduring popularity of this iconic character in the crypto world.</p>
                            </div>

                        </div>
                        <div className='absolute -top-[40%] -left-[4%] w-full h-full'>
                            <img src={asset_4} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Section_3