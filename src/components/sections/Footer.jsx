import React from 'react'
import { PiTelegramLogoThin, PiTwitterLogoThin } from 'react-icons/pi'
import { bg_footer, pepe_footer_1, pepe_footer_2 } from '../../assets'

const Footer = () => {
    return (
        <footer id='social' className='relative h-[900px] sm:h-[1000px] lg:h-[950px] bg-[#398147] w-full'>
            <img src={bg_footer} alt="" className='absolute mix-blend-screen left-[50%] w-[810px] h-[824px] top-[50px] -translate-x-1/2' />
            <img src={pepe_footer_1} alt="" className='absolute left-0 top-[20px] lg:top-[39px] w-[149px]' />
            <img src={pepe_footer_2} alt="" className='bottom-[5%] w-[139px] absolute right-0 lg:top-[430px] z-[55]' />
            <div className='flex items-center justify-center w-full h-full'>
                <div id='zxc' className='flex flex-col items-center text-center max-w-[1107px]'>
                    <div className='text_footer leading-3 lg:leading-[60px] text-[45px] md:text-[50px] lg:text-[60px] mb-[20px] md:mb-[200px] lg:mb-[70px]'>
                        Join us in celebrating fathers and the iconic Pepe while participating in the crypto revolution with PepePapaCoin ($PAPA)!
                    </div>
                    <div className='justify-around flex items-center lg:gap-[120px] md:gap-[130px] gap-[100px]'>
                        <a href="https://t.me/pepepapacoin" className='lg:w-[168px] lg:h-[168px] w-[110px] h-[110px] aspect-square'>
                            <button class="button-arounder card"><PiTelegramLogoThin className='lg:text-[160px] text-[70px]' /></button>
                        </a>
                        <a href="https://twitter.com/pepepapacoin" className='lg:w-[168px] lg:h-[168px] w-[110px] h-[110px] aspect-square'>
                            <button class="button-arounder card"><PiTwitterLogoThin className='lg:text-[160px] text-[70px]' /></button>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer