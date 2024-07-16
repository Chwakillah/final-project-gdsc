import { useState, useEffect } from "react";
import { HiNewspaper } from "react-icons/hi";
import { PiBookBookmarkFill } from "react-icons/pi";
import { IoTimeOutline } from "react-icons/io5";

const PaketBelajar = () => {
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 59));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full min-h-screen">
      <div className="w-full md:px-20 overflow-x-hidden px-8 md:pt-24 md:pb-12 pt-16 pb-8 flex flex-col relative gap-8 bg-hijau-500 justify-center">
        <div className="md:px-20">
          <div className="bg-base-200 collapse collapse-arrow mt-8">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-white text-hijau-500 peer-checked:bg-white peer-checked:text-hijau-500 font-semibold">
              Paket Saat Ini
            </div>
            <div className="collapse-content bg-white text-hijau-800 peer-checked:bg-secondary peer-checked:text-hijau-800 flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <PiBookBookmarkFill className="size-8 text-hijau-600" />
                <div>
                  <h3 className="text-secondary-abu font-semibold text-sm">
                    Paket Belajar
                  </h3>
                  <p className="text-[#ED4459] text-xs font-medium">
                    Tidak Aktif
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <HiNewspaper className="size-8 text-hijau-600" />
                <div>
                  <h3 className="text-secondary-abu font-semibold text-sm">
                    Paket Try Out
                  </h3>
                  <p className="text-[#ED4459] text-xs font-medium">
                    Tidak Aktif
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body flex-row">
            <p className="font-semibold">Berlaku Sampai</p>
            <div className="flex gap-2">
              <IoTimeOutline className="size-5 text-[#ED4459]"/>
              <span className="countdown font-mono font-semibold text-[#ED4459] text-xl">
                <span style={{ "--value": 16 }}>16</span>:
                <span style={{ "--value": 37 }}>24</span>:
                <span style={{ "--value": counter }}>{counter}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaketBelajar;
