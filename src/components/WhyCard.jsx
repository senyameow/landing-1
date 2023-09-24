import React from 'react'

const WhyCard = ({ bg, title, text, textColor, titleColor, asset }) => {
    return (
        <div className={`w-[847px] h-[171px] rounded-[40px] border border-[#231F20] bg-[${bg}] relative z-50`}>
            <div className='flex items-center justify-center w-full h-full'>
                <div className='py-[24px] pl-[120px] pr-[70px] flex flex-col items-start gap-[7px] justify-center'>
                    <h3 className={`text-[${titleColor}] text-[24px] font-500 `}>{title}</h3>
                    <p className={`max-w-[660px] mx-auto text-[24px] text-[${textColor}]`}>{text}</p>
                </div>

            </div>
            <div className='absolute -top-[40%] -left-[8%] w-full h-full'>
                <img src={asset} alt="" />
            </div>

        </div>
    )
}

export default WhyCard