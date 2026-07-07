import { fetchData } from "../main";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function LoginForm() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const { username, password } = user;

    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

  const onSubmit = (e) => {
    e.preventDefault();

    fetchData("/users/login", {
        username,
        password
    }, "POST")
    .then((data) => {
        console.log(data);
        localStorage.setItem("username", username);
        navigate("/profile");
    })
    .catch((error) => {
        console.log(error);
        alert("Login failed");
    });
};

    return (
        <div className="card form-card">

            <h2>Login</h2>

            <form onSubmit={onSubmit}>

                <div className="mb-3">

                    <label className="form-label">
                        Username
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        value={username}
                        onChange={onChange}
                        placeholder="Enter username"
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">
                        Password
                    </label>

                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={password}
                        onChange={onChange}
                        placeholder="Enter password"
                    />

                </div>

                <button
                    className="btn btn-primary w-100"
                    type="submit"
                >
                    Login
                </button>

            </form>

        </div>
    );

}

export default LoginForm;