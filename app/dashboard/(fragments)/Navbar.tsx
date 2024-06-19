import { Ambulance } from "@/public";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

const Navbar = ({ header }) => {
  const { token } = useAuth();
  const [profile, setProfile] = useState<string>("");

  async function getFaskes() {
    const response = await fetch("/api/faskes", {
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
    const fetchProfile = async () => {
      const data = await getFaskes();
      setProfile(data.data.name);
    };
    fetchProfile();
  }, []);

  return (
    <div className="flex flex-row justify-between items-center text-primary">
      <h1 className="font-bold text-3xl">{header}</h1>
      <div className="flex flex-row gap-8 items-center">
        <i className="ri-notification-3-fill text-3xl"></i>
        <div className="flex flex-row gap-4 items-center">
          <Image
            src={Ambulance}
            alt="Ambulance"
            width={50}
            height={50}
            className="rounded-full overflow-hidden"
          />
          <h1 className="text-xl font-medium">{profile}</h1>
        </div>
        <i className="ri-arrow-down-s-fill text-3xl"></i>
      </div>
    </div>
  );
};

export default Navbar;
