import TeachersList from "./TeachersList";
import css from "./TeachersLict.module.css";

const page = () => {
  return (
    <div className={css.container}>
      <TeachersList />
    </div>
  );
};

export default page;
