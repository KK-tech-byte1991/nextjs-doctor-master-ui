import { combineReducers } from "redux"
import OtpReducers from "./otpVerificationSlice"
const rootReducer = combineReducers({
    otp: OtpReducers

})

export default rootReducer