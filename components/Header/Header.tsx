import Link from "next/link";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home" className={css.logo}>
        LearnLingo
      </Link>
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
        <li>
          <Link href="/auth/login" className={css.login}>
            Log in
          </Link>
        </li>
        <li>
          <Link href="/auth/register" className={css.registration}>
            Registration
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
