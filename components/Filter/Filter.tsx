import css from "./Filter.module.css";
import { FaChevronDown } from "react-icons/fa";

const Filter = () => {
  return (
    <div className={css.container}>
      <div className={css.selectWrapper}>
        <label className={css.label}>Languages</label>
        <div className={css.customSelect}>
          <select className={css.select}>
            <option value="">French</option>
            <option value="">English</option>
            <option value="">German</option>
            <option value="">Ukrainian</option>
            <option value="">Polish</option>
          </select>
          <FaChevronDown className={css.selectIcon} />
        </div>
      </div>

      <div className={css.selectWrapper}>
        <label className={css.label}>Level of knowledge</label>
        <div className={css.customSelect}>
          <select className={css.level}>
            <option value="">A1 Beginner</option>
            <option value="">A2 Elementary</option>
            <option value="">B1 Intermediate</option>
            <option value="">B2 Upper-Intermediate</option>
          </select>
          <FaChevronDown className={css.selectIcon} />
        </div>
      </div>

      <div className={css.selectWrapper}>
        <label className={css.label}>Price</label>
        <div className={css.customSelect}>
          <select className={css.price}>
            <option value="">10 $</option>
            <option value="">20 $</option>
            <option value="">30 $</option>
            <option value="">40 $</option>
          </select>
          <FaChevronDown className={css.selectIcon} />
        </div>
      </div>
    </div>
  );
};

export default Filter;
