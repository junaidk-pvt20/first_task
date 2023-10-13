import React from 'react'
import logo from "../images/logo.png"
import food from "../images/main.png"
import vector from "../images/Vector.png"

const Main = () => {
    return (
        <div className='flex flex-wrap-reverse justify-between'>
            <div className=''>
                <div className='p-20'>
                    <img className='h-16' src={logo} alt="" />
                    <div className='pt-20'>
                        <h1 className='text-4xl font-bold w-60 text-primary'>
                            Discover the <span className='text-red'> Best</span> Food and Drinks
                        </h1>
                        <p className='pt-8 font-thin w-80'> Naturally made Healthcare Products for the better care & support of your body.</p>
                        <p className='bg-red text-white font-bold mt-8 p-4 text-center w-40 rounded-full'> Explore Now!</p>

                    </div>
                </div>
            </div>
            <div className='relative'>
                <img className='md:w-[435px] lg:w-[735px] h-[804px] sm:h-full sm:w-full' src={food} alt="foodImage" />
                <img className='w-[752px] h-[839px] absolute top-0' src={vector} alt="vector" />
                <p className='absolute top-10 right-10 text-white border-2 px-6 py-3 rounded-full'> Get in Touch</p>
            </div>

        </div>
    )
}

export default Main