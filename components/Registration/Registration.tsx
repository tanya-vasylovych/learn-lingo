"use client";
import css from "./Registration.module.css";
import { useState, FormEvent, ChangeEvent } from "react";
import { LuEyeOff, LuEye } from "react-icons/lu";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
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
        <h2 className={css.title}>Registration</h2>
        <p className={css.text}>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </p>
      </div>
      <form onSubmit={handleSubmit} className={css.form}>
        <div className={css.field}>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={css.input}
            placeholder="Name"
          />
        </div>

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
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Registration;
