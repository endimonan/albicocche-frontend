import { Route, Routes } from "react-router-dom";

import { App } from "../pages/App";
import Login from "../pages/Login/Login";
import Forgot from "../pages/Forgot/Forgot";
import Signup from "../pages/Signup/Signup";

const AlbicoccheRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/forgot" element={<Forgot />} />
      <Route path="/login/singup" element={<Signup />} />
    </Routes>
  );
};

export default AlbicoccheRoutes;
