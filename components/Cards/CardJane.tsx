import Image from "next/image";
import css from "./Cards.module.css";
import { LuBookOpen } from "react-icons/lu";
import { GoStarFill } from "react-icons/go";
import { CiHeart } from "react-icons/ci";

const CardJane = () => {
  return (
    <div>
      <Image
        src="/image/image 4.png"
        alt="girl"
        width={96}
        height={96}
        priority={true}
        quality={85}
      />
      <div>
        <div className={css.detailBlock}>
          <div>
            <p className={css.text}>Languages</p>
            <p className={css.name}>Jane Smith</p>
          </div>
          <div>
            <ul className={css.details}>
              <li className={css.detail}>
                <LuBookOpen className={css.icon} />
                Lessons online
              </li>
              <li className={css.detail}>Lessons done: 1098</li>
              <li className={css.detail}>
                <GoStarFill className={css.iconStar} />
                Rating: 4.8
              </li>
              <li className={css.detail}>
                Price / 1 hour: <span className={css.price}>30$</span>
              </li>
              <li className={css.detail}>
                <CiHeart className={css.iconHeart} />
              </li>
            </ul>
          </div>
        </div>
        <div className={css.info}>
          <ul>
            <li className={css.infoItem}>
              <p className={css.detail}>
                <span className={css.spanWord}>Speaks:</span> German, French
              </p>
            </li>
            <li className={css.infoItem}>
              <p className={css.detail}>
                <span className={css.spanWord}>Lesson Info:</span>
                Lessons are structured to cover grammar, vocabulary, and
                practical usage of the language.
              </p>
            </li>
            <li className={css.infoItem}>
              <p className={css.detail}>
                <span className={css.spanWord}>Conditions:</span>
                Welcomes both adult learners and teenagers (13 years and
                above).Provides personalized study plans.
              </p>
            </li>
            <li className={css.infoItem}>
              <p className={css.detail}>
                Jane is an experienced and dedicated language teacher
                specializing in German and French. She holds a Bachelor`s degree
                in German Studies and a Master`s degree in French Literature.
                Her passion for languages and teaching has driven her to become
                a highly proficient and knowledgeable instructor. With over 10
                years of teaching experience, Jane has helped numerous students
                of various backgrounds and proficiency levels achieve their
                language learning goals. She is skilled at adapting her teaching
                methods to suit the needs and learning styles of her students,
                ensuring that they feel supported and motivated throughout their
                language journey.
              </p>
            </li>
          </ul>
          <p className={css.read}>Read more</p>
        </div>
        <div>
          <ul className={css.level}>
            <li className={css.levelItem}>#A1 Beginner</li>
            <li className={css.levelItem}>#A2 Elementary</li>
            <li className={css.levelItem}>#B1 Intermediate</li>
            <li className={css.levelItem}>#B2 Upper-Intermediate</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardJane;
