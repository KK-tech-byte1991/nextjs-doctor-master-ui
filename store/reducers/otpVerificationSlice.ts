import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    txnId: ""
}

export const otpSlice = createSlice({
    name: 'otp',
    initialState,
    reducers: {
        setTransactionId: (state, action) => {
            return { ...state, txnId: action.payload }
        },
        setUserDetails: (state, action) => {
            return { ...state, userDetails: action.payload }
        }
    }
})

export const { setTransactionId ,setUserDetails} = otpSlice.actions

export default otpSlice.reducer