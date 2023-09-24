import React from 'react'
import { WhyText, banner_s3 } from '../assets'

const Banner_s3 = () => {
    return (
        <div className='pt-[190px] px-[250px] mx-auto z-50 '>
            <div className='relative z-[100]'>
                <img src={banner_s3} alt="" className='z-50' />
                <img src={WhyText} alt="" className='absolute top-[20%] left-[25%]' />
            </div>

        </div >
    )
}

export default Banner_s3