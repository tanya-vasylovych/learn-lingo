import Image from "next/image";
import css from "./Cards.module.css";

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
          <div className={css.text}>
            <p className={css.name}>Jane Smith</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Cards;
