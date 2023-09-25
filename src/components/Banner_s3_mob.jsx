import React from 'react'
import { banner_s3_mob } from '../assets'

const Banner_s3_mob = () => {
    return (
        <div className='my-[50px] w-[300px] h-[120px] lg:w-[385px] lg:h-[160px] lg:hidden block absolute top-[60px] translate-x-1/2 right-[50%] mx-auto'>
            <div className='relative w-full h-full'>
                <img src={banner_s3_mob} alt="" className='w-full h-full' />
                <div className='absolute w-[300px] h-[120px] top-0 lg:w-[345px] text-center lg:h-[160px] left-[10%] flex items-center justify-center flex-wrap break-words text-[30px] lg:text-[38px] text-white font-semibold'>
                    Why Choose PepePapaCoin?
                </div>
            </div>

        </div>
    )
}

export default Banner_s3_mob