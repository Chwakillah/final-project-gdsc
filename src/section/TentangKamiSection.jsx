import TentangKamiPic from "../assets/img/tentang/tentang-kami-hero.png";
import VektorGelombang from "../assets/img/vektor/vektor-gelombang.png";
import CirclePurple from "../assets/img/vektor/circle-purple.png";
import { PiGraduationCap } from "react-icons/pi";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineGroups } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";


function TentangKami() {
  return (
    <div className="w-full min-h-screen px-8 flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16 relative md:px-20 overflow-x-hidden py-24">
      <img
        src={CirclePurple}
        alt="vektor"
        className="absolute top-28 left-3/4 size-2 lg:size-3 lg:top-52 lg:left-1/2"
      />
      <img
        src={VektorGelombang}
        alt="vektor"
        className="absolute -right-6 lg:-right-2 top-40 md:top-80 lg:top-96"
      />
      <div className="w-3/4 md:w-1/2 order-2 md:order-1" data-aos="zoom-in-up">
        <img
          src={TentangKamiPic}
          alt="tentang kami pic"
          className="lg:w-3/4 block mx-auto"
        />
      </div>
      <div
        className="flex flex-col gap-8 md:gap-6 md:w-1/2 order-1 md:order-2"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="flex flex-col gap-2 lg:gap-4 justify-center">
          <h1 className="text-hijau-800 text-2xl md:text-3xl lg:text-5xl font-semibold">
            Tentang <span className="text-hijau-500">Kami</span>
          </h1>
          <p className="text-xs md:text-base lg:text-lg text-secondary-abu font-medium">
            Di Les Tasya, kami berkomitmen untuk membantu Anda meraih impian
            masuk perguruan tinggi terbaik.
          </p>
        </div>
        <div className="flex flex-col gap-4 lg:gap-8 justify-center">
          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="flex gap-8">
              <div className="bg-hijau-200 p-2 rounded-lg">
                <PiGraduationCap className="text-hijau-600 size-8 items-center" />
              </div>
              <div>
                <h1 className="font-bold text-lg text-hijau-800 md:text-xl lg:text-2xl">
                  700+
                </h1>
                <p className="text-sm text-secondary-abu lg:text-lg md:text-base">
                  Siswa Diterima di PTN
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="bg-oren-200 p-2 rounded-lg">
                <IoVideocamOutline className="text-oren-500 size-8" />
              </div>
              <div>
                <h1 className="font-bold text-lg text-hijau-800 md:text-xl lg:text-2xl">
                  500+
                </h1>
                <p className="text-sm text-secondary-abu lg:text-lg md:text-base">
                  Video Pembelajaran
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="flex gap-8">
              <div className="bg-[#FFEEF0] p-2 rounded-lg">
                <MdOutlineGroups className="text-[#ED4459] size-8" />
              </div>
              <div>
                <h1 className="font-bold text-lg text-hijau-800 md:text-xl lg:text-2xl">
                  20+
                </h1>
                <p className="text-sm text-secondary-abu lg:text-lg md:text-base">
                  Master Teacher Keren
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="bg-[#F0F7FF] p-2 rounded-lg">
                <IoDocumentTextOutline className="text-[#0075FD] size-8" />
              </div>
              <div>
                <h1 className="font-bold text-lg text-hijau-800 md:text-xl lg:text-2xl">
                  100+
                </h1>
                <p className="text-sm text-secondary-abu lg:text-lg md:text-base">
                  Latihan Soal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TentangKami;
