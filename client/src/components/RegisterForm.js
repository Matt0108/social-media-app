function RegisterForm() {
  return (
    <div className="card form-card">
      <h2>Register</h2>

      <form>
        <div className="mb-3">
          <label htmlFor="registerUsername" className="form-label">Username</label>
          <input type="text" className="form-control" id="registerUsername" placeholder="Choose username" />
        </div>

        <div className="mb-3">
          <label htmlFor="registerEmail" className="form-label">Email</label>
          <input type="email" className="form-control" id="registerEmail" placeholder="Enter email" />
        </div>

        <div className="mb-3">
          <label htmlFor="registerPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="registerPassword" placeholder="Create password" />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;