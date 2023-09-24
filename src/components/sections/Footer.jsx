import React from 'react'
import { PiTelegramLogoThin, PiTwitterLogoThin } from 'react-icons/pi'
import { bg_footer, pepe_footer_1, pepe_footer_2 } from '../../assets'

const Footer = () => {
    return (
        <footer id='social' className='relative h-[1100px] bg-[#398147] w-full'>
            <img src={bg_footer} alt="" className='absolute mix-blend-screen left-[50%] w-[810px] h-[824px] top-[50px] -translate-x-1/2' />
            <img src={pepe_footer_1} alt="" className='absolute left-0 top-[10px] lg:top-[39px]' />
            <img src={pepe_footer_2} alt="" className='absolute right-0 sm:top-[450px] lg:top-[430px] z-[55]' />
            <div className='flex items-center justify-center w-full h-full'>
                <div className='flex flex-col items-center text-center max-w-[1107px]'>
                    <div className='text_footer leading-3 lg:leading-[60px] text-[60px] md:text-[50px] lg:text-[60px] mb-[20px] md:mb-[200px] lg:mb-[70px]'>
                        Join us in celebrating fathers and the iconic Pepe while participating in the crypto revolution with PepePapaCoin ($PAPA)!
                    </div>
                    <div className='flex items-center lg:gap-[120px] md:gap-[130px] gap-[160px]'>
                        <a href="https://t.me/pepepapacoin" className='lg:w-[168px] lg:h-[168px] w-[110px] h-[110px] aspect-square'>
                            <button class="button-arounder card"><PiTelegramLogoThin className='lg:text-[160px] text-[110px]' /></button>
                        </a>
                        <a href="https://twitter.com/pepepapacoin" className='lg:w-[168px] lg:h-[168px] w-[110px] h-[110px] aspect-square'>
                            <button class="button-arounder card"><PiTwitterLogoThin className='lg:text-[160px] text-[110px]' /></button>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer