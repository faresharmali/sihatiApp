import axios from "axios";
const baseUrl="http://192.168.100.9:3000"

export const login = async (email: string, password: string) => {
  const response = await axios.post(
    baseUrl+"/auth/signin",
    {
      email,
      password,
    }
  );

  return response.data;
};
export const CreatePatient = async (data: any) => {
    const response = await axios.post(
        baseUrl + "/auth/signup-patient",
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
    baseUrl + "/auth/signup-doctor",
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
    
  );

  return response.data;
};
