import React, { useEffect } from 'react'
import { banner_1 } from '../assets'



const BannerMain = () => {

    const buttons_buy = document.querySelectorAll('.button__buy')


    useEffect(() => {
        buttons_buy.forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>')

    }, [])

    return (
        <div id='buy' className='absolute left-[50%] w-[1310px] h-[225px] -bottom-[9%] -translate-x-1/2 z-[100]'>
            <div className='relative flex items-center justify-center z-[200] top-6 '>
                <a href="/" className='md:w-fit button__buy px-[50px] py-[20px] flex items-center justify-center text-center rounded-full w-[324px] h-[85px] relative z-[100]'>
                    Buy $PAPA
                </a>
            </div>
            <div className='max-w-full mx-auto flex items-center justify-center px-[80px] sm:px-[100px] md:px-[200px] lg:px-[100px] xl:px-0'>
                <img src={banner_1} alt="" className='md:max-w-full md:max-h-full relative max-w-[45%] h-full px-[40px]' />
                <div className='absolute text_main text-[50px] sm:text-[80px] md:text-[130px] lg:text-[160px] top-22 left-[50%] -translate-x-1/2'>
                    PepePapaCoin
                </div>
            </div>

        </div >
    )
}

export default BannerMain