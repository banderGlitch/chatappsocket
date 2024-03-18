export const API_BASE_URL_LOCAL = ' https://9cbe-2409-40e3-402f-6c3e-2063-5af1-5c4c-2107.ngrok-free.app/'
export const API_BASE_URL_LIVE_URL = 'https://socket-app-backend-u3hp.onrender.com'

export const getApiUrl = (endpoint) => API_BASE_URL_LOCAL + endpoint


export const SIGNUP_API = getApiUrl('api/users/signup')
export const GET_USERS = getApiUrl('api/users/users')
export const VERIFY_OTP = getApiUrl('api/users/verifyOtp')
// export const VERIFY_OTP = getApiUrl('api/users/signup')