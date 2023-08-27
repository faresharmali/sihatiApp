import axios from "axios";
const baseUrl="https://sihati.vercel.app"

export const CreateAppointement = async (data: any,token:string) => {
    console.log("creating appointement",data)
    console.log("token",token)
    const response = await axios.post(
      baseUrl + "/appointement/create",
        
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
  const response = await axios.get(
    baseUrl + "/appointement/me",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.data;
}
export const getDoctorAppointements = async (token:string,id:string) => {
  console.log("id", baseUrl + "/appointement/doctor/"+id)
  const response = await axios.get(
    baseUrl + "/appointement/doctor/"+id,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.data;
}
export const getDoctorFreeTime = async (token:string,id:string,date:string) => {
  const response = await axios.get(
    `${baseUrl}/appointement/doctor/free/${id}/${date}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.data;
}