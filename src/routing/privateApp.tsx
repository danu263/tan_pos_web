import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar.tsx";

export const PrivateApp = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
};
