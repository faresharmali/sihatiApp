import axios from "axios";


export const getDoctors = async (token: string) => {
    const response = await axios.get(
        process.env.EXPO_PUBLIC_API_URL + "/users/doctors",
        {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        }
    );
    
    return response.data;
}