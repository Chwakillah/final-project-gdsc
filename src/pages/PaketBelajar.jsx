import { useState, useEffect } from "react";
import { HiNewspaper } from "react-icons/hi";
import { PiBookBookmarkFill } from "react-icons/pi";
import { IoTimeOutline } from "react-icons/io5";
import { paketPromo } from "../data/index.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PaketBelajar = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const [counter, setCounter] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 59));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-hijau-sage to-white justify-center">
      <div className="w-full md:px-20 overflow-x-hidden px-8 md:pt-24 md:pb-12 pt-16 pb-8 flex flex-col relative gap-8">
        <div className="md:px-20">
          <div className="bg-base-200 collapse collapse-arrow mt-8 shadow-sm border border-background-light">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-white text-secondary-abu peer-checked:bg-white peer-checked:text-secondary-abu font-semibold">
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
      <div className="w-full flex flex-col py-10 items-center md:gap-8 gap-4">
        <h1 className="text-oren-500 text-2xl md:text-3xl lg:text-5xl font-semibold"><span className="text-hijau-500">Promo </span> Hari Ini</h1>
        <div className="card bg-base-100 w-full md:w-3/4 lg:w-1/2">
          <Slider {...settings}>
            {paketPromo.map((promo) => (
              <div key={promo.id}>
                <figure className="rounded-t-2xl">
                  <img
                    src={promo.img}
                    alt="promo"
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="p-4 flex flex-row justify-around bg-hijau-500 rounded-b-2xl">
                  <p className="font-semibold text-white text-lg">
                    Berlaku Sampai
                  </p>
                  <div className="flex gap-2 py-1 px-2 rounded-md bg-white items-center justify-center">
                    <IoTimeOutline className="size-5 text-[#ED4459]" />
                    <span className="countdown font-mono font-semibold text-[#ED4459] text-xl">
                      <span style={{ "--value": 16 }}>16</span>:
                      <span style={{ "--value": 37 }}>24</span>:
                      <span style={{ "--value": counter }}>{counter}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <hr />
      <div>
        
      </div>
    </div>
  );
};

export default PaketBelajar;
