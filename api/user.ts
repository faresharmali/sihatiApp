import axios from "axios";

const baseUrl="http://192.168.100.9:3000"

export const getDoctors = async (token: string) => {
    const response = await axios.get(
        baseUrl + "/users/doctors",
        {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        }
    );
    
    return response.data;
}