import React from 'react'
import BackSeaction_2 from './BackSeaction_2'


const Section_2 = () => {




    return (
        <section className='min-h-[1258px] relative bg-white pt-[210px] overflow-y-hidden overflow-x-hidden'>
            <BackSeaction_2 />
            <div className='px-[20px] lg:px-[190px] mx-auto'>
                <div className='flex w-full justify-center items-center'>
                    <div className='pt-[0px] lg:pt-[120px] mb-[95px]' id='about'>
                        <div className='card bg-[#6CCB70] lg:w-[419px] w-[320px] lg:h-[173px] h-[158px] relative'>
                            <div className='w-full flex items-center justify-center text-white text-[100px]'>
                                About
                            </div>
                            <div className='mini__card w-[99px] h-[57px] bg-[#C4BBFA] rounded-[10px] absolute -bottom-[30px] -right-[20px]' >
                                <div className='w-full h-full flex items-center justify-center text-white text-[50px]'>
                                    us
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex flex-col items-start w-full '>
                    <div className='flex lg:flex-row flex-col lg:items-center mb-[30px] lg:mb-[89px]' >
                        <p className='lg:text-[100px] text-[130px] number mr-[38px]'>.1</p>
                        <div className='flex flex-col'>
                            <p className='primary_text max-w-[727px] mb-[23px]'>In honor of fathers everywhere and the iconic Pepe, we present to you <span className='secondary_text'>PepePapaCoin</span> - the cryptocurrency that's not just a token, it's a tribute to the unsung heroes who shape our lives.</p>
                            <p className='primary_text max-w-[754px]'><span className='secondary_text'>PepePapaCoin ($PAPA)</span> is the ultimate digital asset designed to celebrate the spirit of fatherhood and pay homage to the legendary Pepe.</p>
                        </div>
                    </div>
                    <div className='flex lg:flex-row flex-col lg:items-center mb-[30px] lg:mb-[89px]' >
                        <p className='lg:text-[100px] text-[130px] number mr-[38px]'>.2</p>
                        <div className='flex flex-col'>
                            <p className='primary_text max-w-[727px] mb-[23px]'>At <span className='secondary_text'>PepePapaCoin</span>, we believe that fathers play an invaluable role in our lives. They provide guidance, support, and love, and we want to give something back to them.</p>
                        </div>
                    </div>
                    <div className='flex lg:flex-row flex-col lg:items-center mb-[30px] lg:mb-[89px] lg:pb-0 pb-[300px]'>
                        <p className='lg:text-[100px] text-[130px] number mr-[38px]'>.3</p>
                        <div className='flex flex-col'>
                            <p className='primary_text mb-[23px] max-w-[412px]'><span className='secondary_text'>PapaCoin is not just a cryptocurrency</span>; it's a symbol of appreciation and respect for fathers worldwide.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section_2