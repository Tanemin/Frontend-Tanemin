import axios from "axios";

const ROOT_API = process.env.NEXT_PUBLIC_API
const API_VERSION = 'api/v1'


export const setSignup = async (data: any) => {
    const response = await axios.post(`${ROOT_API}/${API_VERSION}/users/signup`,
        data
    );
    const { result } = response.data

    console.log(result)
    return result
}

export const setLogin = () => {
    return null
}