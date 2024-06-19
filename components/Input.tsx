// components/Input.tsx
"use client";
import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import { Register } from "@/constant";

interface InputProps extends Register {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  title,
  placeholder,
  logo,
  isPassword,
  name,
  value,
  onChange,
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(isPassword);

  return (
    <div className="flex gap-2 flex-col">
      <h1 className="text-lg text-primary">{title}</h1>
      <div
        className={`bg-gray-50 flex gap-4 px-8 py-4 w-full justify-between rounded-xl overflow-hidden border-2 ${
          isFocus ? "border-gray-400" : "border-gray-100"
        }`}
      >
        <div className="flex gap-4 items-center w-full">
          <i className={`ri-${logo}-line text-gray-400 text-xl`} />
          <input
            name={name}
            type={isHidden ? "password" : "text"}
            placeholder={placeholder}
            className="bg-transparent text-lg w-full h-full outline-none text-primary"
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            value={value}
            onChange={onChange}
          />
        </div>
        {isPassword && (
          <i
            className={`ri-${
              isHidden ? "eye-off" : "eye"
            }-line text-xl text-gray-400 cursor-pointer`}
            onClick={() => setIsHidden((prev) => !prev)}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
