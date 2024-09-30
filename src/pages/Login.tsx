import React, { useState } from "react";
import axios from "../api/axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("/login", { email, password });
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="register">
      <div className="container">
        <h2>Sign In</h2>
        <form className="form login__form" onSubmit={submitHandler}>
          {/* {error && <p className="form__error-message">{error}</p>} */}
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn primary">
            Login
          </button>
        </form>
        <small>
          Don't have an account? <Link to="/register">Sign Up</Link>
        </small>
      </div>
    </section>
  );
};

export default Login;
