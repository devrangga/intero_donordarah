import SearchBar from "@/components/SearchBar";
import React, { useEffect, useState } from "react";
import PermintaanDarahCell from "@/components/PermintaanDarahCell";
import Penolakan from "@/components/Penolakan";
import { useAuth } from "@/context/AuthContext";

const PermintaanKadar = () => {
  const [datas, setDatas] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [allData, setAllData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { token } = useAuth();

  const itemsPerPage = 6;

  async function getAllRequests() {
    const response = await fetch("/api/minta-darah", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();
    return result.data.data;
  }

  async function acceptDarahById(id) {
    try {
      const response = await fetch(`/api/terima-darah/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Accept result:", result.data);
      return result;
    } catch (error) {
      console.error("Failed to accept darah:", error);
      return null;
    }
  }

  async function rejectDarahById(id) {
    try {
      const response = await fetch(`/api/tolak-darah/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Reject result:", result.data);
      return result;
    } catch (error) {
      console.error("Failed to reject darah:", error);
      return null;
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllRequests();
      setAllData(res);
    };
    fetchData();
  }, [token]);

  useEffect(() => {
    const filteredData = allData.filter((item) =>
      item.requester_hf_id
        .toString()
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
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

  const handleStatusChange = async (id, action) => {
    let result;
    if (action === "Terima") {
      result = await acceptDarahById(id);
    } else {
      result = await rejectDarahById(id);
    }

    if (result && result.data) {
      setAllData((prevData) =>
        prevData.map((item) =>
          item.id === id ? { ...item, status: action.toLowerCase() } : item
        )
      );
    }
  };

  return (
    <main className="relative">
      <div className="mt-8 flex flex-col gap-4">
        <div className="w-full">
          <SearchBar setSearchQuery={setSearchQuery} label={"Cari Faskes"} />
        </div>

        {allData.length < 1 ? (
          <h1 className="w-full h-full justify-center items-center flex text-lg text-gray-500 my-auto">
            Data Is Loading...
          </h1>
        ) : (
          <div className="w-full rounded-2xl overflow-hidden">
            <div className="overflow-hidden bg-gray-300 w-full grid grid-cols-[1fr,1.5fr,1.5fr,1.5fr,1.5fr,1.5fr] px-8 py-6 text-primary font-bold">
              <h1 className="text-start">Id</h1>
              <h1 className="text-start">Id Peminta</h1>
              <h1 className="text-start">Id Donor</h1>
              <h1 className="text-start">Tujuan</h1>
              <h1 className="text-start">Kuantitas</h1>
              <h1 className="text-start">Alamat</h1>
            </div>

            {displayedItems.map((item, index) => (
              <PermintaanDarahCell
                key={index}
                id={item.id}
                idPeminta={item.requester_hf_id}
                idDonor={item.responder_donor_id}
                kuantitas={item.quantity}
                tujuan={item.purpose}
                status={item.status}
                handleClick={handleStatusChange}
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

      <Penolakan isShowed={showModal} setShowModal={setShowModal} />
    </main>
  );
};

export default PermintaanKadar;
