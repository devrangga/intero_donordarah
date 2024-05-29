import { Anime } from "@/app/api/animeTest";
import React from "react";
import AksiButton from "./AksiButton";

const PermintaanDarahCell = ({
  title,
  date,
  stocks,
  isOdd,
  handleClick,
}) => {
  return (
    <div
      className={`${
        isOdd ? "bg-gray-50" : "bg-gray-100"
      } grid grid-cols-[1.5fr,1.5fr,1.5fr,1.5fr,1.5fr,2fr] px-8 py-6 text-gray-700`}
    >
      <h1>{title}</h1>
      <h1>{date}</h1>
      <h1>{stocks}</h1>
      <h1>{stocks}</h1>
      <h1>{stocks}</h1>
      <div className="flex flex-row gap-2">
        <AksiButton label={"Terima"} handleClick={handleClick} />
        <AksiButton label={"Tolak"} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default PermintaanDarahCell;
