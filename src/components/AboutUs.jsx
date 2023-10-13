import React from 'react'
import about from '../images/about.png'
const AboutUs = () => {
    return (
        <div className='flex bg-backwhite mt-44 justify-evenly items-center'>
            <div>
                <img className='w-[384px] h-[468px]' src={about} alt='' />
            </div>
            <div className=''>
                <h1 className='text-4xl font-bold text-primary pb-4'> About Us </h1>
                <p className='w-[448px]'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.
                </p>
                <p className='bg-red text-white font-bold mt-8 p-2 text-center w-32 rounded-full'> Read More</p>
            </div>
        </div>
    )
}

export default AboutUs