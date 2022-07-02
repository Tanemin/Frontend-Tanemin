import axios from "axios";
import Cookies from "js-cookie";
import { postPlant } from "./data-types";

const ROOT_API = process.env.NEXT_PUBLIC_API
const API_VERSION = 'api/v1'


export const getPlants = async () => {
    const response = await axios.get(`${ROOT_API}/${API_VERSION}/plants/`, {
        headers: { "Access-Control-Allow-Origin": "*" }
    });
    const { result } = response.data

    return result
}

export const getDetailPlant = async (id: string) => {
    const response = await axios.get(`${ROOT_API}/${API_VERSION}/plants/${id}`, {
        headers: { "Access-Control-Allow-Origin": "*" }
    });

    const { result } = response.data
    return result
}

export const getTopPlant = async () => {
    const response = await axios.get(`${ROOT_API}/${API_VERSION}/plants/topPlants`, {
        headers: { "Access-Control-Allow-Origin": "*" }
    });

    const { result } = response.data
    return result
}

export const postCartPlant = async (props: postPlant) => {
    const { id, ammount } = props
    const token = Cookies.get('token')
    if (!token) {
        return null
    }
    const tokenBase64 = Buffer.from(token as string, 'base64').toString('ascii')
    const response = await axios.post(`${ROOT_API}/${API_VERSION}/plants/${id}/carts`,
        {
            ammount
        },
        {
            headers: {
                Authorization: `Bearer ${tokenBase64}`
            }
        }
    );

    const { result } = response.data
    return result
}