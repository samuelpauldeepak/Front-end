import React from "react";
import styles from "../style";
import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div
      className="max-w-[370px] feedback-card rounded-[20px] 
    px-10 py-12 md:mr-10 mr-0 sm:mr-5 my-5 flex justify-between flex-col"
    >
      <img
        src={quotes}
        alt="quotes image"
        className="w-[42px] h-[27px] object-contain"
      />

      <p className="text-[18px] leading-[32px] my-10 font-poppins font-normal text-white">
        {content}
      </p>
      <div className="flex flex-row">
        <img
          src={img}
          alt="user image"
          className="w-[48px] h-[48px] rounded-full"
        />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          <p className="text-[16px] leading-[24px]  font-poppins font-normal text-dimWhite">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
