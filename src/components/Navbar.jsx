import React, { useEffect, useState } from 'react'

import AnchorLink from 'react-anchor-link-smooth-scroll'
import { cn } from '../lib/utils'
import { slide as Menu } from 'react-burger-menu'


const LINKS = [
    {
        label: 'About',
        href: '#about',
    },
    {
        label: 'Tokenomics',
        href: '#tokenomics',
    },
    {
        label: 'Social media',
        href: '#social',
    },
]

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)



    const page = document.getElementById('page')


    const onClick = () => {
        setIsOpen(!isOpen)
    }

    isOpen ? page?.classList.add('overflow-y-hidden') : page?.classList.remove('overflow-y-hidden')

    return (
        <nav className=' w-full h-full lg:px-[50px] xl:px-[102px] ml-auto z-50 relative overflow-hidden'>
            <ul className='hidden pt-[25px] md:flex items-center gap-[13px] lg:gap-[12px] xl:gap-[28px] w-full ml-auto justify-end'>
                {LINKS.map(link => (
                    <AnchorLink key={link.href} href={link.href} className='text-[28px] font-[500] text-white'>
                        {link.label}
                    </AnchorLink>
                ))}
            </ul>
            <div className={cn(`w-full flex justify-end md:hidden`)} >
                <button class={cn(`icon nav-icon-5 w-fit`, isOpen && 'open')} onClick={onClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>


            <div className={cn(`w-full h-screen bg-[#007436] absolute top-0 transition duration-500 z-[100]`, !isOpen && 'translate-x-[100%]')}>
                <div className={cn(`w-full flex justify-end`)} >
                    <button class={cn(`w-fit icon nav-icon-5`, isOpen && 'open')} onClick={onClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div className='w-full h-full flex items-center justify-center'>
                    <ul className='flex flex-col items-center gap-[30px]'>
                        {LINKS.map(link => (
                            <a onClick={() => setIsOpen(false)} key={link.href} href={link.href} className='text-[58px] font-[500] text-white/80 hover:text-white hover:underline'>
                                {link.label}
                            </a>
                        ))}
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default Navbar