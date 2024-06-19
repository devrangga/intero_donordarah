"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "./(fragments)/Sidebar";
import Dashboard from "./(fragments)/Dashboard";
import KelolaKadar from "./(fragments)/KelolaKadar";
import PermintaanKadar from "./(fragments)/PermintaanKadar";
import Profile from "./(fragments)/Profile";
import Navbar from "./(fragments)/Navbar";
import { useAuth } from "@/context/AuthContext";

const Page = () => {
  const [activeSection, setActiveSection] = useState<string>("Dashboard");
  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      console.log("Token:", token);
    } else {
      console.log("No token available.");
    }
  }, [token]);

  const renderContent = () => {
    switch (activeSection) {
      case "Dashboard":
        return <Dashboard />;
      case "Kelola Kadar":
        return <KelolaKadar />;
      case "Permintaan Kadar":
        return <PermintaanKadar />;
      default:
        return <Profile />;
    }
  };

  return (
    <main className="h-screen grid grid-cols-[1fr,4fr] bg-primary font-poppins">
      <Sidebar onSelect={setActiveSection} isActive={activeSection} />
      <div className="p-16 rounded-tl-[64px] rounded-bl-[64px] bg-white flex flex-col gap-4">
        <Navbar header={activeSection} />
        {renderContent()}
      </div>
    </main>
  );
};

export default Page;
