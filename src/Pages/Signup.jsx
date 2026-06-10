import React from 'react'
import Form from '../Components/Form'
import Logo from '../assets/images/logo.avif'
import { IoMdCheckmark } from "react-icons/io";
import { LuUsers } from "react-icons/lu";
import { LuBadgeCheck } from "react-icons/lu";
import { CgMenuRound } from "react-icons/cg";
import { GoGlobe } from "react-icons/go";

function Signup() {
    return (
        <div className='min-h-screen w-full bg-black/90 relative p-10'>
            <div className="absolute w-[50%] left-[50%] -translate-x-1/2
         h-10 rounded-full bg-linear-180 from-yellow-500 to-yellow-500
         blur-[150px]">
            </div>
            <div className="grid md:grid-cols-2 w-full">
                <div className='grid p-10'>
                    <div className='w-full'>
                        <div className='flex gap-2 items-center text-white'>
                            <img src={Logo} alt="Brand Logo" className='h-5' />
                            <h1 className='text-lg'>Superlist</h1>
                        </div>
                        <p className='text-2xl font-semibold text-white py-2'>Start you 30-day free trial</p>
                        <small className='flex gap-2 text-gray-500'>
                            <div className="rounded-full p-1 bg-gray-500">
                                <IoMdCheckmark className='text-white' />
                            </div>
                            No credit card required
                        </small>

                        <div className='mt-10'>
                            <LuUsers className='text-2xl text-blue-600' />
                            <p className='text-white py-2'>Invite unlimited friends</p>
                            <small className='flex gap-2 text-gray-500'>
                                Intigrate with guranteed developer-friendly API's or openly 
                                to <br /> choose a build-ready or low-code solution.
                            </small>
                        </div>

                        <div className='mt-10'>
                            <LuBadgeCheck className='text-2xl text-blue-600' />
                            <p className='text-white py-2'>Ensure Compliance</p>
                            <small className='flex gap-2 text-gray-500'>
                                Receive detailed insights on all your numbers in real-time, <br /> 
                                see where visitors are coming from.
                            </small>
                        </div>

                        <div className='mt-10'>
                            <CgMenuRound className='text-2xl text-blue-600' />
                            <p className='text-white py-2'>Built-in security</p>
                            <small className='flex gap-2 text-gray-500'>
                                Keep your team members and customers in 
                                the loop by sharing <br /> your dashboard public.
                            </small>
                        </div>
                    </div>
                    <div className='flex justify-between items-center self-end text-[12px]'>
                        <div className='flex gap-2 items-center text-gray-400'>
                            <p className='text-gray-400'>Terms</p>
                            .
                            <p className='text-gray-400'>Privacy</p>
                            .
                            <p className='text-gray-400'>Docs</p>
                            .
                            <p className='text-gray-400'>Helps</p>
                        </div>
                        <div className="flex gap-2 items-center text-gray-400">
                            <GoGlobe/>
                            <select name="language" id="language">
                                <option>English</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* Form */}
                <div className='p-10'>
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Signup