import React from 'react'
import { WhyText, banner_s3 } from '../assets'

const Banner_s3 = () => {
    return (
        <div className='pt-[190px] px-[250px] mx-auto z-50 flex items-center'>
            <div className='relative z-[100]'>
                <img src={banner_s3} alt="" className='z-50' />
                {/* <img src={WhyText} alt="" className='absolute top-[20%] left-[25%]' /> */}
                <div className='absolute lg:text-[80px] md:text-[50px] sm:leading-8 sm:text-[25px] xl:text-[100px] left-[24%] top-[15%] md:leading-[60px] xl:leading-[96.5px]'>
                    Why Choose PepePapaCoin?
                </div>
            </div>

        </div >
    )
}

export default Banner_s3