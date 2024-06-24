import { Route, Routes } from "react-router-dom";

import { App } from "../pages/App";
import Login from "../pages/Login/Login";

const AlbicoccheRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AlbicoccheRoutes;
