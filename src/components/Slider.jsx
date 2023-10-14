import React, { useState } from 'react'
import logo from "../images/logo.png"
import leftarrow from "../images/icons/leftarrow.png"
import rightarrow from "../images/icons/rightarrow.png"
import tomato from "../images/slider/grilled-tomatoes.png"
import tomato1 from "../images/slider/grilled-tomatoes2.png"
import meal1 from "../images/slider/meal1.png"
import meal2 from "../images/slider/meal2.png"
import meal3 from "../images/slider/meal-prep-ideas1.png"
import meal4 from "../images/slider/meal-prep-ideas2.png"
const Slider = () => {
    const [showDiv1, setShowDiv1] = useState(false);
    const SliderData = [
        {
            imgUrl: tomato,
            title: "Grilled Tomatoes at Home",
            // description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
        },
        {
            imgUrl: meal1,
            title: "Snacks for Travel",
            // description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
        },
        {
            imgUrl: meal2,
            title: "Post-workout Recipes",
            // description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
        },
        {
            imgUrl: tomato1,
            title: "How To Grill Corn",
            // description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
        },
        {
            imgUrl: meal3,
            title: "Crunchwrap Supreme",
            // description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
        },
        {
            imgUrl: meal4,
            title: "Broccoli Cheese Soup",
            // description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
        }
    ]

    const toggleDivs = () => {
        setShowDiv1(!showDiv1);
    };
    return (
        <div className='lg:px-20 px-5 pt-20 pb-12'>
            <p className='text-4xl font-semibold text-primary'> Latest Articles</p>
            {showDiv1 &&
                <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-20 gap-3 p-6'>
                    {SliderData.slice(0, 3).map((slider) => {
                        return (
                            <div className='flex flex-col mt-16 border rounded-2xl'>
                                <div className="flex justify-center items-center p-6">
                                    <img className='w-[326px] h-[257px]' src={slider?.imgUrl} alt="" />
                                </div>
                                <div className='flex flex-col px-10 pb-10'>
                                    <p className='text-primary font-bold text-xl mt-6 mb-2'>{slider?.title}</p>
                                    <p className='my-4 w-full'> PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
                                    <p className='border-2 px-2 text-center py-2 my-3 rounded-full w-[120px]'> Get in Touch</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
            {!showDiv1 &&
                <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-20 gap-3 p-6'>
                    {SliderData.slice(3, 6).map((slider) => {
                        return (
                            <div className='flex flex-col mt-16 border rounded-2xl'>
                                <div className="flex justify-center items-center p-6">
                                    <img className='w-[326px] h-[257px]' src={slider?.imgUrl} alt="" />
                                </div>
                                <div className='flex flex-col px-10 pb-10'>
                                    <p className='text-primary font-bold text-xl mt-6 mb-2'>{slider?.title}</p>
                                    <p className='my-4 w-full'> PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
                                    <p className='border-2 px-2 text-center py-2 my-3 rounded-full w-[120px]'> Get in Touch</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
            {/* {!showDiv1 &&
                <div className='flex gap-20'>
                    <div className='flex-1 mt-16 p-6 border rounded-2xl'>
                        <div>
                            <img className='w-[326px] h-[257px]' src={tomato} alt="" />
                        </div>
                        <div>
                            <p className='text-primary font-bold text-xl mt-6 mb-2'> Grilled Tomatoes at Home</p>
                            <p className='mt-4 mb-4'> PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
                            <p className='border-2 px-2 text-center py-2 rounded-full w-[120px]'> Get in Touch</p>
                        </div>
                    </div>
                    <div className='flex-1 mt-16 p-6 border rounded-2xl justify-center'>

                        <div className="flex justify-center items-center">
                            <img className="w-[326px] h-[257px]" src={meal1} alt="" />
                        </div>
                        <p className='text-primary font-bold text-xl mt-6 mb-2'>Snacks for Travel</p>
                        <p className='mt-4 mb-4'> PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
                        <p className='mt-6 mb-6 border-2 px-2 text-center py-2 rounded-full w-[120px]'> Get in Touch</p>

                        <div></div>
                    </div>
                    <div className='flex-1 mt-16 p-6 border rounded-2xl'>
                        <div>
                            <img className='w-[326px] h-[257px]' src={meal2} alt="" />
                        </div>
                        <div>
                            <p className='text-primary font-bold text-xl mt-6 mb-2'>Post-workout Recipes</p>
                            <p className='mt-4 mb-4'> PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
                            <p className='border-2 px-2 text-center py-2 rounded-full w-[120px]'> Get in Touch</p>
                        </div>
                        <div></div>
                    </div>
                </div>
            } */}
            <div className='flex gap-3 justify-center items-center mt-5'>
                <button onClick={toggleDivs}>
                    <img className='cursor-pointer' src={rightarrow} alt='arrow' />
                </button>
                <p> 1/2 </p>
                <button onClick={toggleDivs}>
                    <img className='cursor-pointer' src={leftarrow} alt='arrow' />
                </button>
            </div>
        </div>
    )
}

export default Slider