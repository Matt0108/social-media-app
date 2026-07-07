import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <Link className="navbar-brand" to="/">
          Social Media App
        </Link>

        <div className="navbar-nav">
          <Link className="nav-link" to="/profile">
            Profile
          </Link>
          <Link className="nav-link" to="/login">
            Login
          </Link>
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}

export default Navbar;