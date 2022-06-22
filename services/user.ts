import axios from "axios"
import Cookies from "js-cookie"

const ROOT_API = process.env.NEXT_PUBLIC_API
const API_VERSION = 'api/v1'

export const getCurrentUser = async () => {
    const token = Cookies.get('token')
    if (!token) {
        return null
    }
    const tokenBase64 = Buffer.from(token as string, 'base64').toString('ascii')
    const resposne = await axios.get(`${ROOT_API}/${API_VERSION}/users/profile/carts`,
        {
            headers: {
                Authorization: `Bearer ${tokenBase64}`
            }
        })
    const { result } = resposne.data
    return result
}