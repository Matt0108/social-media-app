function LoginForm() {
  return (
    <div className="card form-card">
      <h2>Login</h2>

      <form>
        <div className="mb-3">
          <label htmlFor="loginUsername" className="form-label">Username</label>
          <input type="text" className="form-control" id="loginUsername" placeholder="Enter username" />
        </div>

        <div className="mb-3">
          <label htmlFor="loginPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="loginPassword" placeholder="Enter password" />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;