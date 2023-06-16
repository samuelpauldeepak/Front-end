import React from "react";

const Button = ({ styles }) => {
  return (
    <div>
      <button
        type="button"
        className={`py-4 px-6 bg-blue-gradient outline-none font-poppins font-medium text-[18px] ${styles} rounded-[10px] text-primary`}
      >
        Get Started
      </button>
    </div>
  );
};

export default Button;
