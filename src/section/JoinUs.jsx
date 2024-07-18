import Joinimg from "../assets/img/joinus/joinus.png";
import Sparkle from "../assets/img/vektor/Sparkle.png";
import CirclePurple from "../assets/img/vektor/circle-purple.png";
import CircleOrange from "../assets/img/vektor/circle-orange.png";
import DoubleCircle from "../assets/img/vektor/double-circle.svg";

const JoinUs = () => {
  return (
    <div>
      <div className="w-full min-h-screen md:px-20 overflow-x-hidden px-8 py-24 flex flex-col justify-center items-center relative gap-8 bg-gradient-to-b from-white to-oren-200">
        <div className="flex flex-col gap-16 lg:gap-20 lg:flex-row">
          <img
            src={Sparkle}
            alt="vektor"
            className="absolute top-24 lg:top-48 md:left-7 lg:left-8 md:size-6 lg:size-8 size-4 left-2"
          />
          <img
            src={CirclePurple}
            alt="vektor"
            className="absolute top-[70px] left-1/2 size-2 lg:size-3 lg:top-40 lg:left-1/4"
          />
          <img
            src={CircleOrange}
            alt="vektor"
            className="absolute top-80 size-3 left-2/3 lg:top-96 lg:left-3/4"
          />
          <img
            src={DoubleCircle}
            alt="vektor"
            className="absolute top-4 size-32 -right-4 lg:bottom-12 lg:size-40 lg:right-0 rotate-180"
          />
          <div
            className="flex flex-col gap-8 md:gap-12 lg:w-1/2 lg:order-2 justify-center"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="flex flex-col gap-4 justify-center w-full lg:gap-6 text-center lg:text-start">
              <h1 className="text-hijau-800 text-2xl md:text-3xl lg:text-5xl font-semibold">
                Siap Untuk <span className="text-hijau-500"> Sukses?</span>
              </h1>
              <p className="text-xs md:text-base lg:text-lg text-secondary-abu font-medium lg:pr-20">
                Daftar sekarang dan mulailah perjalananmu menuju kesuksesan
                akademik bersama kami!
              </p>
              <div>
                <button className="btn btn-primary btn-xs sm:btn-sm md:btn-md text-white hover:bg-hijau-600 font-normal">
                  Daftar Sekarang
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2" data-aos="fade-up" data-aos-duration="2000">
            <img src={Joinimg} alt="hero" className="w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
