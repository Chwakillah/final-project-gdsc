import { umpanKiri } from "../data/index.js";
import { umpanKanan } from "../data/index.js";

const UmpanBalik = () => {
  return (
    <div className="w-full min-h-screen md:px-32 lg:px-56 overflow-x-hidden overflow-y-hidden  px-8 py-24 flex flex-col justify-center items-center relative gap-8">
      <div
        className="flex flex-col text-center gap-4"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h1 className="text-hijau-800 text-2xl md:text-3xl lg:text-5xl font-semibold py-24">
          Apa Kata <span className="text-hijau-500">Mereka?</span>
        </h1>
      </div>
      <div className="flex md:flex-row flex-col md:gap-12">
        <div className="flex flex-col gap-8 md:gap-20">
          {umpanKiri.map((umpan) => (
            <div
              className="chat chat-start gap-2"
              key={umpan.id}
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay={umpan.id * 400}
            >
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt="chat bubble component" src={umpan.img} />
                </div>
              </div>
              <div className="chat-header font-semibold text-hijau-800">
                {umpan.nama}
                <time className="text-xs opacity-50 pl-2">{umpan.jurusan}</time>
              </div>
              <div className="chat-bubble bg-hijau-500 text-white">
                {umpan.review}
              </div>
            </div>
          ))}
        </div>
        <div className="md:pt-20 pt-8 flex flex-col gap-8 md:gap-20">
          {umpanKanan.map((umpan) => (
            <div
              className="chat chat-end gap-2"
              key={umpan.id}
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-delay={umpan.id * 500}
            >
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt="chat bubble component" src={umpan.img} />
                </div>
              </div>
              <div className="chat-header font-semibold text-hijau-800">
                {umpan.nama}
                <time className="text-xs opacity-50 pl-2">{umpan.jurusan}</time>
              </div>
              <div className="chat-bubble bg-hijau-500 text-white">
                {umpan.review}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UmpanBalik;
