import React from "react";
import styles from "../style";
import Button from "./Button";

const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.padding} ${styles.marginY}  sm:flex-row flex-col bg-black-gradient-2 box-shadow rounded-[20px] sm:mt-7 mt-14`}
    >
      <div className="flex flex-1 flex-col">
        <h1 className={`${styles.heading2}`}>Let’s try our service now!</h1>
        <p className={`${styles.paragraph}  mt-5 max-w-[470px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-12`}>
        <Button />
      </div>
    </section>
  );
};

export default CTA;
