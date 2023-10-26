"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
type Inputs = {
    registrationNumber: number
    registrationCouncil: string
    category: string
    subCategory: string
}
const page = () => {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        router.push("/verifyAadhar")
        console.log(data)
    }
    //https://www.nmc.org.in/imr/
    const registrationCouncil = ["Andhra Pradesh Medical Council", "Arunachal Pradesh Medical Council", "Assam Medical Council",
        "Bihar Medical Council", "Chattisgarh Medical Council", "Delhi Medical Council", "Goa Medical Council", "Gujarat Medical Council",
        "Haryana State Dental & Medical Council", "Himachal Pradesh Medical Council"
    ]
    const categories: string[] = ["Doctor", "Nurse"]
    const subCategories: string[] = ["Modern Medicine", "Dentistry", "Ayurveda", "Unani", "Sidha"]
    return (
        <form onSubmit={handleSubmit(onSubmit)} className=' border-2 rounded-sm mt-10 grid grid-cols-1 gap-3 p-6 w-1/2 m-auto 	shadow-lg shadow-indigo-500/40 ...'>
            <div className='border-2 rounded p-4 grid grid-cols-2 gap-4 shadow-lg  shadow-indigo-500/40 ...'>
                <p className='text-bold text-green-600 '>Records Fetched Successfully!</p><div></div>
                <div>
                    <p className='text-sm'>Name</p>
                    <p className='text-bold'>Akshat Saxena</p>
                </div>
                <div></div>
                <div>
                    <p className='text-sm'>Council</p>
                    <p className='text-bold'>West Bengal Medical Council</p>
                </div>
                <div>
                    <p className='text-sm'>Registration Number</p>
                    <p className='text-bold'>99999999999</p>
                </div>
                <div>
                    <p className='text-sm'>Email</p>
                    <p className='text-bold'>medicus@yopmail.com</p>
                </div>
                <div>
                    <p className='text-sm'>Mobile Number</p>
                    <p className='text-bold'>XXXXXX999999</p>
                </div>
            </div>
            <p></p><p></p>
            <p>To Register in Healthcare Professional registry,kindly provide your Adhar Number</p>
            <input className="border-2 rounded" type="number" />

            <button className="shadow-lg w-full rounded-full h-10 border-sky-400 bg-sky-400 shadow-indigo-500/40 ...">Verify Aadhar</button>
        </form>
    )
}

export default page