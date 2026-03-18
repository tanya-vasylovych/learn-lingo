"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import css from "./BookTrialLesson.module.css";
import Image from "next/image";
import { FiX } from "react-icons/fi";

const schema = yup.object({
  reason: yup.string().required("Choose a reason"),
  fullName: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone number is required"),
});

type FormData = yup.InferType<typeof schema>;

const reasons = [
  "Career and business",
  "Lesson for kids",
  "Living abroad",
  "Exams and coursework",
  "Culture, travel or hobby",
];

const BookTrialLesson = ({
  onClose,
  teacherName,
}: {
  onClose: () => void;
  teacherName: string;
}) => {
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
    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  const onSubmit = (data: FormData) => {
    console.log("Booking:", data);
    reset();
    onClose();
  };

  return (
    <div className={css.overlay} onClick={onClose}>
      <div className={css.container} onClick={(e) => e.stopPropagation()}>
        <button className={css.cancelButton} onClick={onClose}>
          <FiX />
        </button>

        <header className={css.header}>
          <h2 className={css.title}>Book trial lesson</h2>
          <p className={css.subtitle}>
            Our experienced tutor will assess your current language level,
            discuss your learning goals, and tailor the lesson to your specific
            needs.
          </p>
        </header>

        <div className={css.teacher}>
          <Image
            src="/image/image 4.png"
            alt="teacher"
            width={44}
            height={44}
            className={css.teacherImg}
          />
          <div>
            <p className={css.your}>Your teacher</p>
            <p className={css.name}>{teacherName}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <p className={css.text}>
            What is your main reason for learning English?
          </p>

          <div className={css.radioGroup}>
            {reasons.map((reason, i) => (
              <label key={i} className={css.field}>
                <input
                  type="radio"
                  value={reason}
                  className={css.radio}
                  {...register("reason")}
                />
                <span className={css.radioLabel}>{reason}</span>
              </label>
            ))}
            {errors.reason && (
              <p className={css.error}>{errors.reason.message}</p>
            )}
          </div>

          <input
            {...register("fullName")}
            placeholder="Full Name"
            className={`${css.input} ${errors.fullName ? css.errorInput : ""}`}
          />
          {errors.fullName && (
            <p className={css.error}>{errors.fullName.message}</p>
          )}

          <input
            {...register("email")}
            placeholder="Email"
            className={`${css.input} ${errors.email ? css.errorInput : ""}`}
          />
          {errors.email && <p className={css.error}>{errors.email.message}</p>}

          <input
            {...register("phone")}
            placeholder="Phone number"
            className={`${css.input} ${errors.phone ? css.errorInput : ""}`}
          />
          {errors.phone && <p className={css.error}>{errors.phone.message}</p>}

          <button
            type="submit"
            disabled={!isValid}
            className={`${css.submitButton} ${!isValid ? css.buttonDisabled : ""}`}
          >
            Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookTrialLesson;
