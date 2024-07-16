import { useState, useEffect } from "react";

import { HiNewspaper } from "react-icons/hi";
import { PiBookBookmarkFill } from "react-icons/pi";
import { IoTimeOutline } from "react-icons/io5";
import { IoTicket } from "react-icons/io5";

import { paketPromo, kategoriPromo } from "../data/index.js";

import VektorGelombang from "../assets/img/vektor/vektor-gelombang.png";
import Sparkle from "../assets/img/vektor/Sparkle.png";
import CirclePurple from "../assets/img/vektor/circle-purple.png";
import CircleOrange from "../assets/img/vektor/circle-orange.png";
import Zigzag from "../assets/img/vektor/zigzag-green.svg";

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
    <div className="w-full min-h-screen">
      <div className="w-full md:px-20 overflow-x-hidden px-8 md:pt-24 md:pb-12 pt-16 pb-8 flex flex-col relative gap-8 bg-gradient-to-b justify-center from-hijau-sage to-white">
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
      <div className="w-full flex flex-col py-10 items-center md:gap-8 gap-4 relative">
        <img
          src={Zigzag}
          alt="vektor"
          className="absolute -right-4 md:right-2/3 lg:right-3/4 top-0 lg:top-12 z-0 size-24 md:size-32"
        />
        <img
            src={Sparkle}
            alt="vektor"
            className="absolute top-12 lg:top-48 md:left-7 lg:left-8 lg:size-8 size-6 left-16"
          />
          <img
            src={CirclePurple}
            alt="vektor"
            className="absolute top-2 left-1/3 size-2 lg:size-3 lg:top-6 lg:left-1/4"
          />
          <img
            src={CircleOrange}
            alt="vektor"
            className="absolute top-0 md:top-8 size-3 left-3/4"
          />
        <h1 className="text-oren-500 text-2xl md:text-3xl lg:text-5xl font-semibold">
          <span className="text-hijau-500">Promo </span> Hari Ini
        </h1>
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
      <div className="w-full flex flex-col min-h-screen justify-center py-24 items-center gap-8 bg-hijau-200 relative">
        <img
          src={VektorGelombang}
          alt="vektor"
          className="absolute -left-10 lg:-left-2 top-8 lg:top-12 z-0"
        />
        <img
          src={VektorGelombang}
          alt="vektor"
          className="absolute -right-20 lg:-right-2 top-8 lg:top-64 z-0"
        />
        <img
          src={Zigzag}
          alt="vektor"
          className="absolute bottom-0 size-32 -right-6"
        />
        <h1 className="text-hijau-500 text-2xl md:text-3xl lg:text-5xl font-semibold">
          <span className="text-hijau-800">Kategori </span> Paket
        </h1>
        <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-8 px-8">
          {kategoriPromo.map((kategori) => (
            <div
              className="card bg-base-100 w-full md:w-96 lg:w-1/4 border-2 border-background-subtle"
              key={kategori.id}
            >
              <figure className="px-10 pt-10">
                <img
                  src={kategori.img}
                  alt="kategori"
                  className="rounded-xl w-20 h-20 object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-hijau-500">{kategori.judul}</h2>
                <p className="text-secondary-abu">{kategori.deskripsi}</p>
                <div className="card-actions">
                  <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md text-white hover:bg-hijau-600 font-normal">
                    {kategori.beli}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full py-24">
        <div className="card lg:card-side bg-base-100 shadow-xl shadow-background-subtle lg:w-1/2 w-3/4 mx-auto border border-background-subtle">
          <figure className="px-4">
            <IoTicket className="size-24 text-hijau-600" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-hijau-600">
              Aktifkan Voucher Di Sini
            </h2>
            <p>
              Belajar lebih mudah dengan kode voucher!
              <span className="text-hijau-500"> Aktfikan sekarang.</span>
            </p>
            <input
              type="text"
              placeholder="Masukkan kode"
              className="input input-bordered w-full max-w-xs border-background-subtle"
            />
            <div className="card-actions justify-end">
              <button className="btn btn-primary btn-sm sm:btn-md text-white hover:bg-hijau-600 font-normal">
                Tukar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaketBelajar;
