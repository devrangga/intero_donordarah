"use client";
import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { heroImage } from "@/public";
import Input from "@/components/Input";
import { Login, Register, login, register } from "@/constant";
import Submit from "@/components/Submit";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";

export default function Home() {
  const [isRegisterMode, setIsRegisterMode] = useState<boolean>(true);
  const [administrations, setAdministrations] = useState<Register[] | Login[]>(
    register
  );
  const { setToken } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone_number: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const toggleMode = () => {
    setIsRegisterMode((prev) => !prev);
  };

  useEffect(() => {
    setAdministrations(isRegisterMode ? register : login);
  }, [isRegisterMode]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const endpoint = isRegisterMode ? "/api/register" : "/api/login";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error("Failed to post data:", error);
        setErrorMessage("Login failed: " + error.message);
        throw new Error("Failed to post data: " + error.message);
      }

      const result = await response.json();

      if (result.data.access_token) {
        setToken(result.data.access_token);
        if (!isRegisterMode) {
          router.push("/dashboard");
        } else {
          setFormData({
            name: "",
            address: "",
            phone_number: "",
            email: "",
            password: "",
          });
        }
      } else {
        console.error("No access token in response");
        setErrorMessage("No access token in response");
      }
    } catch (error) {
      console.error("Error during registration:", error.message);
      setErrorMessage("Error during registration: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="h-screen w-screen bg-white relative font-poppins grid grid-cols-2">
      <div className="w-full h-full flex flex-col bg-primary justify-center items-center rounded-tr-[48px] rounded-br-[48px]">
        <Image src={heroImage} height={500} width={500} alt="Doctor" />
        <h1 className="text-white text-4xl max-w-[70%] text-center font-bold">
          Donor Darah Mulai Hari Ini, Ubah Dunia dengan Setetes Kehidupan
        </h1>
      </div>
      <div className="w-full h-full bg-white flex items-center justify-center px-48 flex-col gap-16">
        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-4xl text-primary">
              {isRegisterMode ? "Daftar" : "Login"}
            </h1>
            <h3 className=" text-lg text-primary ">
              {isRegisterMode ? "Sudah punya akun?" : "Belum punya akun?"}
              <button
                className="font-semibold cursor-pointer"
                onClick={toggleMode}
              >
                {isRegisterMode ? "Login disini" : "Daftar disini"}
              </button>
            </h3>
          </div>
          <div className="flex flex-col gap-4">
            {administrations.map((item, index) => (
              <Input
                name={item.name}
                logo={item.logo}
                isPassword={item.isPassword}
                title={item.title}
                placeholder={item.placeholder}
                key={index}
                value={formData[item.name]}
                onChange={handleChange}
              />
            ))}
          </div>
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
        </div>
        <div className="gap-8 w-full flex flex-col">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row ">
              <input type="checkbox" className="w-[48px] h-auto bg-primary" />
              <p>Ingat Password</p>
            </div>
            <Link href={"#"}>
              <h1 className="text-primary font-bold">Lupa Password</h1>
            </Link>
          </div>
          <button onClick={handleSubmit} disabled={isLoading}>
            <Submit isLoading={isLoading} />
          </button>
          <h1 className="text-center">
            {isRegisterMode ? "Sudah memiliki akun?" : "Belum memiliki akun?"}
            <span className="text-primary font-bold">
              {isRegisterMode ? "Login disini." : "Daftar disini."}
            </span>
          </h1>
        </div>
      </div>
    </main>
  );
}
