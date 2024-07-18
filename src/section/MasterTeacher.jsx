import { masterTeacher } from "../data/index.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VektorGelombang from "../assets/img/vektor/vektor-gelombang.png";
import Zigzag from "../assets/img/vektor/zigzag-green.svg";

const MasterTeacher = () => {
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
    <div className="w-full min-h-screen md:px-20 overflow-x-hidden py-24 px-8 flex flex-col lg:flex-row justify-center lg:items-center bg-oren-200 relative lg:gap-8">
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
        className="absolute bottom-0 size-32 -left-6"
      />
      <div className="lg:w-1/4 flex flex-col items-center lg:order-2">
        <div
          className="flex flex-col text-center lg:text-left gap-4 lg:w-full z-10"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <h1 className="text-hijau-800 text-2xl md:text-3xl lg:text-5xl font-semibold">
            Master <span className="text-hijau-500">Teacher</span>
          </h1>
          <p className="text-xs md:text-base lg:text-lg text-secondary-abu font-medium">
            Belajar lebih efektif dengan bimbingan profesional bersama Master
            Teacher kami!
          </p>
        </div>
      </div>
      <div className="lg:w-3/4 lg:order-1">
        <div className="mt-8">
          <Slider {...settings}>
            {masterTeacher.map((teacher) => (
              <div
                className="card bg-base-100 w-96 shadow-xl"
                key={teacher.id}
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              >
                <div className="card-body">
                  <h2 className="card-title text-hijau-500">{teacher.nama}</h2>
                  <p className="text-secondary-abu">{teacher.mapel}</p>
                  <p className="text-secondary-abu">{teacher.univ}</p>
                </div>
                <figure>
                  <img
                    src={teacher.img}
                    alt="teacher"
                    className="w-full h-full object-cover"
                  />
                </figure>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MasterTeacher;
