import { fetchData } from "../main";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function RegisterForm() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    });

    const { username, email, password } = user;

    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

const onSubmit = (e) => {
    e.preventDefault();

    fetchData("/users/register", {
        username,
        email,
        password
    }, "POST")
    .then((data) => {
        console.log(data);
        localStorage.setItem("username", username);
        navigate("/profile");
    })
 .catch((error) => {
    console.log(error);
    alert(error.message || "Registration failed");
});
};
    return (
        <div className="card form-card">

            <h2>Register</h2>

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
                        placeholder="Choose username"
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">
                        Email
                    </label>

                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={onChange}
                        placeholder="Enter email"
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
                        placeholder="Create password"
                    />

                </div>

                <button
                    className="btn btn-success w-100"
                    type="submit"
                >
                    Register
                </button>

            </form>

        </div>
    );

}

export default RegisterForm;