import TeachersList from "./TeachersList";
import css from "./TeachersList.module.css";

const page = () => {
  return (
    <div className={css.container}>
      <TeachersList />
    </div>
  );
};

export default page;
