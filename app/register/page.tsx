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
            <p className='font-sans font-bold text-2xl text-sky-400'>Welcome !</p>

            <p className='font-sans text-2xl font-thin '>To Ayushman Bharat Digital Mission</p>
            <p className='font-sans font-thin text-2xl'>HealthCare Professional Registry</p>

            <label className='text-sm font-bold mb-0'>Select your registration council</label>
            <select className=" border-2 rounded" {...register("registrationCouncil")}>
                <option value={0}>Select</option>
                {registrationCouncil.map((council: string) => <option value={council}>{council}</option>)}
            </select>

            <label className='text-sm font-bold mb-0'>Enter Registration Number</label>
            <input className=" border-2 rounded" type="number" {...register("registrationNumber", { required: true })} />
            {errors.registrationNumber && <span>This field is required</span>}

            <label className='text-sm font-bold mb-0'>Select Category</label>
            <select {...register("category")} className=" border-2 rounded">
                <option value={0}>Select</option>
                {categories.map((council: string) => <option value={council}>{council}</option>)}
            </select>

            <label className='text-sm font-bold mb-0'>Select Sub Category</label>
            <select {...register("subCategory")} className=" border-2 rounded">
                <option value={0}>Select</option>
                {subCategories.map((council: string) => <option value={council}>{council}</option>)}
            </select>
            <div></div>

            <div className='flex justify-around'>
                <button className="shadow-lg w-36 rounded-full h-10 border-sky-400 bg-sky-400 shadow-indigo-500/40 ..." type="submit">Submit</button>
                <button className="shadow-lg w-36 rounded-full h-10 border-solid border-sky-400 shadow-indigo-500/40 ..." onClick={() => reset({})}>Reset</button>
            </div>

        </form>
    )
}

export default page