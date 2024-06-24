import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/sidebar";

export const PrivateApp = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
};
