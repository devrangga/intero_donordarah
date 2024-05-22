import React from "react";
import "remixicon/fonts/remixicon.css";

const SidebarButton = ({ isActive, onSelect, name, label, icon }) => {
  return (
    <button
      onClick={() => onSelect(name)}
      className={`  flex flex-row gap-8 items-center px-6 py-4 hover:bg-white/10 rounded-xl focus:bg-white focus:text-primary ${
        isActive ? "bg-white text-primary" : "bg-transparent text-white"
      } `}
    >
      <i className={`ri-${icon}-fill text-3xl `}></i>
      <h1 className="text-xl">{label}</h1>
    </button>
  );
};

export default SidebarButton;
