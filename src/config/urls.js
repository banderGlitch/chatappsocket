const LOCAL_URL = ' http://localhost:3000' // For simulator 
const LIVE_STAGING_URL = 'https://socket-app-backend-u3hp.onrender.com'// Physical Device

export const API_BASE_URL = LIVE_STAGING_URL
export const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

export const SIGNUP_API = getApiUrl("/api/users/signup")
export const GET_USERS  = getApiUrl("/api/users/get_users")
export const VERIFY_OTP = getApiUrl("api/users/otpVerify")



// Local API won't run on physical device unless it's an expo project connected via same network.