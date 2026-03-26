"use client";
import Image from "next/image";
import css from "./Cards.module.css";
import { LuBookOpen } from "react-icons/lu";
import { GoStarFill } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";
import BookTrialLesson from "../BookTrialLesson/BookTrialLesson";

const CardJane = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <div className={css.cardOpen}>
      <Image
        src="/image/david.png"
        alt="david"
        width={96}
        height={96}
        priority={true}
        quality={85}
      />
      <div>
        <div className={css.detailBlock}>
          <div>
            <p className={css.text}>Languages</p>
            <p className={css.name}>David Johnson</p>
          </div>
          <div>
            <ul className={css.details}>
              <li className={css.detail}>
                <LuBookOpen className={css.icon} />
                Lessons online
              </li>
              <li className={css.detail}>Lessons done: 1203</li>
              <li className={css.detail}>
                <GoStarFill className={css.iconStar} />
                Rating: 4.2
              </li>
              <li className={css.detail}>
                Price / 1 hour: <span className={css.price}>35$</span>
              </li>
              <li className={css.detail} onClick={toggleFavorite}>
                <CiHeart
                  className={`${css.iconHeart} ${isFavorite ? css.isFavorite : ""}`}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className={css.info}>
          <ul>
            <li className={css.infoItem}>
              <p className={css.detail}>
                <span className={css.spanWord}>Speaks:</span> Mandarin Chinese
              </p>
            </li>
            <li className={css.infoItem}>
              <p className={css.detail}>
                <span className={css.spanWord}>Lesson Info:</span>
                Lessons focus on developing all four language skills: speaking,
                listening, reading, and writing.
              </p>
            </li>
            <li className={css.infoItem}>
              <p className={css.detail}>
                <span className={css.spanWord}>Conditions:</span>
                Teaches all age groups, including children, teenagers, and
                adults. Offers group lessons at discounted rates.
              </p>
            </li>
            <li className={css.infoItem}>
              <p className={css.detailOpen}>
                David has been teaching Mandarin Chinese for 4 years. He has a
                passion for language teaching and is dedicated to helping his
                students succeed. With a solid understanding of the language and
                culture, David ensures that his lessons are both informative and
                enjoyable.
              </p>
            </li>
          </ul>
        </div>
        <div className={css.feedbacksBlock}>
          <ul className={css.feedbacks}>
            <li className={css.feedback}>
              <div className={css.feedbackImage}>
                <Image
                  src="/image/david.png"
                  alt="man"
                  width={44}
                  height={44}
                  priority={true}
                  quality={85}
                />
                <div>
                  <p className={css.spanWord}>Grace</p>
                  <p className={css.fdbckRank}>
                    <GoStarFill className={css.iconStar} />
                    4.0
                  </p>
                </div>
              </div>
              <div>
                {" "}
                <p className={css.detail}>
                  David explains things clearly and is knowledgeable in the
                  subject.
                </p>
              </div>
            </li>
            <li className={css.feedback}>
              <div className={css.feedbackImage}>
                <Image
                  src="/image/david.png"
                  alt="girl"
                  width={44}
                  height={44}
                  priority={true}
                  quality={85}
                />
                <div>
                  <p className={css.spanWord}>Henry</p>
                  <p className={css.fdbckRank}>
                    <GoStarFill className={css.iconStar} />
                    3.0
                  </p>
                </div>
              </div>
              <div>
                {" "}
                <p className={css.detail}>
                  David`s teaching style didn`t suit me, but he is still a good
                  teacher.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul className={css.level}>
            <li className={css.levelItem}>#A1 Beginner</li>
            <li className={css.levelItem}>#A2 Elementary</li>
            <li className={css.levelItem}>#B1 Intermediate</li>
          </ul>
        </div>
        <button className={css.bookLesson} onClick={() => setIsModalOpen(true)}>
          Book trial lesson
        </button>
        {isModalOpen && (
          <BookTrialLesson
            onClose={() => setIsModalOpen(false)}
            teacherName="David Johnson"
          />
        )}
      </div>
    </div>
  );
};

export default CardJane;
