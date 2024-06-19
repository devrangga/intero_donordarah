import React from "react";
import AksiButton from "./AksiButton";

const PermintaanDarahCell = ({
  id,
  idPeminta,
  idDonor,
  tujuan,
  kuantitas,
  status,
  handleClick,
  isOdd,
}) => {
  return (
    <div
      className={`${
        isOdd ? "bg-gray-50" : "bg-gray-100"
      } grid grid-cols-[1fr,1.5fr,1.5fr,1.5fr,1.5fr,1.5fr] px-8 py-6 text-gray-700`}
    >
      <h1>{id}</h1>
      <h1>{idPeminta}</h1>
      <h1>{idDonor}</h1>
      <h1>{tujuan}</h1>
      <h1>{kuantitas}</h1>
      <div className="flex flex-row gap-2">
        {status === "pending" ? (
          <>
            <AksiButton
              label={"Terima"}
              handleClick={() => handleClick(id, "Terima")}
            />
            <AksiButton
              label={"Tolak"}
              handleClick={() => handleClick(id, "Tolak")}
            />
          </>
        ) : (
          <span className="px-4 py-2 bg-gray-300 text-gray-700 text-center font-bold rounded-[8px] overflow-hidden">
            {status}
          </span>
        )}
      </div>
    </div>
  );
};

export default PermintaanDarahCell;
