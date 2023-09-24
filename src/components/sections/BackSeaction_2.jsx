import React from 'react'
import { left_cloud, pepe_2, right_cloud_1, right_cloud_2 } from '../../assets'


const BackSeaction_2 = () => {
    return (
        <>
            <img src={left_cloud} alt="" className='absolute h-[502px] w-[169px] top-[50%] -translate-y-1/2' />
            <img src={right_cloud_1} alt="" className='absolute h-[502px] w-[169px] top-[30%] right-0 -translate-y-1/2' />
            <img src={right_cloud_2} alt="" className='absolute w-[820px] h-[307px] bottom-0 right-0 z-10' />
            <img src={pepe_2} alt="" className='absolute w-[160px] h-[160px] bottom-[22%] right-0 ' />
        </>
    )
}

export default BackSeaction_2