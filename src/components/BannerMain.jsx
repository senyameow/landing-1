import React from 'react'
import { banner_1 } from '../assets'
import { PepePapaCoin } from '../assets'

const BannerMain = () => {
    return (
        <div className='absolute left-[50%] w-[1310px] h-[225px] -bottom-[20%] -translate-x-1/2'>
            <img src={banner_1} alt="" className='w-full h-full relative' />
            <img src={PepePapaCoin} alt="" className='absolute top-[18%] left-[3%]' />
        </div >
    )
}

export default BannerMain