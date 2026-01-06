import css from "./page.module.css";

export default function Home() {
  return (
    <div>
      <main>
        <div className={css.container}>
          {" "}
          <div className={css.box}>
            <div className={css.text}>
              <h1 className={css.title}>
                Unlock your potential with the best language tutors
              </h1>
              <p className={css.description}>
                Embark on an Exciting Language Journey with Expert Language
                Tutors: Elevate your language proficiency to new heights by
                connecting with highly qualified and experienced tutors.
              </p>
              <button className={css.bttn}>Get started</button>
            </div>
          </div>
          <div className={css.box}></div>
        </div>
      </main>
    </div>
  );
}
