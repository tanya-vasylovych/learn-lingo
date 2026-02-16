"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import css from "./Login.module.css";
import { LuEyeOff, LuEye } from "react-icons/lu";

const schema = yup.object({
  email: yup
    .string()
    .email("Невірний формат email")
    .required("Email обов'язковий"),
  password: yup
    .string()
    .min(6, "Пароль має бути не менше 6 символів")
    .required("Пароль обов'язковий"),
});

type FormData = yup.InferType<typeof schema>;

interface LoginProps {
  onClose: () => void;
}

const Login = ({ onClose }: LoginProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const onSubmit = (data: FormData) => {
    console.log("Login data:", data);
    reset();
    onClose();
  };

  const togglePassword = () => setShowPassword(!showPassword);
  return (
    <div className={css.container}>
      <div>
        <h2 className={css.title}>Log In</h2>
        <p className={css.text}>
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <div className={css.field}>
          <input
            {...register("email")}
            type="email"
            className={`${css.input} ${errors.email ? css.inputError : ""}`}
            placeholder="Email"
          />
          {errors.email && <p className={css.error}>{errors.email.message}</p>}
        </div>

        <div className={css.field}>
          <div className={css.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password")}
              className={`${css.input} ${css.inputWithIcon} ${
                errors.password ? css.inputError : ""
              }`}
              placeholder="Password"
            />
            <button
              type="button"
              className={css.passwordIcon}
              onClick={togglePassword}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <LuEyeOff /> : <LuEye />}
            </button>
          </div>
          {errors.password && (
            <p className={css.error}>{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={!isValid}
          className={`${css.button} ${!isValid ? css.buttonDisabled : ""}`}
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
