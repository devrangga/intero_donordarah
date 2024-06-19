import KelolaKadarCell from "@/components/KelolaKadarCell";
import TambahPendonorButton from "@/components/TambahPendonorButton";
import SearchBar from "@/components/SearchBar";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

const KelolaKadar = () => {
  const [datas, setDatas] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [allData, setAllData] = useState([]);
  const { token } = useAuth();

  const itemsPerPage = 8;

  async function getPendonor() {
    const response = await fetch("/api/donor", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();
    console.log(result.data);
    return result.data;
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await getPendonor();
      setAllData(res);
    };
    fetchData();
  }, [token]);

  useEffect(() => {
    const filteredData = allData.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setDatas(filteredData);
    setCurrentPage(1);
  }, [searchQuery, allData]);

  const displayedItems = datas.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <main>
      <div className="mt-8 flex flex-col gap-4">
        <div className="grid grid-cols-[4fr,1fr] w-full gap-16">
          <SearchBar setSearchQuery={setSearchQuery} label={"Cari Pendonor"} />
          <TambahPendonorButton />
        </div>

        {allData.length < 1 ? (
          <h1 className="w-full h-full justify-center items-center flex text-lg text-gray-500 my-auto">
            Data Is Loading...
          </h1>
        ) : (
          <div className="w-full rounded-2xl overflow-hidden">
            <div className="overflow-hidden bg-gray-300 w-full grid grid-cols-[1.5fr,1fr,1.5fr,1fr,2fr,1fr] px-8 py-6 text-primary font-bold">
              <h1 className="text-start">Nama Pendonor</h1>
              <h1 className="text-start">Jenis Kelamin</h1>
              <h1 className="text-start">Golongan Darah</h1>
              <h1 className="text-start">Rhesus Type</h1>
              <h1 className="text-start">Nomor Handphone</h1>
              <h1 className="text-start">Alamat</h1>
            </div>

            {displayedItems.map((item, index) => (
              <KelolaKadarCell
                namaPendonor={item.name}
                jenisKelamin={item.gender}
                golonganDarah={item.blood_type}
                rhesus={item.rhesus_type}
                nomorHp={item.phone_number}
                alamat={item.address}
                isOdd={index % 2 !== 0}
                key={index}
              />
            ))}
          </div>
        )}

        <div className="flex flex-row gap-4 ml-auto">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`px-4 py-2 border-2 rounded-xl overflow-hidden border-gray-100 ${
              currentPage === 1
                ? "bg-white text-gray-400"
                : "bg-gray-500 text-white "
            }`}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage * itemsPerPage >= datas.length}
            className={`px-4 py-2 border-2 rounded-xl overflow-hidden border-gray-100 ${
              currentPage * itemsPerPage >= datas.length
                ? "bg-white text-gray-400 "
                : "bg-gray-500 text-white "
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </main>
  );
};

export default KelolaKadar;
