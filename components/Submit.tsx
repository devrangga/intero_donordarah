import React from "react";

const Submit = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <div className="bg-primary text-white rounded-xl px-8 py-4 w-full text-center">
      {isLoading ? "Loading..." : "Submit"}
    </div>
  );
};

export default Submit;
