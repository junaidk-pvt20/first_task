import React from 'react'
import logo from "../images/logo.png"
import twitter from "../images/icons/twitter.png"
import insta from "../images/icons/insta.svg"
import facebook from "../images/icons/facebook.svg"
const Footer = () => {
    return (
        <div className='flex bg-backwhite gap-10 justify-evenly py-16 px-6'>
            <div className='flex items-center'>
                <img className='h-20' src={logo} alt="" />
            </div>
            <div className='w-[250px]'>
                <p className='text-primary my-2'> Contact Us </p>
                <p className='text-lighttext'> Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434 </p>
                <p className='my-2 text-lighttext'> example2020@gmail.com </p>
                <p className='my-2 text-lighttext'> (904) 443-0343 </p>
            </div>
            <div>
                <p className='text-primary'> More </p>
                <p className='my-3 text-lighttext'> About Us </p>
                <p className='my-3 text-lighttext'> Products </p>
                <p className='my-3 text-lighttext'> Career </p>
                <p className='my-3 text-lighttext'> Contact Us </p>
            </div>
            <div className='grid content-between justify-between'>
                <div className='grid gap-6 justify-items-center'>
                    <p className='text-primary'> Social Links </p>
                    <div className='flex gap-6'>
                        <img className='h-[21px] w-[21px]' src={insta} alt="" />
                        <img className='h-[22px]' src={twitter} alt="" />
                        <img className='h-[21px] w-[21px]' src={facebook} alt="" />
                    </div>
                </div>
                <p className='text-lighttext'> © 2022 Food Truck Example</p>
            </div>
        </div>
    )
}

export default Footer