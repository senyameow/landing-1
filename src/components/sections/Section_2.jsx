import React from 'react'
import BackSeaction_2 from './BackSeaction_2'

const Section_2 = () => {
    return (
        <section className='h-[1258px] relative bg-white pt-[210px] '>
            <BackSeaction_2 />
            <div className='px-[190px] mx-auto'>
                <div className='flex w-full justify-center items-center'>
                    <div className='pt-[120px] mb-[95px]'>
                        BUTTON
                    </div>

                </div>

                <div className='flex items-stretch mb-[96px]'>
                    <p className='number mr-[38px]'>.1</p>
                    <div className='flex flex-col'>
                        <p className='primary_text max-w-[727px] mb-[23px]'>In honor of fathers everywhere and the iconic Pepe, we present to you <span className='secondary_text'>PepePapaCoin</span> - the cryptocurrency that's not just a token, it's a tribute to the unsung heroes who shape our lives.</p>
                        <p className='primary_text max-w-[754px]'><span className='secondary_text'>PepePapaCoin ($PAPA)</span> is the ultimate digital asset designed to celebrate the spirit of fatherhood and pay homage to the legendary Pepe.</p>
                    </div>
                </div>
                <div className='flex items-center ml-[202px] mb-[89px]'>
                    <p className='number mr-[38px]'>.2</p>
                    <div className='flex flex-col'>
                        <p className='primary_text max-w-[727px] mb-[23px]'>At <span className='secondary_text'>PepePapaCoin</span>, we believe that fathers play an invaluable role in our lives. They provide guidance, support, and love, and we want to give something back to them.</p>
                    </div>
                </div>
                <div className='flex items-center mb-[89px]'>
                    <p className='number mr-[38px]'>.3</p>
                    <div className='flex flex-col'>
                        <p className='primary_text mb-[23px] max-w-[412px]'><span className='secondary_text'>PapaCoin is not just a cryptocurrency</span>; it's a symbol of appreciation and respect for fathers worldwide.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section_2