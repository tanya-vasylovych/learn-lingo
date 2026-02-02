"use client";
import css from "./Login.module.css";
import { useState, FormEvent, ChangeEvent } from "react";
import { LuEyeOff, LuEye } from "react-icons/lu";

interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Data:", formData);
  };
  return (
    <div className={css.container}>
      <div>
        {" "}
        <h2 className={css.title}>Log In</h2>
        <p className={css.text}>
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </p>
      </div>
      <form onSubmit={handleSubmit} className={css.form}>
        <div className={css.field}>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={css.input}
            placeholder="Email"
          />
        </div>

        <div className={css.field}>
          <div className={css.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className={`${css.input} ${css.inputWithIcon}`}
              placeholder="Password"
            />
            <button
              type="button"
              className={css.passwordIcon}
              onClick={togglePasswordVisibility}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <LuEyeOff /> : <LuEye />}
            </button>
          </div>
        </div>
        <button type="submit" className={css.button}>
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
