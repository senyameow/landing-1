import React from 'react'
import { cloud_l1, cloud_l2, cloud_r1, cloud_r2, full_diagram, star } from '../../assets'
import Cards_Section_5 from '../Cards_Section_5'


const Section_6 = () => {
    return (
        <section className='min-h-[3595px] pb-[100px] w-full bg-white relative' id='tokenomics'>
            <img src={cloud_l1} alt="" className='absolute hidden xl:block left-0 top-[900px] w-[129px] h-[345px]' />
            <img src={cloud_r1} alt="" className='absolute hidden xl:block right-0 top-[1450px] w-[214px] h-[572px]' />
            <img src={cloud_l2} alt="" className='absolute hidden xl:block left-0 top-[2126px] w-[307px] h-[820px]' />
            <div className='px-[20px] lg:px-[60px] mx-auto'>
                <div className='pt-[200px] mx-auto lg:block flex flex-col items-center justify-center '>
                    <div className={`max-w-[601px] h-[221px] rounded-[40px] border border-[#231F20] bg-[#E69B4D] relative z-[40] lg:ml-[198px]`}>
                        <div className='flex items-center justify-center w-full h-full card'>
                            <div className='py-[34px] px-[70px] text-center'>
                                <p className={`w-full mx-auto text-[50px] sm:text-[60px] md:text-[70px] text-black text-center lg:text-start`}>PepePapaCoin ($PAPA) </p>
                            </div>

                        </div>
                    </div>
                    <div className={`max-w-[650px] h-[157px] rounded-[40px] border border-black bg-[#C4BBFA] relative z-[40] lg:ml-[585px] lg:-mt-[40px]`}>
                        <div className='flex items-center justify-center w-full h-full card'>
                            <div className='py-[34px] px-[70px] text-center'>
                                <p className={`w-full mx-auto text-[50px] sm:text-[85px] md:text-[100px] text-white text-start`}>Tokenomics</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='mr-auto lg:mt-[40px] mt-[60px]'>
                    <div className='flex flex-col items-start gap-[20px] max-w-[90%]'>
                        <div className='flex flex-row items-center gap-[20px]'>
                            <img src={star} alt="" className='w-[33px] h-[34px]' />
                            <span className='lg:text-[24px] text-[26px] leading-[29px] font-400 '>At PepePapaCoin, we've carefully designed our tokenomics to <div></div>
                                ensure that our community and mission remain at the forefront.</span>
                        </div>
                        <div className='flex flex-row items-center gap-[20px]'>
                            <img src={star} alt="" className='w-[33px] h-[34px]' />
                            <span className='lg:text-[24px] text-[26px] leading-[29px] font-400 '>PepePapaCoin ($PAPA) is more than just a cryptocurrency; <div></div>
                                it's a tribute to fathers and the legendary Pepe.</span>
                        </div>
                        <div className='flex flex-row items-center gap-[20px]'>
                            <img src={star} alt="" className='w-[33px] h-[34px]' />
                            <span className='lg:text-[24px] text-[26px] leading-[29px] font-400 '>Here's how we allocate the token's resources:</span>
                        </div>
                    </div>
                </div>
                <div className='w-full xl:ml-auto mt-[60px] mb-[116px]'>
                    <img src={full_diagram} alt="" className='w-[933px] h-[806px] ml-auto' />
                </div>
                <div className='md::px-[140px] sm:px-[40px] px-[30px] lg:px-[230px] mx-auto relative z-[100]'>
                    <Cards_Section_5 />
                </div>
                <img src={cloud_r2} alt="" className='absolute hidden xl:block right-0 bottom-0 w-[1226px] h-[472px] z-[40]' />

            </div>

        </section>
    )
}

export default Section_6