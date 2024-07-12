import { Route, Routes } from "react-router-dom";

import ProtectedRoute from "../components/ProtectedRoute";
import { App } from "../pages/App";
import Forgot from "../pages/Forgot/Forgot";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

const AlbicoccheRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/login/forgot" element={<Forgot />} />
      <Route path="/login/signup" element={<Signup />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<App />} />
      </Route>
    </Routes>
  );
};

export default AlbicoccheRoutes;
