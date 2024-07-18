import Zigzag from "../assets/img/vektor/gray-vector.svg";

const Iklan = () => {
  return (
    <div className="w-full bg-hijau-500 flex flex-col justify-center items-center px-4 py-6 gap-4 relative">
      <img
        src={Zigzag}
        alt="vektor"
        className="absolute top-10 lg:top-12 md:left-7 lg:left-8 size-16 md:size-24 left-4"
      />
      <img
        src={Zigzag}
        alt="vektor"
        className="absolute top-6 lg:top-2 md:right-7 lg:right-8 size-16 md:size-24 right-4"
      />
      <h3
        className="text-white text-sm md:text-base font-light lg:text-xl"
        data-aos="zoom-in-down"
      >
        &quot;Pendidikan Berkualitas di Ujung Jari Anda&quot;
      </h3>
      <button className="btn btn-xs sm:btn-sm md:btn-md btn-outline border-white text-white hover:bg-hijau-600 font-normal hover:border-none" data-aos="zoom-out">
        Coba Sekarang
      </button>
    </div>
  );
};

export default Iklan;
