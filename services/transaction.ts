import axios from "axios";
import Cookies from "js-cookie";
import { postPlant } from "./data-types";

const ROOT_API = process.env.NEXT_PUBLIC_API
const API_VERSION = 'api/v1'

export const createTransaction = async (props: postPlant) => {
    const token = Cookies.get('token')
    if (!token) {
        return null
    }
    const tokenBase64 = Buffer.from(token as string, 'base64').toString('ascii')
    console.log(tokenBase64)
    const { id, ammount } = props
    const response = await axios.post(`${ROOT_API}/${API_VERSION}/plants/${id}/transactions/`,
        {
            ammount
        },
        {
            headers: {
                Authorization: `Bearer ${tokenBase64}`
            }
        });

    const { result } = response.data

    return result
}