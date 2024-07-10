import {Routes, Route} from 'react-router-dom';
import Beranda from './pages/Beranda';
import Kelas from './pages/Kelas';
import PaketBelajar from './pages/PaketBelajar';
import Login from './pages/Login';
import NavbarComponents from './components/NavbarComponents';
function App() {
  return (
    <div>
      <NavbarComponents/>
      <Routes>
        <Route path='/' Component={Beranda}></Route>
        <Route path='/paket' Component={PaketBelajar}></Route>
        <Route path='/kelas' Component={Kelas}></Route>
        <Route path='/login' Component={Login}></Route>
      </Routes>
    </div>
  );
}

export default App;
