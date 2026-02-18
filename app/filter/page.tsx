import Cards from "@/components/Cards/Cards";
import TeachersList from "./TeachersList";
import css from "./TeachersList.module.css";

const page = () => {
  return (
    <div className={css.container}>
      <TeachersList />
      <Cards />
    </div>
  );
};

export default page;
