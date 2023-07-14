import axios from "axios";

export const CreateAppointement = async (data: any,token:string) => {
    console.log("creating appointement",data)
    console.log("token",token)
    const response = await axios.post(
        process.env.EXPO_PUBLIC_API_URL + "/appointement/create",
        
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
        
      );

  return response.data;
};

export const getMyAppointements = async (token:string) => {
  console.log("getting my appointements")
  const response = await axios.get(
    process.env.EXPO_PUBLIC_API_URL + "/appointement/me",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.data;
}