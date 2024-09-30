import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const changeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (userData.password !== userData.password2) {
      setError("Passwords do not match");
      return;
    }

    if (!userData.name || !userData.email || !userData.password) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/api/register", {
        name: userData.name,
        email: userData.email,
        password: userData.password,
        password2: userData.password2,
      });

      if (response.status === 200) {
        console.log(response.data.message);
        setUserData({
          name: "",
          email: "",
          password: "",
          password2: "",
        });
      }
    } catch (err: any) {
      console.error("Registration error:", err); // This will help you understand the exact error
      setError(
        err.response?.data?.message || "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="register">
      <div className="container">
        <h2>Sign Up</h2>
        <form className="form register__form" onSubmit={submitHandler}>
          {error && <p className="form__error-message">{error}</p>}
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={userData.name}
            onChange={changeInputHandler}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={changeInputHandler}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={changeInputHandler}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={userData.password2}
            onChange={changeInputHandler}
          />
          <button type="submit" className="btn primary" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
        <small>
          Already have an account? <Link to="/login">Sign in</Link>
        </small>
      </div>
    </section>
  );
};

export default Register;
