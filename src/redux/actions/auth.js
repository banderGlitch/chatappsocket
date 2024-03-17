import { SIGNUP_API } from "../../config/urls"
import { apiPost } from "../../config/utils"
import { saveUserData } from "../reducers/auth"
import { useDispatch } from 'react-redux'
export function signup(data) {
    return apiPost(SIGNUP_API, data)
    // const dispatch = useDispatch()
    // dispatch(saveUserData(data))
    // console.log("data we got in redux store!!!!!", data)

}