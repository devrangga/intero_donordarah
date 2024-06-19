import { FetchData } from "@/app/api/animeTest";
import DashboardCell from "@/components/DashboardCell";
import Dropdown from "@/components/Dropdown";
import SearchBar from "@/components/SearchBar";
import { useAuth } from "@/context/AuthContext";
import React, { useEffect, useState, useCallback } from "react";

const Dashboard = () => {
  const [datas, setDatas] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [allData, setAllData] = useState([]);
  const { token } = useAuth();

  const itemsPerPage = 8;

  const fetchData = useCallback(async () => {
    const res = await FetchData();
    setAllData(res);
  }, []);


  async function getPendonorById(id: string) {
    const response = await fetch(`/api/donor/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();
    console.log(result.data[0]);
    return result;
  }

  async function addPendonor() {
    const response = await fetch("/api/donor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();
    console.log(result);
    return result;
  }

  async function getStokDarah() {
    const response = await fetch("/api/stok-darah", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();
    console.log(result.data);
    return result;
  }

  async function getFaskesById(id: string) {
    const response = await fetch(`/api/faskes/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();
    console.log(result.data.data);
    return result;
  }

  async function getStokDarahById(id: string) {
    const response = await fetch(`/api/stok-darah/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();
    console.log(result.data[0]);
    return result;
  }

  

  async function getStokDarahFaskes() {
    const response = await fetch("/api/stok-darah/faskes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();
    console.log(result.data);
    return result;
  }

  async function getRiwayatPakai() {
    const response = await fetch("/api/riwayat-pakai", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();
    console.log(result.data);
    return result;
  }

  async function getAllFaskes() {
    const response = await fetch("/api/all-faskes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();
    console.log(result.data.data);
    return result;
  }



  async function pakaiStok() {
    try {
      const response = await fetch(`/api/pakai-stok`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        // body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to post data");
      }

      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  const [formDataGetDarah, setFormDataGetDarah] = useState({
    responder_hf_id: "",
    responder_donor_id: "",
    quantity: "",
    purpose: "",
  });

  const handleChangeGetDarah = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormDataGetDarah((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitGetDarah = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await getDarah(formData);
      console.log(response);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  async function getDarah(formData?: any) {
    try {
      const response = await fetch(`/api/minta-darah`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        // body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to post data");
      }

      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async function updateFaskes() {
    try {
      const response = await fetch(`/api/faskes`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        // body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to post data");
      }

      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
    // getStokDarahById("2");
    // getStokDarah();
    // getStokDarahFaskes();
    // getRiwayatPakai();
    // pakaiStok();
    // acceptDarahById("25");
    // rejectDarahById("30");
    // getFaskesById("6");
    getAllFaskes();
    // getFaskes();
    // updateFaskes();
    // addPendonor();
    // getPendonorById("2");
    // getPendonor();
    // getDarah();
  }, []);

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
    <main>
      <div className="mt-8 flex flex-col gap-4">
        <div className="grid grid-cols-[4fr,1fr] w-full gap-16">
          <SearchBar
            setSearchQuery={setSearchQuery}
            label={"Cari Golongan Darah"}
          />{" "}
          <Dropdown />
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
              <DashboardCell
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
