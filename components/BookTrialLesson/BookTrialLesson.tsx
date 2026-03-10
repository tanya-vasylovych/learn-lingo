"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import css from "./BookTrialLesson.module.css";

const schema = yup.object({
  date: yup.string().required("Дата обов'язкова"),
  time: yup.string().required("Час обов'язковий"),
  duration: yup.string().required("Тривалість обов'язкова"),
});

type FormData = yup.InferType<typeof schema>;

interface BookingModalProps {
  onClose: () => void;
  teacherName: string;
}

const BookTrialLesson = ({ onClose, teacherName }: BookingModalProps) => {
  const [showDuration, setShowDuration] = useState(false);

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
    console.log("Booking data:", data, `for ${teacherName}`);
    reset();
    onClose();
  };

  return (
    <div className={css.overlay} onClick={onClose}>
      <div className={css.container} onClick={(e) => e.stopPropagation()}>
        <div className={css.header}>
          <h2 className={css.title}>Book trial lesson</h2>
          <p className={css.subtitle}>with {teacherName}</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
          <div className={css.field}>
            <input
              {...register("date")}
              type="date"
              className={`${css.input} ${errors.date ? css.inputError : ""}`}
            />
            {errors.date && <p className={css.error}>{errors.date.message}</p>}
          </div>

          <div className={css.field}>
            <input
              {...register("time")}
              type="time"
              className={`${css.input} ${errors.time ? css.inputError : ""}`}
            />
            {errors.time && <p className={css.error}>{errors.time.message}</p>}
          </div>

          <div className={css.field}>
            <select
              {...register("duration")}
              className={`${css.input} ${errors.duration ? css.inputError : ""}`}
            >
              <option value="">Select duration</option>
              <option value="30">30 minutes</option>
              <option value="60">1 hour</option>
              <option value="90">1.5 hours</option>
            </select>
            {errors.duration && (
              <p className={css.error}>{errors.duration.message}</p>
            )}
          </div>

          <div className={css.buttons}>
            <button
              type="button"
              onClick={onClose}
              className={css.cancelButton}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!isValid}
              className={`${css.submitButton} ${!isValid ? css.buttonDisabled : ""}`}
            >
              Book Lesson
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookTrialLesson;
