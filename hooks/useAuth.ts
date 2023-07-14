import { useSelector } from "react-redux";
const useAuth = () => {
  const user = useSelector((state: any) => state.user.signedUser);
  const doctors = useSelector((state: any) => state.user.doctors);

  return {user,doctors};
};

export default useAuth;
