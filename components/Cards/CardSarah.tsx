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
              <li className={css.detail}>Lessons done: 1098</li>
              <li className={css.detail}>
                <GoStarFill className={css.iconStar} />
                Rating: 4.8
              </li>
              <li className={css.detail}>
                Price / 1 hour: <span className={css.price}>30$</span>
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
              <p className={css.detailOpen}>
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
        </div>
        <div className={css.feedbacksBlock}>
          <ul className={css.feedbacks}>
            <li className={css.feedback}>
              <div className={css.feedbackImage}>
                <Image
                  src="/image/image 4.png"
                  alt="man"
                  width={44}
                  height={44}
                  priority={true}
                  quality={85}
                />
                <div>
                  <p className={css.spanWord}>Frank</p>
                  <p className={css.fdbckRank}>
                    <GoStarFill className={css.iconStar} />
                    4.0
                  </p>
                </div>
              </div>
              <div>
                {" "}
                <p className={css.detail}>
                  Jane`s lessons were very helpful. I made good progress.
                </p>
              </div>
            </li>
            <li className={css.feedback}>
              <div className={css.feedbackImage}>
                <Image
                  src="/image/image 4.png"
                  alt="girl"
                  width={44}
                  height={44}
                  priority={true}
                  quality={85}
                />
                <div>
                  <p className={css.spanWord}>Eve</p>
                  <p className={css.fdbckRank}>
                    <GoStarFill className={css.iconStar} />
                    5.0
                  </p>
                </div>
              </div>
              <div>
                {" "}
                <p className={css.detail}>
                  Jane is an amazing teacher! She is patient and supportive.
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
            <li className={css.levelItem}>#B2 Upper-Intermediate</li>
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
