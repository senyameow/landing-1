import React from 'react'
import { banner_s3, banner_s3_mob, bg_s3, pepe_s3 } from '../../assets'

import { asset_1, asset_2, asset_3, asset_4 } from '../../assets'
import Banner_s3 from '../Banner_s3'
import Banner_s3_mob from '../Banner_s3_mob'

const Section_3 = () => {
    return (
        <section className='min-h-[1468px] w-full bg-[#CDF4D3] relative overflow-hidden mx-auto'>
            <img src={bg_s3} alt="" className='w-[2811px] opacity-30 lg:opacity-50 absolute h-full  ' />
            <img src={pepe_s3} alt='' className='absolute w-[100px] lg:w-[200px] h-[90px] lg:h-[163px] top-[150px] lg:top-[343px]' />
            <Banner_s3 />
            <Banner_s3_mob />
            <div className='mt-[200px] lg:mt-0 py-[200px] px-[30px] lg:px-[240px] mx-auto h-full w-full z-50'>
                <div className='lg:flex lg:flex-col gap-[101px] w-full grid grid-cols-1 '>
                    <div className={`lg:w-[847px] w-full min-h-fit rounded-[40px] border border-[#231F20] bg-[#FFF] relative z-50`}>
                        <div className='flex items-center justify-center w-full h-full'>
                            <div className='py-[24px] lg:pl-[120px] px-[50px] pr-[20px] lg:pr-[70px] flex flex-col items-start gap-[7px] justify-center'>
                                <h3 className={`text-[#007436] text-[18px] lg:text-[24px] font-500 `}>A Tribute to Fathers:</h3>
                                <p className={`max-w-[660px] mx-auto text-[18px] lg:text-[24px] text-[#231F20]`}>While we celebrate fatherhood, PapaCoin also offers exciting profit potential for investors. As the crypto market evolves, $PAPA aims to become a valuable digital asset.</p>
                            </div>

                        </div>
                        <div className='absolute -top-[50px] lg:-top-[40%] -left-[7%] lg:w-full w-[85%] h-[80%] lg:h-full'>
                            <img src={asset_1} alt="" className='w-[87px] h-[107px] lg:w-[170px] lg:h-[150px]' />
                        </div>
                    </div>
                    <div className={`lg:w-[847px] w-full min-h-fit rounded-[40px] border border-[#231F20] bg-[#398147] relative z-50`}>
                        <div className='flex items-center justify-center w-full h-full'>
                            <div className='py-[24px] lg:pl-[120px] px-[50px] pr-[20px] lg:pr-[70px] flex flex-col items-start gap-[7px] justify-center'>
                                <h3 className={`text-[#FFF] text-[18px] lg:text-[24px] font-500 `}>Profit Potential:</h3>
                                <p className={`max-w-[660px] mx-auto text-[18px] lg:text-[24px] text-[#FFF]`}>While we celebrate fatherhood, PapaCoin also offers exciting profit potential for investors. As the crypto market evolves, $PAPA aims to become a valuable digital asset.</p>
                            </div>

                        </div>
                        <div className='absolute -top-[50px] lg:-top-[40%] -left-[7%] lg:w-full w-[85%] h-[80%] lg:h-full'>
                            <img src={asset_2} alt="" className='w-[87px] h-[107px] lg:w-[170px] lg:h-[150px]' />
                        </div>
                    </div>
                    <div className={`lg:w-[847px] w-full min-h-fit rounded-[40px] border border-[#231F20] bg-[#FFF] relative z-50`}>
                        <div className='flex items-center justify-center w-full h-full'>
                            <div className='py-[24px] lg:pl-[120px] px-[50px] pr-[20px] lg:pr-[70px] flex flex-col items-start gap-[7px] justify-center'>
                                <h3 className={`text-[#007436] text-[18px] lg:text-[24px] font-500 `}>Community-Driven:</h3>
                                <p className={`max-w-[660px] mx-auto text-[18px] lg:text-[24px] text-[#231F20]`}>PepePapaCoin is built on the principles of community and unity. Join our passionate community of fathers, crypto enthusiasts, and Pepe fans who believe in the power of $PAPA.</p>
                            </div>

                        </div>
                        <div className='absolute -top-[50px] lg:-top-[40%] -left-[7%] lg:w-full w-[85%] h-[80%] lg:h-full'>
                            <img src={asset_3} alt="" className='w-[87px] h-[107px] lg:w-[170px] lg:h-[150px]' />
                        </div>
                    </div>
                    <div className={`lg:w-[847px] w-full min-h-fit rounded-[40px] border border-[#231F20] bg-[#398147] relative z-50`}>
                        <div className='flex items-center justify-center w-full h-full'>
                            <div className='py-[24px] lg:pl-[120px] px-[50px] pr-[20px] lg:pr-[70px] flex flex-col items-start gap-[7px] justify-center'>
                                <h3 className={`text-[#FFF] text-[18px] lg:text-[24px] font-500 `}>Pepe's Legacy:</h3>
                                <p className={`max-w-[660px] mx-auto text-[18px] lg:text-[24px] text-[#FFF]`}>PepePapaCoin is not only a tribute to fathers but also to the world-famous Pepe. We celebrate the enduring popularity of this iconic character in the crypto world.</p>
                            </div>

                        </div>
                        <div className='absolute -top-[35%] lg:-top-[40%] -left-[5%] w-[70%] h-[70%] lg:w-full lg:h-full'>
                            <img src={asset_4} alt="" className='w-[87px] h-[107px] lg:w-[150px] lg:h-[150px]' />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Section_3