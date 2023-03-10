import React, { useEffect, useRef, useState } from "react";
import {
  Routes,
  Route,
  Navigate,
  useRoutes,
  useNavigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LoginModalContextProvider } from "./contexts/LoginModalContext";
import { RegisterModalContextProvider } from "./contexts/RegisterModalContext";
import { UserDataContextProvider } from "./contexts/UserDataContext";
import { routes as userRoutes } from "./routes/UserRoutes";
import { routes as adminRoutes } from "./routes/AdminRoutes";
import { TOKEN_LOCAL_STORAGE } from "./contexts/UserDataContext";
import { BASE_URL } from "./services/api/api_endpoint";

const queryClient = new QueryClient();

const App = () => {
  const isAdminRef = useRef(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem(TOKEN_LOCAL_STORAGE));
  const UserRouting = useRoutes(userRoutes);
  const AdminRouting = useRoutes(adminRoutes);
  const checkAdmin = async () => {
    const requestOptions = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      mode: "cors",
      method: "GET",
    };
    const res = await fetch(`${BASE_URL}auths/isAdmin`, requestOptions);
    return res.status;
  };

  useEffect(() => {
    if (token) {
      checkAdmin().then((status) => {
        if (status === 200) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
    }
  }, [token]);

  return (
    <RegisterModalContextProvider>
      <LoginModalContextProvider>
        <UserDataContextProvider>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/" element={UserRouting} />
              <Route
                path="/admin/*"
                element={isAdmin ? AdminRouting : <Navigate to="/login" />}
              />
              <Route
                path="/login"
                element={
                  isAdmin ? <Navigate to="/admin" replace /> : AdminRouting
                }
              />
            </Routes>
          </QueryClientProvider>
        </UserDataContextProvider>
      </LoginModalContextProvider>
    </RegisterModalContextProvider>
  );
};

export default App;
