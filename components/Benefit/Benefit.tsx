import css from "./Benefit.module.css";

const Benefit = () => {
  return (
    <div className={css.container}>
      <div className={css.block}>
        <div className={css.box}>
          <p className={css.number}>32,000 +</p>
          <p className={css.text}>Experienced tutors</p>
        </div>
        <div className={css.box}>
          <p className={css.number}>300,000 +</p>
          <p className={css.text}>5-star tutor reviews</p>
        </div>
        <div className={css.box}>
          <p className={css.number}>120 +</p>
          <p className={css.text}>Subjects taught</p>
        </div>
        <div className={css.box}>
          <p className={css.number}>200 +</p>
          <p className={css.text}>Tutor nationalities</p>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
