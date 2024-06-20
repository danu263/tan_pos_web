import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Navbar Page!</h1>
      <a href="/">Go to main | </a>
      <a href="/members">Go to Members | </a>
      <a href="/pos">Go to POS</a>
      <br />
      <Link to="/">Go to main | </Link>
      <Link to="/members">Go to Members | </Link>
      <Link to="/pos">Go to POS</Link>
      <br />
      <NavLink to="/">Go to main | </NavLink>
      <NavLink to="/members">Go to Members | </NavLink>
      <NavLink to="/pos">Go to POS</NavLink>
      <br />
      <button onClick={() => navigate("/pos")}>
        Go to POS | using useNavigate hook
      </button>
      <Outlet />
    </>
  );
};
