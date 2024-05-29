import React from "react";

const AksiButton = ({ label, handleClick }) => {
  const buttonType = () => {
    switch (label) {
      case "Tolak":
        return "bg-red-500";
      case "Terima":
        return "bg-blue-500";
    }
  };
  return (
    <button
      onClick={() => handleClick((prev) => !prev)}
      className={`px-4 py-2 ${buttonType()} text-white text-center font-bold rounded-[8px] overflow-hidden`}
    >
      {label}
    </button>
  );
};

export default AksiButton;
