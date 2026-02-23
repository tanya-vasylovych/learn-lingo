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
        </li>
      </ul>
    </div>
  );
};

export default Cards;
