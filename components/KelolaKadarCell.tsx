import { Anime } from "@/app/api/animeTest";
import React from "react";

interface KelolaKadar {
  namaPendonor: string;
  jenisKelamin: string;
  golonganDarah: string;
  rhesus: string;
  nomorHp: string;
  alamat: string;
  isOdd: boolean;
}

const KelolaKadarCell: React.FC<KelolaKadar> = ({
  namaPendonor,
  jenisKelamin,
  golonganDarah,
  rhesus,
  nomorHp,
  alamat,
  isOdd,
}) => {
  return (
    <div
      className={`${
        isOdd ? "bg-gray-50" : "bg-gray-100"
      } grid grid-cols-[1.5fr,1fr,1.5fr,1fr,2fr,1fr] px-8 py-6 text-gray-700`}
    >
      <h1>{namaPendonor}</h1>
      <h1>{jenisKelamin}</h1>
      <h1>{golonganDarah}</h1>
      <h1>{rhesus}</h1>
      <h1>{nomorHp}</h1>
      <h1>{alamat}</h1>
    </div>
  );
};

export default KelolaKadarCell;

// <h1 className="text-start">Nama Pendonor</h1>
// <h1 className="text-start">Jenis Kelamin</h1>
// <h1 className="text-start">Golongan Darah</h1>
// <h1 className="text-start">Rhesus Type</h1>
// <h1 className="text-start">Nomor Handphone</h1>
// <h1 className="text-start">Alamat</h1>
