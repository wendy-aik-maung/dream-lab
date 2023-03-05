import React, { useState } from "react";
import { Routes, Route, Navigate, useRoutes } from "react-router-dom";
import { LoginModalContextProvider } from "./contexts/LoginModalContext";
import { RegisterModalContextProvider } from "./contexts/RegisterModalContext";
import { routes as userRoutes } from "./routes/UserRoutes";
import { routes as adminRoutes } from "./routes/AdminRoutes";
const App = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  const UserRouting = useRoutes(userRoutes);
  const AdminRouting = useRoutes(adminRoutes);
  return (
    <RegisterModalContextProvider>
      <LoginModalContextProvider>
        <Routes>
          <Route path="/" element={UserRouting} />
          <Route
            path="/login"
            element={isAdmin ? <Navigate to="/admin" replace /> : AdminRouting}
          />
          <Route
            path="/admin/*"
            element={isAdmin ? AdminRouting : <Navigate to="/login" />}
          />
        </Routes>
      </LoginModalContextProvider>
    </RegisterModalContextProvider>
  );
};

export default App;
