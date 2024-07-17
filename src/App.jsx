import { Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Kelas from "./pages/Kelas";
import PaketBelajar from "./pages/PaketBelajar";
import Profil from "./pages/Profil";
import LihatKeranjang from "./pages/LihatKeranjang";
import NavbarComponents from "./components/NavbarComponents";
import Pengaturan from "./pages/Pengaturan";
import FooterComponents from "./components/FooterComponents";
import DetailBIndo from "./pages/detailKelas/DetailBIndo";
import VideoSintaksis1 from "./pages/detailKelas/VideoSintaksis1";

function App() {
  return (
    <div>
      <NavbarComponents />
      <Routes>
        <Route path="/" Component={Beranda}></Route>
        <Route path="/paket" Component={PaketBelajar}></Route>
        <Route path="/kelas" Component={Kelas}></Route>
        <Route path="/profil" Component={Profil}></Route>
        <Route path="/keranjang" Component={LihatKeranjang}></Route>
        <Route path="/pengaturan" Component={Pengaturan}></Route>
        <Route path="/bindo" Component={DetailBIndo}></Route>
        <Route path="/sintaksis1" Component={VideoSintaksis1}></Route>
      </Routes>
      <FooterComponents />
    </div>
  );
}

export default App;
