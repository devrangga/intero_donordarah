import { FetchData } from "@/app/api/animeTest";
import SearchBar from "@/components/SearchBar";
import React, { useEffect, useState, useCallback } from "react";
import PermintaanDarahCell from "@/components/PermintaanDarahCell";
import Penolakan from "@/components/Penolakan";

const PermintaanKadar = () => {
  const [datas, setDatas] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [allData, setAllData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const itemsPerPage = 6;

  const fetchData = useCallback(async () => {
    const res = await FetchData();
    setAllData(res);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    const filteredData = allData.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
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
    <main className="relative">
      <div className="mt-8 flex flex-col gap-4">
        <div className="w-full">
          <SearchBar setSearchQuery={setSearchQuery} label={"Cari Faskes"} />{" "}
        </div>

        {allData.length < 1 ? (
          <h1 className="w-full h-full justify-center items-center flex text-lg text-gray-500 my-auto">
            Data Is Loading...
          </h1>
        ) : (
          <div className="w-full rounded-2xl overflow-hidden">
            <div className="overflow-hidden bg-gray-300 w-full grid grid-cols-[1.5fr,1.5fr,1.5fr,1.5fr,1.5fr,2fr] px-8 py-6 text-primary font-bold">
              <h1 className="text-start">Nama Faskes</h1>
              <h1 className="text-start">Asal Faskes</h1>
              <h1 className="text-start">Golongan Darah</h1>
              <h1 className="text-start">Rhesus Type</h1>
              <h1 className="text-start">Alamat</h1>
              <h1 className="text-start">Aksi</h1>
            </div>

            {displayedItems.map((item, index) => (
              <PermintaanDarahCell
                date={item?.aired?.prop?.to?.year}
                stocks={item?.favorites}
                title={item?.title}
                key={index}
                isOdd={index % 2 !== 0}
                handleClick={setShowModal}
              />
            ))}
          </div>
        )}

        <div className="flex flex-row gap-4 ml-auto ">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-white border-2 rounded-xl overflow-hidden border-gray-100 text-gray-400"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage * itemsPerPage >= datas.length}
            className="px-4 py-2 bg-white border-2 rounded-xl overflow-hidden border-gray-100 text-gray-400"
          >
            Next
          </button>
        </div>
      </div>

      <Penolakan isShowed={showModal} setShowModal={setShowModal} />
    </main>
  );
};

export default PermintaanKadar;
