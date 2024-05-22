import { FetchData } from "@/app/api/animeTest";
import Cell from "@/components/Cell";
import Dropdown from "@/components/Dropdown";
import SearchBar from "@/components/SearchBar";
import { Ambulance } from "@/public";
import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";

const Dashboard = () => {
  const [datas, setDatas] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [allData, setAllData] = useState([]);

  const itemsPerPage = 8;

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
    setCurrentPage(1); // Reset to the first page on search
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
          <SearchBar setSearchQuery={setSearchQuery} /> <Dropdown />
        </div>

        {allData.length < 1 ? (
          <h1 className="w-full h-full justify-center items-center flex text-lg text-gray-500 my-auto">
            Data Is Loading...
          </h1>
        ) : (
          <div className="w-full rounded-2xl overflow-hidden">
            <div className="overflow-hidden bg-gray-300 w-full grid grid-cols-[3fr,2fr,1fr] px-8 py-6 text-primary font-bold">
              <h1>Jenis Golongan Darah</h1>
              <h1>Tanggal Masuk</h1>
              <h1>Tersedia</h1>
            </div>

            {displayedItems.map((item, index) => (
              <Cell
                date={item?.aired?.prop?.to?.year}
                stocks={item?.favorites}
                title={item?.title}
                key={index}
                isOdd={index % 2 !== 0}
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
    </main>
  );
};

export default Dashboard;
