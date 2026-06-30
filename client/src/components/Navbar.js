function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a className="navbar-brand" href="/">Social Media App</a>

      <div className="navbar-nav">
        <a className="nav-link" href="/profile">Profile</a>
        <a className="nav-link" href="/login">Login</a>
        <a className="nav-link" href="/register">Register</a>
      </div>
    </nav>
  );
}

export default Navbar;