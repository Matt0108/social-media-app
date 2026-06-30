import "./App.css";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <div>
      <Navbar />

      <main className="container main-container">
        <div className="text-center mb-5">
          <h1>Social Media App</h1>
          <p className="lead">Login or register to get started.</p>
        </div>

        <div className="row">
          <div className="col-md-6">
            <LoginForm />
          </div>

          <div className="col-md-6">
            <RegisterForm />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;