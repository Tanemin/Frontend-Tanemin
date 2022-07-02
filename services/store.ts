import axios from "axios";
import Cookies from "js-cookie";
const ROOT_API = process.env.NEXT_PUBLIC_API
const API_VERSION = 'api/v1'

export const getDetailStore = async (id: string) => {
    const response = await axios.get(`${ROOT_API}/${API_VERSION}/store/${id}`, {
        headers: { "Access-Control-Allow-Origin": "*" }
    });

    const { result } = response.data
    return result
}

export const deleteCartById = async (id: string) => {
    const token = Cookies.get('token')
    if (!token) {
        return null
    }
    const tokenBase64 = Buffer.from(token as string, 'base64').toString('ascii')
    const response = await axios.delete(`${ROOT_API}/${API_VERSION}/carts/${id}`, {
        headers: {
            Authorization: `Bearer ${tokenBase64}`
        }
    })
    const { result } = response.data
    return result
}