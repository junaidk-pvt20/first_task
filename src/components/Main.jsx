import React from 'react'
import logo from "../images/logo.png"
import food from "../images/main.png"
import vector from "../images/Vector.png"

const Main = () => {
    return (
        <div className='mb-8 flex text-center lg:text-start lg:flex-nowrap flex-wrap-reverse sm:justify-center lg:justify-end gap-10 items-center'>
            <div className='lg:w-6/12 w-full'>
                <div className=' lg:w-full flex-center lg:mx-20 mx-0 '>
                    <img className='lg:block hidden h-16' src={logo} alt="" />
                    <div className='lg:pt-20 flex flex-col lg:items-start items-center'>
                        <h1 className='text-4xl text-center lg:px-0 px-16 lg:text-start font-bold w-full lg:w-60 text-primary'>
                            Discover the <span className='text-red'> Best</span> Food and Drinks
                        </h1>
                        <p className='pt-8 text-center lg:text-start font-thin lg:w-80 w-full lg:px-0 px-6'> Naturally made Healthcare Products for the better care & support of your body.</p>

                        <p className='bg-red text-white font-bold mt-8 lg:p-4 p-3 text-center w-40 rounded-full'> Explore Now!</p>

                    </div>
                </div>
            </div>
            <div className='relative lg:w-6/12 w-full'>
                <img className='md:w-[435px] lg:w-[735px] lg:h-[804px]' src={food} alt="foodImage" />
                <img className='lg:w-[752px] lg:h-[839px] md:w-[435px] absolute top-0' src={vector} alt="vector" />
                <p className='absolute lg:top-10 top-4 lg:right-10 right-3 text-white border-2 lg:px-6 px-4 lg:py-3 py-2 rounded-full'> Get in Touch</p>
            </div>

        </div>
    )
}

export default Main