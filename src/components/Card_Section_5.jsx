import React from 'react'
import { cn } from '../lib/utils'

const Card_Section_5 = ({ children, attention, bigger, biggest }) => {
    return (
        <div className={cn(`max-w-[854px] min-h-[416px] px-[15px] md:px-[63px] py-[20px] lg:py-[34px] card z-50 bg-white`, attention && 'bg-[#398147]', bigger && 'min-h-[445px]', biggest && 'min-h-[621px]')}>
            {children}
        </div>
    )
}

export default Card_Section_5