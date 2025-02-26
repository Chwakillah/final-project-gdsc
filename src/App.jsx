import { Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Kelas from "./pages/Kelas";
import PaketBelajar from "./pages/PaketBelajar";
import Profil from "./pages/profile/Profil";
import LihatKeranjang from "./pages/LihatKeranjang";
import NavbarComponents from "./components/NavbarComponents";
import Riwayat from "./pages/profile/Riwayat";
import FooterComponents from "./components/FooterComponents";
import DetailBIndo from "./pages/detailKelas/DetailBIndo";

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
        <Route path="/riwayat" Component={Riwayat}></Route>
        <Route path="/bindo" Component={DetailBIndo}></Route>
      </Routes>
      <FooterComponents />
    </div>
  );
}

export default App;
