import Image from "next/image";
import css from "./Cards.module.css";
import { LuBookOpen } from "react-icons/lu";
import { GoStarFill } from "react-icons/go";
import { CiHeart } from "react-icons/ci";

const Cards = () => {
  return (
    <div>
      <ul>
        <li className={css.card}>
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
        </li>
        <li className={css.card}>
          <Image
            src="/image/david.png"
            alt="boy"
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
                    <span className={css.spanWord}>Speaks:</span> Mandarin
                    Chinese
                  </p>
                </li>
                <li className={css.infoItem}>
                  <p className={css.detail}>
                    <span className={css.spanWord}>Lesson Info:</span>
                    Lessons focus on developing all four language skills:
                    speaking, listening, reading, and writing.
                  </p>
                </li>
                <li className={css.infoItem}>
                  <p className={css.detail}>
                    <span className={css.spanWord}>Conditions:</span>
                    Teaches all age groups, including children, teenagers, and
                    adults. Offers group lessons at discounted rates.
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
              </ul>
            </div>
          </div>
        </li>
        <li className={css.card}>
          <Image
            src="/image/sarah.jpg"
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
        </li>
      </ul>
    </div>
  );
};

export default Cards;
