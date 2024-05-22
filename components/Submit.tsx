import Link from "next/link";
import React from "react";

const Submit = () => {
  return (
    <Link href={"/dashboard"}>
      <button className="bg-primary text-white rounded-xl px-8 py-4 w-full text-center">
        Submit
      </button>
    </Link>
  );
};

export default Submit;
