import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Profile from "./components/Profile";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <main className="container main-container">
              <div className="text-center mb-5">
                <h1>Social Media App</h1>
                <p className="lead">Login or register to get started.</p>
              </div>
            </main>
          }
        />

        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;