import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import ReactDOM from "react-dom/client";

import Navbar from "./components/Navbar.tsx";
import WrappedProviders from "./context/WrappedProviders.tsx";
import "./index.css";
import AlbicoccheRoutes from "./routes/routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WrappedProviders>
      <Navbar />
      <AlbicoccheRoutes />
    </WrappedProviders>
  </React.StrictMode>
);
