import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name : 'userData',
    initialState: {
        userData : {}
    },
    reducers : {
        saveUserData : (state, action) => {
            console.log("Action-payload====>",action?.payload)
            state.userData= action.payload
        }
    }
})

export const { saveUserData } = authSlice.actions

export default authSlice.reducer