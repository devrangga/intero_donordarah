import { Ambulance } from "@/public";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center text-primary">
      <h1 className="font-bold text-3xl">Stok Darah</h1>
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
          <h1 className="text-xl font-medium">Maritza Angel</h1>
        </div>
        <i className="ri-arrow-down-s-fill text-3xl"></i>
      </div>
    </div>
  );
};

export default Navbar;
