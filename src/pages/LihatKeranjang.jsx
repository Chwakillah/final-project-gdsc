import { MdOutlinePendingActions } from "react-icons/md";

function LihatKeranjang() {
  return (
    <div className="w-full min-h-screen px-8 py-24  md:px-20">
      <div className="flex flex-col gap-4 items-start">
        <h3 className="text-secondary-abu font-semibold">Keranjang Anda</h3>
        <div className="mx-auto lg:mx-0">
          <div className="flex flex-col gap-4 py-3 px-6 md:py-6 items-center border-2 rounded-lg border-background-subtle">
            <div className="flex gap-6">
              <img
                src="https://pahamify.com/wp-content/uploads/2022/03/20xTO.png"
                className="size-16 rounded-full object-cover block mx-auto"
              />
              <div className="w-full flex flex-col gap-2">
                <h3 className="text-hijau-600 font-semibold text-sm">
                  2X Try Out SIMAK UI
                </h3>
                <p className="text-secondary-abu text-sm font-medium">
                  Total: Rp20.000
                </p>
                <div className="flex gap-2 text-[#ED4459]">
                  <MdOutlinePendingActions className="size-4" />
                  <p className="text-xs font-medium">Menunggu Pembayaran</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start w-full gap-2 border-t pt-2">
              <p className="text-secondary-abu text-xs font-medium">
                Tanggal Pembelian: 17 Juli 2024
              </p>
              <p className="text-secondary-abu text-xs font-medium">
                Batas Pembayaran:{" "}
                <span className="text-[#ED4459]">18 Juli 21:15</span>
              </p>
            </div>
            <div>
              <button className="btn btn-primary btn-wide btn-xs sm:btn-sm md:btn-md text-white hover:bg-hijau-600 font-normal">
                Lihat Detail
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LihatKeranjang;
