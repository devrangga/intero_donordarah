import React from "react";
import { useToast } from "./ui/use-toast";
import { Button } from "./ui/button";
import { ToastAction } from "./ui/toast";

const Penolakan = ({ isShowed, setShowModal }) => {
  const { toast } = useToast();
  return (
    <main
      className={`w-[85%] h-[75vh] grid grid-rows-[1fr,5fr] bg-gray-100 ${
        isShowed ? "absolute" : "hidden"
      } left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden shadow-2xl`}
    >
      <div className="flex items-center justify-between bg-primary text-white text-2xl px-16">
        <h1>Alasan Penolakan Darah</h1>
        <button
          className="text-4xl"
          onClick={() => setShowModal((prev) => !prev)}
        >
          <i className="ri-close-fill"></i>
        </button>
      </div>

      <div className="flex justify-center items-start flex-col px-16 py-8 gap-6">
        <p className="text-start text-lg text-primary font-bold">Note</p>
        <textarea
          name="note"
          maxLength={250}
          className="w-full h-[85%] resize-none rounded-xl overflow-hidden p-4 outline-primary"
        ></textarea>
        <div className="flex flex-row gap-4 self-end">
          <button
            className="px-6 py-2 text-white bg-red-500 text-lg rounded-[8px]"
            onClick={() => setShowModal((prev) => !prev)}
          >
            Batal
          </button>
          <button
            className="px-6 py-2 text-primary bg-gray-200 text-lg rounded-[8px]"
            onClick={() => {
              toast({
                title: "Congratulations!",
                description: "Your message was sent perfectly!",
                className:
                  "bg-primary text-white rounded-xl w-[480px] bottom-[16px] right-[128px]",
                action: (
                  <ToastAction
                    altText="Okay"
                    className="rounded-[8px] overflow-hidden px-8 py-6"
                  >
                    Okay
                  </ToastAction>
                ),
              });
              setShowModal((prev) => !prev);
            }}
          >
            Kirim
          </button>
        </div>
      </div>
    </main>
  );
};

export default Penolakan;
