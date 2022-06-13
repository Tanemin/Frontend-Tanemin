import axios from "axios";

const ROOT_API = process.env.NEXT_PUBLIC_API
const API_VERSION = 'api/v1'


export const getPlants = async () => {
    const response = await axios.get(`${ROOT_API}/${API_VERSION}/plants/`, {
        headers: { "Access-Control-Allow-Origin": "*" }
    });
    const { result } = response.data

    console.log(result)
    return result
}

export const getDetailPlant = async (id: string) => {
    const response = await axios.get(`${ROOT_API}/${API_VERSION}/plants/${id}`, {
        headers: { "Access-Control-Allow-Origin": "*" }
    });

    const { result } = response.data
    console.log(result)
    return result
}