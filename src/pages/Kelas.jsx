import { kelasTPS } from "../data/index.js";

const Kelas = () => {
  return (
    <div className="w-full min-h-screen md:px-20">
      <div className="flex flex-col py-24 p-8 gap-4">
        <h3 className="text-secondary-abu font-semibold">
          Tes Potensi Skolastik (TPS)
        </h3>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-8 justify-center">
          {kelasTPS.map((tps) => (
            <div
              className="flex flex-col gap-4 shadow-xl shadow-background-subtle border border-background-subtle p-3 rounded-lg text-center"
              key={tps.id}
            >
              <img
                src={tps.img}
                className="size-16 rounded-full object-cover block mx-auto"
              />
              <h4 className="text-sm font-medium text-hijau-600">{tps.judul}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kelas;
