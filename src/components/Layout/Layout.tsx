import { Outlet } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import { Toasts } from "../Toasts/Toasts";

export const Layout = () => (
  <div className="min-h-screen custom-bg">
    <Navigation />

    <Outlet />

    <Toasts />
  </div>
)