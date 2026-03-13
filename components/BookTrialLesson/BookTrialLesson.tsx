"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import css from "./BookTrialLesson.module.css";
import Image from "next/image";

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
          <p className={css.subtitle}>
            Our experienced tutor will assess your current language level,
            discuss your learning goals, and tailor the lesson to your specific
            needs.
          </p>
        </div>
        <div className={css.teacher}>
          <Image
            src="/image/image 4.png"
            alt="girl"
            width={44}
            height={44}
            priority={true}
            quality={85}
          />
          <div>
            <p className={css.your}>Your teacher</p>
            <p className={css.name}>{teacherName}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
          <div className={css.field}>
            <input type="text" className={css.input} placeholder="Full Name" />
          </div>

          <div className={css.field}>
            <input type="text" className={css.input} placeholder="Email" />
          </div>

          <div className={css.field}>
            <input
              type="text"
              className={css.input}
              placeholder="Phone number"
            />
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
