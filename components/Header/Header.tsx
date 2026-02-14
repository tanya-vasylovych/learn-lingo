"use client";
import Link from "next/link";
import { useState } from "react";
import css from "./Header.module.css";
import { FiLogIn, FiX } from "react-icons/fi";
import Registration from "@/components/Registration/Registration";
import Login from "@/components/Login/Login";
import Logo from "../Logo/Logo";

const Header = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  return (
    <>
      <header className={css.header}>
        <div className={css.buttons}>
          {" "}
          <Logo />
          <Link href="/" aria-label="Home" className={css.logo}>
            LearnLingo
          </Link>
        </div>

        <nav aria-label="Main Navigation">
          <ul className={css.navigation}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/filter/">Teachers</Link>
            </li>
          </ul>
        </nav>
        <ul className={css.buttons}>
          <li className={css.loginItem}>
            <FiLogIn
              className={css.loginIcon}
              onClick={() => setIsRegistrationOpen(true)}
              style={{ cursor: "pointer" }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setIsRegistrationOpen(true);
                }
              }}
            />
            <button onClick={() => setIsLoginOpen(true)} className={css.login}>
              Log in
            </button>
          </li>
          <li>
            <button
              onClick={() => setIsRegistrationOpen(true)}
              className={css.registration}
            >
              Registration
            </button>
          </li>
        </ul>
      </header>
      {isLoginOpen && (
        <div className={css.modalOverlay} onClick={() => setIsLoginOpen(false)}>
          <div
            className={`${css.modalContent} ${css.loginModal}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={css.closeModal}
              onClick={() => setIsLoginOpen(false)}
            >
              <FiX />
            </button>
            <Login />
          </div>
        </div>
      )}

      {isRegistrationOpen && (
        <div
          className={css.modalOverlay}
          onClick={() => setIsRegistrationOpen(false)}
        >
          <div
            className={`${css.modalContent} ${css.registrationModal}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={css.closeModal}
              onClick={() => setIsRegistrationOpen(false)}
            >
              <FiX />
            </button>
            {isRegistrationOpen && (
              <div
                className={css.modalOverlay}
                onClick={() => setIsRegistrationOpen(false)}
              >
                <div
                  className={`${css.modalContent} ${css.registrationModal}`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className={css.closeModal}
                    onClick={() => setIsRegistrationOpen(false)}
                  >
                    <FiX />
                  </button>
                  <Registration onClose={() => setIsRegistrationOpen(false)} />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
