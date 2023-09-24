import React from 'react'
import { cn } from '../lib/utils'

const Card_Section_5 = ({ children, attention, bigger, biggest }) => {
    return (
        <div className={cn(`w-[854px] h-[416px] px-[63px] py-[34px] card z-50 bg-white`, attention && 'bg-[#398147]', bigger && 'h-[445px]', biggest && 'h-[621px]')}>
            {children}
        </div>
    )
}

export default Card_Section_5