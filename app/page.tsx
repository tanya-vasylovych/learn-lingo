"use client";
import Image from "next/image";
import Benefit from "@/components/Benefit/Benefit";
import css from "./page.module.css";

export default function Home() {
  const handleClick = () => {
    window.location.href = "/filter/";
  };

  return (
    <div>
      {" "}
      <div className={css.container}>
        {" "}
        <div className={css.box}>
          <h1 className={css.title}>
            Unlock your potential with the best{" "}
            <span className={css.language}>language</span> tutors
          </h1>
          <p className={css.description}>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <button className={css.bttn} onClick={handleClick}>
            Get started
          </button>
        </div>
        <div className={css.img}>
          <Image
            src="/image/block.webp"
            alt="Language tutors illustration"
            width={568}
            height={530}
            priority={true}
            quality={85}
          />
        </div>
      </div>
      <div>
        <Benefit />
      </div>
    </div>
  );
}
