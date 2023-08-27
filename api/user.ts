import axios from "axios";

const baseUrl="https://sihati.vercel.app"

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