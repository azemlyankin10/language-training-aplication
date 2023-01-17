import { Outlet } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import { Toasts } from "../Toasts/Toasts";

export const Layout = () => (
  <div className="bg-blue-400 min-h-screen">
    <Navigation />

    <Outlet />

    <Toasts />
  </div>
)