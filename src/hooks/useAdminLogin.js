import { userLogin } from "../services/api/userAuth";
import { useMutation } from "@tanstack/react-query";
import {
  TOKEN_LOCAL_STORAGE,
  USER_DATA_LOCAL_STORAGE,
  useUserDataContext,
} from "../contexts/UserDataContext";
import { useNavigate } from "react-router-dom";
import {
  useAdminAuthContext,
  ISADMIN_LOCAL_STORAGE,
} from "../contexts/AdminAuthContext";
export const useAdminLogin = () => {
  const navigate = useNavigate();
  const { setIsAdmin } = useAdminAuthContext();
  const { setUserData } = useUserDataContext();
  return useMutation({
    mutationFn: userLogin,
    onSuccess: (data) => {
      localStorage.setItem(USER_DATA_LOCAL_STORAGE, JSON.stringify(data));
      localStorage.setItem(TOKEN_LOCAL_STORAGE, data.access_token);
      localStorage.setItem(ISADMIN_LOCAL_STORAGE, JSON.stringify(true));
      setIsAdmin(true);
      setUserData(data);
      navigate("/admin");
    },
  });
};
