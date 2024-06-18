import { Route, Routes } from "react-router-dom";

import { App } from "../pages/App";

const AlbicoccheRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
};

export default AlbicoccheRoutes;
