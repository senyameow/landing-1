import React, { useEffect } from 'react'
import { banner_1 } from '../assets'



const BannerMain = () => {

    const buttons_buy = document.querySelectorAll('.button__buy')


    useEffect(() => {
        buttons_buy.forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>')

    }, [])

    return (
        <div className='absolute left-[50%] w-[1310px] h-[225px] -bottom-[5%] -translate-x-1/2 z-50'>
            <div className='relative flex items-center justify-center z-[100] top-6 '>
                <a href="/" className='w-fit button__buy px-[50px] py-[20px] rounded-full'>
                    Buy $PAPA
                </a>
            </div>
            <img src={banner_1} alt="" className='w-full h-full relative' />
            <div className='absolute text_main text-[160px] top-20 left-[50%] -translate-x-1/2'>
                PepePapaCoin
            </div>

        </div >
    )
}

export default BannerMain