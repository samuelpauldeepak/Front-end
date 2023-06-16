import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`${styles.flexStart} flex-1 flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row bg-discount-gradient rounded-[10px] items-center px-4 py-[6px] ">
          <img
            src={discount}
            alt="discount image"
            className="w-[24px] h-[24px] flex-nowrap"
          />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>
        <div className={`flex flex-row justify-between items-center w-full`}>
          <h1
            className={`flex flex-1  flex-col font-poppins font-semibold ss:text-[72px] text-[52px]
            ss:leading-[100px] leading-[75px]
            `}
          >
            The Next
            <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1
          className={`flex  font-poppins font-semibold ss:text-[68px] text-[52px]
            ss:leading-[100px] leading-[75px] w-full
            `}
        >
          Payment Method
        </h1>
        <p className={`${styles.paragraph} mt-5 mb-7 max-w-[470px]`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div
        className={`flex flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute rounded-full bottom-40 z-[1] w-[80%] h-[80%] top-0 white__gradient" />
        <div className="absolute right-20 bottom-20 z-[0] w-[50%] h-[50%] top-0 blue__gradient" />
      </div>
      <div className="ss:hidden flex justify-center mt-6">
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
