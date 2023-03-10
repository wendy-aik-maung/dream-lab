import { userLogin } from "../services/api/userAuth";
import { useMutation } from "@tanstack/react-query";
import {
  TOKEN_LOCAL_STORAGE,
  USER_DATA_LOCAL_STORAGE,
} from "../contexts/UserDataContext";
import { useNavigate } from "react-router-dom";
import {
  useAdminAuthContext,
  ISADMIN_LOCAL_STORAGE,
} from "../contexts/AdminAuthContext";
export const useAdminLogin = () => {
  const navigate = useNavigate();
  const { setIsAdmin } = useAdminAuthContext();
  return useMutation({
    mutationFn: userLogin,
    onSuccess: (data) => {
      localStorage.setItem(USER_DATA_LOCAL_STORAGE, JSON.stringify(data));
      localStorage.setItem(TOKEN_LOCAL_STORAGE, data.access_token);
      localStorage.setItem(ISADMIN_LOCAL_STORAGE, JSON.stringify(true));
      setIsAdmin(true);
      navigate("/admin");
    },
  });
};
