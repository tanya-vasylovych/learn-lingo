"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import css from "./Registration.module.css";
import { LuEyeOff, LuEye } from "react-icons/lu";

const schema = yup.object({
  name: yup
    .string()
    .min(2, "Ім'я має бути не менше 2 символів")
    .required("Ім'я обов'язкове"),
  email: yup
    .string()
    .email("Невірний формат email")
    .required("Email обов'язковий"),
  password: yup
    .string()
    .min(8, "Пароль має бути не менше 8 символів")
    .required("Пароль обов'язковий"),
});

type FormData = yup.InferType<typeof schema>;

interface RegistrationProps {
  onClose: () => void;
}

const Registration = ({ onClose }: RegistrationProps) => {
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
    console.log("Registration data:", data);
    reset();
    onClose();
  };

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className={css.container}>
      <div>
        <h2 className={css.title}>Registration</h2>
        <p className={css.text}>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <div className={css.field}>
          <input
            {...register("name")}
            className={`${css.input} ${errors.name ? css.inputError : ""}`}
            placeholder="Name"
          />
          {errors.name && <p className={css.error}>{errors.name.message}</p>}
        </div>

        <div className={css.field}>
          <input
            {...register("email")}
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
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Registration;
