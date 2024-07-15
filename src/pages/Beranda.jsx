import HeroSection from "../section/HeroSection";
import Iklan from "../section/Iklan";
import KelasTersedia from "../section/KelasTersedia";
import PreviewKelas from "../section/PreviewKelas";
import TentangKamiSection from "../section/TentangKamiSection";

const Beranda = () => {
  return (
    <div>
      <HeroSection/>
      <TentangKamiSection/>
      <PreviewKelas/>
      <Iklan/>
      <KelasTersedia/>
    </div>
  );
};

export default Beranda;
