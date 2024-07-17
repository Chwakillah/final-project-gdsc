import { kelasTPS, kelasSaintek, kelasSoshum } from "../data/index.js";

const Kelas = () => {
  return (
    <div className="w-full min-h-screen md:px-20">
      <div className="flex flex-col py-24 p-8 gap-4">
        <h3 className="text-secondary-abu font-semibold">Try Out (TO)</h3>
        <div className="mx-auto">
          <div className="flex gap-6 py-3 px-6 items-center border-2 rounded-lg border-background-subtle hover:bg-hijau-200 hover:border-hijau-500 transform transition-all duration-300 cursor-pointer ease-in-out md:w-">
            <img
              src="https://pahamify.com/wp-content/uploads/2022/03/20xTO.png"
              className="size-16 rounded-full object-cover block mx-auto"
            />
            <div className="w-full flex flex-col gap-2">
              <h3 className="text-hijau-600 font-semibold text-sm">
                Try Out SNBT 2025
              </h3>
              <p className="text-hijau-500 text-xs font-medium">13 Paket TO Aktif</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-24  p-8 gap-4">
        <h3 className="text-secondary-abu font-semibold">
          Tes Potensi Skolastik (TPS)
        </h3>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-8 justify-center">
          {kelasTPS.map((tps) => (
            <div
              className="flex flex-col gap-4 border-2 border-background-subtle p-3 rounded-lg text-center hover:bg-hijau-200 hover:border-hijau-500 transform transition-all duration-300 cursor-pointer ease-in-out"
              key={tps.id}
            >
              <img
                src={tps.img}
                className="size-16 rounded-full object-cover block mx-auto"
              />
              <h4 className="text-sm font-medium text-hijau-600">
                {tps.judul}
              </h4>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col py-24 p-8 gap-4">
        <h3 className="text-secondary-abu font-semibold">SAINTEK</h3>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-8 justify-center">
          {kelasSaintek.map((saintek) => (
            <div
              className="flex flex-col gap-4 border-2 border-background-subtle p-3 rounded-lg text-center hover:bg-hijau-200 hover:border-hijau-500 transform transition-all duration-300 cursor-pointer ease-in-out"
              key={saintek.id}
            >
              <img
                src={saintek.img}
                className="size-16 rounded-full object-cover block mx-auto"
              />
              <h4 className="text-sm font-medium text-hijau-600">
                {saintek.judul}
              </h4>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col py-24 p-8 gap-4">
        <h3 className="text-secondary-abu font-semibold">SOSHUM</h3>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 lg:gap-8 justify-center">
          {kelasSoshum.map((soshum) => (
            <div
              className="flex flex-col gap-4 border-2 border-background-subtle p-3 rounded-lg text-center hover:bg-hijau-200 hover:border-hijau-500 transform transition-all duration-300 cursor-pointer ease-in-out"
              key={soshum.id}
            >
              <img
                src={soshum.img}
                className="size-16 rounded-full object-cover block mx-auto"
              />
              <h4 className="text-sm font-medium text-hijau-600">
                {soshum.judul}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kelas;
