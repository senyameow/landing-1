import React from 'react'
import { banner_s3, bg_s3, pepe_s3 } from '../../assets'
import WhyCard from '../WhyCard'

import { asset_1, asset_2, asset_3, asset_4 } from '../../assets'
import Banner_s3 from '../Banner_s3'

const Section_3 = () => {
    return (
        <section className='h-[1468px] w-full bg-[#CDF4D3] relative overflow-hidden'>
            <img src={bg_s3} alt="" className='w-[2811px] opacity-50 absolute ' />
            <img src={pepe_s3} alt='' className='absolute w-[200px] h-[163px] top-[343px]' />
            <Banner_s3 />
            <div className='py-[200px] px-[300px] mx-auto h-full w-full z-50'>
                <div className='flex flex-col gap-[101px]'>
                    <WhyCard asset={asset_1} bg={`#FFF`} title={`A Tribute to Fathers:`} titleColor={`#007436`} text={`PepePapaCoin is the ultimate tribute to fathers, honoring their dedication and love. Every $PAPA token represents a heartfelt thank you to fathers everywhere.`} textColor={`#231F20`} />
                    <WhyCard asset={asset_2} bg={`#398147`} title={`A Tribute to Fathers:`} titleColor={`#FFF`} text={`While we celebrate fatherhood, PapaCoin also offers exciting profit potential for investors. As the crypto market evolves, $PAPA aims to become a valuable digital asset.`} textColor={`#FFF`} />
                    <WhyCard asset={asset_3} bg={`#FFF`} title={`A Tribute to Fathers:`} titleColor={`#007436`} text={`PepePapaCoin is built on the principles of community and unity. Join our passionate community of fathers, crypto enthusiasts, and Pepe fans who believe in the power of $PAPA.`} textColor={`#231F20`} />
                    <WhyCard asset={asset_4} bg={`#398147`} title={`A Tribute to Fathers:`} titleColor={`#FFF`} text={`PepePapaCoin is not only a tribute to fathers but also to the world-famous Pepe. We celebrate the enduring popularity of this iconic character in the crypto world.`} textColor={`#FFF`} />
                </div>
            </div>
        </section>
    )
}

export default Section_3