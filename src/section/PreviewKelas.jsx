import { previewKelas } from "../data/index.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sparkle from "../assets/img/vektor/Sparkle.png";
import Line from "../assets/img/vektor/vector-persiapan.png";
import CirclePurple from "../assets/img/vektor/circle-purple.png";

const PreviewKelas = () => {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full min-h-screen md:px-20 overflow-x-hidden px-8 flex flex-col lg:flex-row justify-center lg:items-center bg-hijau-sage relative lg:gap-8">
      <img
        src={Sparkle}
        alt="vektor"
        className="absolute top-24 lg:top-56 md:right-20 lg:left-12 md:size-6 lg:size-8 size-6 right-8"
      />
      <img
        src={Line}
        alt="vektor"
        className="absolute top-44 -left-12 lg:top-[380px] lg:left-12"
      />
      <img
        src={CirclePurple}
        alt="vektor"
        className="absolute bottom-16 lg:top-56 -right-2 lg:right-4 size-6 lg:size-4"
      />
      <div className="lg:w-1/4 flex flex-col items-center lg:items-start">
        <div className="flex flex-col text-center lg:text-left gap-2 lg:w-full">
          <h1 className="text-hijau-800 text-2xl md:text-3xl lg:text-5xl font-semibold">
            Masih <span className="text-hijau-500">Ragu?</span>
          </h1>
          <p className="text-xs md:text-base lg:text-lg text-secondary-abu font-medium">
            Coba beberapa preview kelas kami!
          </p>
        </div>
      </div>
      <div className="lg:w-3/4">
        <div className="mt-8">
          <Slider {...settings}>
            {previewKelas.map((preview) => (
              <div className="card bg-base-100 m-4" key={preview.id}>
                <figure>
                  <img
                    src={preview.img}
                    alt="preview class img"
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-hijau-800">
                    {preview.judul}
                    <div className="badge bg-oren-500">{preview.mapel}</div>
                  </h2>
                  <p className="text-hijau-500">Pengajar : {preview.guru}</p>
                  <div className="card-actions justify-end">
                    <button className="btn bg-hijau-500 hover:bg-hijau-600 text-white">
                      {preview.lihat}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PreviewKelas;
