import axios from "axios";
import Cookie from 'js-cookie'

const ROOT_API = process.env.NEXT_PUBLIC_API
const API_VERSION = 'api/v1'


export const setSignup = async (data: any) => {
    const response = await axios.post(`${ROOT_API}/${API_VERSION}/users/signup`,
        data
    );
    const { result } = response.data

    return result
}

export const setLogin = async (data: any) => {
    const response = await axios.post(`${ROOT_API}/${API_VERSION}/users/signin`,
        data
    );

    const { result, token } = response.data
    const tokenBase64 = Buffer.from(token).toString('base64')
    Cookie.set('token', tokenBase64, { expires: 2 })

    return result
}



export const getUserData = async () => {
    const token = Cookie.get('token')
    if (!token) {
        return null
    }
    const tokenBase64 = Buffer.from(token as string, 'base64').toString('ascii')
    const response = await axios.get(`${ROOT_API}/${API_VERSION}/users/profile`, {
        headers: {
            Authorization: `Bearer ${tokenBase64}`
        }
    })
    const { result } = response.data
    return result
}