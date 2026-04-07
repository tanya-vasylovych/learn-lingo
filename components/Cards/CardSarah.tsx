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
        src="/image/sarah.png"
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
            <p className={css.name}>Sarah Johnson</p>
          </div>
          <div>
            <ul className={css.details}>
              <li className={css.detail}>
                <LuBookOpen className={css.icon} />
                Lessons online
              </li>
              <li className={css.detail}>Lessons done: 1120</li>
              <li className={css.detail}>
                <GoStarFill className={css.iconStar} />
                Rating: 4.6
              </li>
              <li className={css.detail}>
                Price / 1 hour: <span className={css.price}>28$</span>
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
                <span className={css.spanWord}>Speaks:</span> English
              </p>
            </li>
            <li className={css.infoItem}>
              <p className={css.detail}>
                <span className={css.spanWord}>Lesson Info:</span>
                Lessons focus on building conversational skills and grammar
                knowledge.
              </p>
            </li>
            <li className={css.infoItem}>
              <p className={css.detail}>
                <span className={css.spanWord}>Conditions:</span>
                Teaches adults and teenagers (15 years and above).Flexible
                lesson timings available.
              </p>
            </li>
            <li className={css.infoItem}>
              <p className={css.detailOpen}>
                Sarah has been teaching English for 6 years. She has worked with
                students from diverse backgrounds and understands the challenges
                they face while learning a new language. Her teaching approach
                emphasizes practical communication skills and ensures a
                supportive and engaging learning environment.
              </p>
            </li>
          </ul>
        </div>
        <div className={css.feedbacksBlock}>
          <ul className={css.feedbacks}>
            <li className={css.feedback}>
              <div className={css.feedbackImage}>
                <Image
                  src="/image/emily.png"
                  alt="man"
                  width={44}
                  height={44}
                  priority={true}
                  quality={85}
                />
                <div>
                  <p className={css.spanWord}>Emily</p>
                  <p className={css.fdbckRank}>
                    <GoStarFill className={css.iconStar} />
                    4.0
                  </p>
                </div>
              </div>
              <div>
                {" "}
                <p className={css.detail}>
                  Sarah is a patient and helpful teacher. I enjoyed her lessons.
                </p>
              </div>
            </li>
            <li className={css.feedback}>
              <div className={css.feedbackImage}>
                <Image
                  src="/image/alex.png"
                  alt="girl"
                  width={44}
                  height={44}
                  priority={true}
                  quality={85}
                />
                <div>
                  <p className={css.spanWord}>Alex</p>
                  <p className={css.fdbckRank}>
                    <GoStarFill className={css.iconStar} />
                    5.0
                  </p>
                </div>
              </div>
              <div>
                {" "}
                <p className={css.detail}>
                  Sarah`s teaching style is engaging and effective. Highly
                  recommended.
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
            teacherName="Sarah Johnson"
          />
        )}
      </div>
    </div>
  );
};

export default CardJane;
