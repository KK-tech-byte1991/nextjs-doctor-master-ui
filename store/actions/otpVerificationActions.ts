import axios from "axios"
import { setTransactionId, setUserDetails } from "../reducers/otpVerificationSlice"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
export const getAadhaarOtpFunction = (aadhaar: number, dispatch: Function) => {
    const data = { aadhaar }
    axios.post(baseUrl + "DoctorReg/generateOtp", data).then((res: any) => { dispatch(setTransactionId(res.data.txnId)) })
}

export const verifyAadharFunction = (data: any, dispatch: Function) => {

    axios.post(baseUrl + "DoctorReg/verifyOtp", data).then((res: any) => { dispatch(setUserDetails(res.data)) })
}

export const getMobileOtpFunction = (data: any, dispatch: Function) => {
    axios.post(baseUrl + "DoctorReg/generateMobileOTP", data).then((res: any) => { })
}

export const verifyMobileOtpFunction = (data: any, dispatch: Function) => {
    axios.post(baseUrl + "DoctorReg/verifyMobileOTP", data).then((res: any) => { })
}