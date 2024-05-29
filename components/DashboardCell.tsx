import { Anime } from "@/app/api/animeTest";
import React from "react";

const DashboardCell: React.FC<Anime> = ({ title, date, stocks, isOdd }) => {
  return (
    <div
      className={`${
        isOdd ? "bg-gray-50" : "bg-gray-100"
      } grid grid-cols-[3fr,2fr,1fr] px-8 py-6 text-gray-700`}
    >
      <h1>{title}</h1>
      <h1>{date}</h1>
      <h1>{stocks}</h1>
    </div>
  );
};

export default DashboardCell;