import axios from "axios";

interface LocationProps {
    lat: any
    lng: any
}


export const currentWeather = async (props: LocationProps) => {
    // const { lat, lng } = props
    const response = await axios.get(`https://api.ambeedata.com/weather/latest/by-lat-lng?lat=-6.356992&lng=106.8138496`,
        {
            headers: {
                'x-api-key': '3267f1522f62a5df5554e2c3afa637e6226069e45fc9cd58be04a7ebcf23d387',
                'Content-type': 'application/json'
            }
        })

    const { data } = response
    console.log(data)
    return response
}
