import React from 'react'
import { PiTelegramLogoThin, PiTwitterLogoThin } from 'react-icons/pi'
import { bg_footer, pepe_footer_1, pepe_footer_2 } from '../../assets'

const Footer = () => {
    return (
        <footer id='social' className='relative h-[1000px] bg-[#398147] w-full'>
            <img src={bg_footer} alt="" className='absolute mix-blend-screen left-[50%] w-[810px] h-[824px] top-[50px] -translate-x-1/2' />
            <img src={pepe_footer_1} alt="" className='absolute left-0 top-[39px]' />
            <img src={pepe_footer_2} alt="" className='absolute right-0 top-[310px]' />
            <div className='flex items-center justify-center w-full h-full'>
                <div className='flex flex-col items-center text-center max-w-[1107px]'>
                    <div className='text_footer text-[24px] md:text-[40px] xl:text-[70px] mb-[70px]'>
                        Join us in celebrating fathers and the iconic Pepe while participating in the crypto revolution with PepePapaCoin ($PAPA)!
                    </div>
                    <div className='flex items-center gap-[120px]'>
                        <a href="https://t.me/pepepapacoin" className='w-[168px] h-[168px] aspect-square'>
                            <button class="button-arounder card"><PiTelegramLogoThin className='text-[160px]' /></button>
                        </a>
                        <a href="https://twitter.com/pepepapacoin" className='w-[168px] h-[168px] aspect-square'>
                            <button class="button-arounder card"><PiTwitterLogoThin className='text-[160px]' /></button>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer