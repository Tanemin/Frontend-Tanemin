import axios from "axios";

interface LocationProps {
    lat: number
    lng: number
}


export const currentWeather = async (props: LocationProps) => {
    const { lat, lng } = props
    console.log(lat, lng)
    const response = await axios.get(`https://api.ambeedata.com/weather/latest/by-lat-lng?lat=${lat}&lng=${lng}`,
        {
            headers: {
                'x-api-key': '3267f1522f62a5df5554e2c3afa637e6226069e45fc9cd58be04a7ebcf23d387',
                'Content-type': 'application/json'
            }
        })

    const { data } = response
    return data
}
