import { HiNewspaper } from "react-icons/hi";
import { PiBookBookmarkFill } from "react-icons/pi";
import { FaFolderOpen } from "react-icons/fa";
import { BiSolidMessageAltError } from "react-icons/bi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdModeEdit } from "react-icons/md";
import { dataProfil } from "../../data/index.js";

const getIcon = (iconName) => {
  switch (iconName) {
    case "FaFolderOpen":
      return <FaFolderOpen className="size-10 text-hijau-500" />;
    case "BiSolidMessageAltError":
      return <BiSolidMessageAltError className="size-10 text-hijau-500" />;
    case "RiCustomerService2Fill":
      return <RiCustomerService2Fill className="size-10 text-hijau-500" />;
    default:
      return null;
  }
};

const Profil = () => {
  return (
    <div className="w-full min-h-screen py-10 md:py-20">
      <div className="w-full px-8 md:px-20 bg-hijau-sage py-6">
        <div
          className="flex gap-8 items-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <img
            src="https://avatars.githubusercontent.com/u/148435896?v=4"
            className="size-16 rounded-full object-cover block mx-auto"
            alt="profil"
          />
          <div className="w-full flex gap-4">
            <div className="flex flex-col gap-1">
              <h1 className="text-hijau-500 text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
                Savila Ashfa
              </h1>
              <p className="text-xs md:text-base lg:text-lg text-secondary-abu font-medium">
                Gap Year
              </p>
            </div>
            <button className="btn btn-xs sm:btn-sm btn-outline border-hijau-500 flex gap-2 mt-1 items-center text-hijau-500 hover:text-white hover:bg-hijau-600 font-normal hover:border-none">
              <MdModeEdit className="size-3" />
              <p className="text-xs font-medium">Edit</p>
            </button>
          </div>
        </div>
        <div className="md:px-20">
          <div
            className="bg-base-200 collapse collapse-arrow mt-8 shadow-sm border border-background-light"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
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
      <div className="w-full px-8 md:px-40 py-6 justify-around flex flex-col gap-4">
        {dataProfil.map((profil) => (
          <div
            className="flex flex-col gap-2 items-center p-3 rounded-md border-2 border-background-subtle hover:bg-hijau-200 hover:border-hijau-500 transform transition-all duration-300 cursor-pointer ease-in-out"
            key={profil.id}
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay={profil.id * 300}
          >
            {getIcon(profil.icon)}
            <h3 className="text-secondary-abu font-semibold">{profil.judul}</h3>
          </div>
        ))}
      </div>
      <div className="w-full px-8 md:px-40 py-6">
        <button
          className="w-full btn btn-primary sm:btn-sm md:btn-md text-white hover:bg-hijau-600 font-normal"
          data-aos="fade-up"
          data-aos-duration='1000'
        >
          Keluar
        </button>
      </div>
    </div>
  );
};

export default Profil;
