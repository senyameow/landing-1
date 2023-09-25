import React from 'react'

import AnchorLink from 'react-anchor-link-smooth-scroll'

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
    return (
        <nav className=' w-full pt-[25px] lg:px-[50px] xl:px-[102px] ml-auto z-50 relative'>
            <ul className='hidden md:flex items-center gap-[13px] lg:gap-[12px] xl:gap-[28px] w-full ml-auto justify-end'>
                {LINKS.map(link => (
                    <AnchorLink key={link.href} href={link.href} className='text-[28px] font-[500] text-white'>
                        {link.label}
                    </AnchorLink>
                ))}
            </ul>

        </nav>
    )
}

export default Navbar