import TeachersList from "./TeachersList";
import css from "./TeachersLict.module.css";
import Cards from "@/components/Cards/Cards";

const page = () => {
  return (
    <div className={css.container}>
      <TeachersList />
      <Cards />
    </div>
  );
};

export default page;
