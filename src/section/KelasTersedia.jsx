import DoubleCircle from '../assets/img/vektor/double-circle.svg';
import Zigzag from '../assets/img/vektor/zigzag-green.svg';
import Sparkle from '../assets/img/vektor/Sparkle.png';

import { kelasTersedia } from "../data/index.js";

const KelasTersedia = () => {
  return (
    <div className="w-full min-h-screen md:px-20 overflow-x-hidden px-8 py-24 flex flex-col justify-center items-center relative gap-8 bg-gradient-to-b from-white to-oren-200">
      <img src={DoubleCircle} alt="vektor" className='absolute top-10 lg:top-12 size-20 lg:size-32 -left-4'/>
      <img src={Zigzag} alt="vektor" className='absolute bottom-1 size-32 -right-6'/>
      <img src={Sparkle} alt="vektor" className='absolute top-24 lg:top-56 md:right-20 lg:right-12 md:size-6 lg:size-8 size-6 right-8'/>
      <div className="flex flex-col text-center gap-4">
        <h1 className="text-hijau-800 text-2xl md:text-3xl lg:text-5xl font-semibold">
          Kelas <span className="text-hijau-500">Tersedia</span>
        </h1>
        <p className="text-xs md:text-base lg:text-lg text-secondary-abu font-medium">
          Kelas yang tersedia untuk menunjang persiapanmu!
        </p>
      </div>
      <div>
        <div className="mx-auto flex flex-col lg:flex-row gap-8">
          {kelasTersedia.map((tersedia) => (
            <div
              className="card lg:card-side bg-base-100 shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out hover:bg-hijau-500 group"
              key={tersedia.id}
            >
              <figure className="w-full h-48 lg:h-auto lg:w-48 relative">
                <img
                  src={tersedia.img}
                  alt="kelas tersedia"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-hijau-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </figure>
              <div className="card-body flex flex-col justify-between text-black group-hover:text-white">
                <h2 className="card-title text-hijau-500 group-hover:text-white">{tersedia.judul}</h2>
                <p className="group-hover:text-white">{tersedia.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KelasTersedia;