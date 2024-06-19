import SidebarButton from "@/components/SidebarButton";
import { sidebar } from "@/constant";
import React from "react";
import "remixicon/fonts/remixicon.css";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const Sidebar = ({ onSelect, isActive }) => {
  const { token, setToken } = useAuth();
  const router = useRouter();

  async function logOut() {
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      if (response.ok) {
        setToken(null);
        router.push("/");
      } else {
        const result = await response.json();
        console.error("Logout failed:", result);
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  }

  return (
    <main className="bg-primary px-8 py-16 flex flex-col justify-between gap-16">
      <div className="flex flex-col gap-16">
        <div className="flex flex-row gap-4 text-white items-center">
          <i className="ri-service-fill text-6xl"></i>
          <h1 className="font-black text-3xl">SINDAR</h1>
        </div>
        <div className="flex flex-col gap-8">
          {sidebar.map((item, index) => (
            <SidebarButton
              isActive={isActive === item.name}
              key={index}
              onSelect={onSelect}
              icon={item.icon}
              label={item.label}
              name={item.name}
            />
          ))}
        </div>
      </div>

      <div className="w-full text-white gap-4 flex flex-col">
        <div className="w-full h-[0.5px] bg-white"></div>
        <button
          onClick={logOut}
          className="w-full text-white flex flex-row gap-8 items-center px-6 py-4 hover:bg-white/10 rounded-xl focus:bg-white focus:text-primary"
        >
          <i className="ri-login-circle-fill text-3xl rotate-180"></i>
          <p className="text-xl">Log Out</p>
        </button>
      </div>
    </main>
  );
};

export default Sidebar;
