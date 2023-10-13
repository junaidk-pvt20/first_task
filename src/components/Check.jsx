import React, { useState } from 'react';
import logo from '../images/logo.png';
import leftarrow from '../images/icons/leftarrow.png';
import rightarrow from '../images/icons/rightarrow.png';
import tomato from '../images/slider/grilled-tomatoes.png';

const Slider = () => {
    const [showDiv1, setShowDiv1] = useState(true);

    const toggleDivs = () => {
        setShowDiv1(!showDiv1);
    };

    return (
        <div className="px-20 pt-20 pb-12">
            <p className="text-4xl font-semibold text-primary">Latest Articles</p>
            <div className={`relative overflow-hidden h-[100%] transition-transform duration-500 transform ${showDiv1 ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex gap-20 h-full">
                    {/* Content for Div 1 */}
                    <div className="flex-1 mt-16 p-6 border rounded-2xl">
                        <div>
                            <img className="h-16" src={logo} alt="" />
                        </div>
                        <div>
                            <p>Grilled Tomatoes at Home</p>
                            <p>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
                            <p className="border-2 px-2 text-center py-2 rounded-full w-[120px]">Get in Touch</p>
                        </div>
                    </div>

                    {/* Content for Div 2 */}
                    <div className="flex-1 mt-16 p-6 border rounded-2xl justify-center h-full">
                        <div className="flex justify-center items-center h-full">
                            <img className="w-[326px] h-[257px]" src={tomato} alt="" />
                        </div>
                        <p className="text-primary font-bold text-xl mt-6 mb-2">Grilled Tomatoes at Home</p>
                        <p className="mt-4 mb-4">PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
                        <p className="mt-6 mb-6 border-2 px-2 text-center py-2 rounded-full w-[120px]">Get in Touch</p>
                    </div>

                    {/* Content for Div 3 */}
                    <div className="flex-1 mt-16 p-6 border rounded-2xl">
                        <div>
                            <img className="h-16" src={logo} alt="" />
                        </div>
                        <div>
                            <p>Grilled Tomatoes at Home</p>
                            <p>PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...</p>
                            <p className="border-2 px-2 text-center py-2 rounded-full w-[120px]">Get in Touch</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex gap-3 justify-center items-center mt-5">
                <button onClick={toggleDivs}>
                    <img className="cursor-pointer" src={leftarrow} alt="arrow" />
                </button>
                <p>1/2</p>
                <button onClick={toggleDivs}>
                    <img className="cursor-pointer" src={rightarrow} alt="arrow" />
                </button>
            </div>
        </div>
    );
};

export default Slider;
