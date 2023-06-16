import React from "react";
import styles from "../style";
import { stats } from "../constants";

const Stats = () => {
  return (
    <section
      className={`flex flex-row flex-wrap sm:mb-20 mb-6 ${styles.flexCenter}`}
    >
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="text-white flex flex-1 flex-row justify-start items-center m-3 "
        >
          <h1
            className={` text-white font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]`}
          >
            {stat.value}
          </h1>
          <p
            className={` text-gradient font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] uppercase ml-3`}
          >
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
