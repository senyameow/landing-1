import React from 'react'
import BackSection_1 from './BackSection-1'
import Navbar from './Navbar'
import { banner_1 } from '../assets'



const Head = () => {
    return (
        <div className='overflow-hidden max-h-screen w-full bg-cover bg-center secion__1 relative'>
            <Navbar />
            <BackSection_1 />

        </div>
    )
}

export default Head