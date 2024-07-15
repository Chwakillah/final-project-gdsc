import HeroSection from "../section/HeroSection";
import Iklan from "../section/Iklan";
import KelasTersedia from "../section/KelasTersedia";
import MasterTeacher from "../section/MasterTeacher";
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
      <MasterTeacher/>
    </div>
  );
};

export default Beranda;
