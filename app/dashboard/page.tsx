"use client";
import React, {  useState } from "react";
import Sidebar from "./(fragments)/Sidebar";
import Dashboard from "./(fragments)/Dashboard";
import KelolaKadar from "./(fragments)/KelolaKadar";
import PermintaanKadar from "./(fragments)/PermintaanKadar";
import Profile from "./(fragments)/Profile";
import Navbar from "./(fragments)/Navbar";

const page = () => {
  const [activeSection, setActiveSection] = useState<string>("dashboard");



  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />;
      case "kelolakadar":
        return <KelolaKadar />;
      case "permintaankadar":
        return <PermintaanKadar />;
      default:
        return <Profile />;
    }
  };
  return (
    <main className="h-screen grid grid-cols-[1fr,4fr] bg-primary font-poppins">
      <Sidebar onSelect={setActiveSection} isActive={activeSection} />
      <div className="p-16 rounded-tl-[64px] rounded-bl-[64px] bg-white flex flex-col gap-4">
        <Navbar />
        {renderContent()}
      </div>
    </main>
  );
};

export default page;
