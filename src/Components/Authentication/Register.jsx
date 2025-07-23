import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Header/Logo"

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      setError("Please fill in all fields");
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    // TODO: call your API here
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-bg px-4">
      <div className="w-full max-w-md bg-base-bg p-8 rounded-2xl shadow-lg">
        <div className="w-full text-center">
          <Logo />
        </div>
        <h1 className="text-xl rounded-xl bg-soft-bg my-2 py-2 font-bold text-text-color text-center mb-6">
          Create Account
        </h1>

        {error && <p className="text-error text-sm mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block mb-1 text-sm font-medium text-text-color"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full border border-primary-border focus:border-primary rounded-lg px-4 py-2 outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-text-color"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full border border-primary-border focus:border-primary rounded-lg px-4 py-2 outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium text-text-color"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full border border-primary-border focus:border-primary rounded-lg px-4 py-2 outline-none"
              required
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-1 text-sm font-medium text-text-color"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full border border-primary-border focus:border-primary rounded-lg px-4 py-2 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-third text-white font-medium py-2 rounded-lg transition duration-300"
          >
            Register
          </button>
        </form>

        <p className="text-center text-subtext-color mt-6 text-sm">
          Already have an account?
          <Link to="/login" className="text-primary hover:text-third ml-1">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
