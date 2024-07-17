import { MdCollectionsBookmark, MdVideoLibrary } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import { materiBindo } from "../data/index.js";

const getIcon = (iconName) => {
  switch (iconName) {
    case 'MdCollectionsBookmark':
      return <MdCollectionsBookmark className="size-7 text-hijau-600" />;
    case 'IoDocumentText':
      return <IoDocumentText className="size-7 text-hijau-600" />;
    case 'MdVideoLibrary':
      return <MdVideoLibrary className="size-7 text-hijau-600" />;
    case 'IoIosLock':
      return <IoIosLock className="size-7 text-hijau-500" />;
    default:
      return null;
  }
};

const DetailBIndo = () => {
  return (
    <div className="w-full min-h-screen py-10 md:py-20">
      <div className="w-full px-8 md:px-20 bg-hijau-sage py-6">
        <div className="flex gap-8 items-center">
          <img
            src="https://imgix2.ruangguru.com/assets/miscellaneous/png_094wa3_9266.png?height=72&convert=webp"
            className="size-16 rounded-full object-cover block mx-auto"
            alt="Bahasa Indonesia"
          />
          <div className="w-full">
            <h1 className="text-hijau-500 text-2xl md:text-3xl lg:text-5xl font-semibold mb-2">
              Bahasa Indonesia
            </h1>
            <p className="text-xs md:text-base lg:text-lg text-secondary-abu font-medium">
              SNBT: PBM, PPU, Literasi Bahasa Indonesia
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 px-8 md:px-20 py-8">
        {materiBindo.map((materi) => (
          <details
            className="collapse collapse-arrow bg-base-200 shadow-sm border border-background-light"
            key={materi.id}
          >
            <summary className="collapse-title bg-white text-secondary-abu peer-checked:bg-white peer-checked:text-secondary-abu font-semibold">
              {materi.judul}
            </summary>
            <div className="collapse-content">
              {materi.sub.map((detail) => (
                <div className="flex gap-4 items-center mb-4" key={detail.i}>
                  {getIcon(detail.subicon)}
                  <div className="flex justify-between items-center w-full">
                    <h3 className="text-secondary-abu font-semibold text-sm">
                      {detail.submateri}
                    </h3>
                    <div>
                      {materi.id === 1 ? (
                        <button className="btn btn-primary btn-xs sm:btn-sm  text-white hover:bg-hijau-600 font-normal">
                          {detail.lihat}
                        </button>
                      ) : (
                        <IoIosLock className="size-7 text-hijau-500" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};

export default DetailBIndo;
