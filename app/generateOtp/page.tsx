"use client"
import {
    getAadhaarOtpFunction,
    verifyAadharFunction,
    getMobileOtpFunction
} from '@/store/actions'
import Image from 'next/image'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux'
type Inputs = {
    aadhaar: number
    otp: number
    mobile: number
    otpMobile: number

}
const page = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { txnId, userDetails } = useSelector((state: any) => state.otp)
    const [currentStep, setCurrentStep] = useState(0)
    console.log("txnId", txnId, userDetails)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
        getValues
    } = useForm<Inputs>()
    const urliii = "data:image/jpg;base64," + userDetails.txnId.photo
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        // router.push("/verifyAadhar")
        console.log(data)
    }
    //https://www.nmc.org.in/imr/
    console.log("url,urliii", urliii)
    return (
        <form onSubmit={handleSubmit(onSubmit)} className=' border-2 rounded-sm mt-10 grid grid-cols-1 gap-3 p-6 w-1/2 m-auto 	shadow-lg shadow-indigo-500/40 ...'>
            <p className='font-sans font-bold text-2xl text-sky-400'>Login via Aaddhar No</p>



            {currentStep === 0 && <><label className='text-sm font-bold mb-0'>Enter Aadhar Number</label>
                <input className=" border-2 rounded" type="number" {...register("aadhaar", { required: true })} />
                {errors.aadhaar && <span>This field is required</span>}


                <div className='flex justify-around'>
                    <button className="shadow-lg w-36 rounded-full h-10 border-sky-400 bg-sky-400 shadow-indigo-500/40 ..." onClick={() => getAadhaarOtpFunction(getValues("aadhaar"), dispatch)}>SEND OTP</button>
                    {/* <button className="shadow-lg w-36 rounded-full h-10 border-solid border-sky-400 shadow-indigo-500/40 ..." onClick={() => reset({}, { keepDefaultValues: true })}>Reset</button> */}
                </div></>}

            {currentStep === 1 && <><label className='text-sm font-bold mb-0'>Enter OTP</label>
                <input className=" border-2 rounded" type="number" {...register("otp", { required: true })} />


                <div className='flex justify-around'>
                    <button className="shadow-lg w-36 rounded-full h-10 border-sky-400 bg-sky-400 shadow-indigo-500/40 ..." onClick={() => verifyAadharFunction({ "otp": getValues("otp"), "txnId": txnId }, dispatch)}>LOGIN</button>

                </div></>}
            {currentStep === 2 && <>
                <label className='text-sm font-bold mb-0'>Enter Mobile Number</label>
                <input className=" border-2 rounded" type="number" {...register("mobile", { required: true })} />


                <div className='flex justify-around'>
                    <button className="shadow-lg w-36 rounded-full h-10 border-sky-400 bg-sky-400 shadow-indigo-500/40 ..." onClick={() => getMobileOtpFunction({ "mobile": getValues("mobile"), "txnId": txnId }, dispatch)}>SEND OTP</button>

                </div></>}

            {currentStep === 3 && <><label className='text-sm font-bold mb-0'>Enter OTP</label>
                <input className=" border-2 rounded" type="number" {...register("otpMobile", { required: true })} />


                <div className='flex justify-around'>
                    <button className="shadow-lg w-36 rounded-full h-10 border-sky-400 bg-sky-400 shadow-indigo-500/40 ..." onClick={() => getMobileOtpFunction({ "otp": getValues("otpMobile"), "txnId": txnId }, dispatch)}>DONE</button>

                </div></>}
            <img src={urliii}  alt="photo" width={200} height={200}/>
        </form>
    )
}

export default page