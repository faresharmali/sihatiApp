import axios from "axios";

export const login = async (email: string, password: string) => {
  const response = await axios.post(
    process.env.EXPO_PUBLIC_API_URL + "/auth/signin",
    {
      email,
      password,
    }
  );

  return response.data;
};
export const CreatePatient = async (data: any) => {
    console.log("creating patient",data)
    const response = await axios.post(
        process.env.EXPO_PUBLIC_API_URL + "/auth/signup-patient",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
        
      );

  return response.data;
};
export const CreateDoctor = async (data: any) => {
  const response = await axios.post(
    process.env.EXPO_PUBLIC_API_URL + "/auth/signup-doctor",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
    
  );

  return response.data;
};
