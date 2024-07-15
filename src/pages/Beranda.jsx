import HeroSection from "../section/HeroSection";
import Iklan from "../section/Iklan";
import KelasTersedia from "../section/KelasTersedia";
import MasterTeacher from "../section/MasterTeacher";
import PreviewKelas from "../section/PreviewKelas";
import TentangKamiSection from "../section/TentangKamiSection";
import UmpanBalik from "../section/UmpanBalik";

const Beranda = () => {
  return (
    <div>
      <HeroSection/>
      <TentangKamiSection/>
      <PreviewKelas/>
      <Iklan/>
      <KelasTersedia/>
      <MasterTeacher/>
      <UmpanBalik/>
    </div>
  );
};

export default Beranda;
