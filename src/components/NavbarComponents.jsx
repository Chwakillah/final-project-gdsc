import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { navLinks, navProfiles } from "../data/index.js";

const NavbarComponents = () => {
  const [changeBorder, setChangeBorder] = useState(false);
  const [changeColor, setChangeColor] = useState('bg-gradient-to-b from-hijau-200 to-hijau-sage');

  const changeNavbarBorder = () => {
    if (window.scrollY > 50) {
      setChangeBorder(true);
      setChangeColor('bg-white');
    } else {
      setChangeBorder(false);
      setChangeColor('bg-gradient-to-b from-hijau-200 to-hijau-sage');
    }
  };

  useEffect(() => {
    changeNavbarBorder();
    window.addEventListener('scroll', changeNavbarBorder);
  }, []);

  return (
    <div>
      <div className={`${changeBorder ? 'border-b border-abu' : ''} ${changeColor} navbar md:px-16 md:py-4 py-1 fixed top-0 w-full z-50 transition-all duration-300`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="flex gap-4 flex-col dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 px-4 py-6 shadow text-base text-secondary-abu font-semibold">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <NavLink to={link.path} className={({ isActive }) => `${isActive ? "border-b-2 border-hijau-500 text-hijau-500" : ""} hover:text-hijau-500 hover:bg-transparent px-2 py-2`} end>
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost md:text-3xl text-xl text-hijau-500 italic">
            Les<span className="text-oren-500">Tasya</span>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-4 text-base text-secondary-abu font-semibold">
            {navLinks.map((link) => (
              <li key={link.id}>
                <NavLink to={link.path} className={({ isActive }) => `${isActive ? "border-b-2 border-hijau-500 text-hijau-500" : ""} hover:text-hijau-500 hover:bg-transparent px-2 py-2`} end>
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-1 items-center justify-center">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 1 0 0 4 0 2 2 0 0 1-4 0z" />
                  </svg>
                  <span className="badge badge-sm indicator-item bg-hijau-500 text-white">2</span>
                </div>
              </div>
              <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                <div className="card-body">
                  <span className="text-lg font-bold text-hijau-800">2 Items</span>
                  <span className="text-hijau-500 font-medium">Subtotal: Rp500.000</span>
                  <div className="card-actions">
                    <NavLink to='/keranjang' className="btn bg-hijau-500 hover:bg-hijau-600 text-white btn-block">
                      Lihat Keranjang
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="profil" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <ul tabIndex={0} className="flex gap-4 flex-col dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 px-4 py-6 shadow text-base text-secondary-abu font-semibold">
                {navProfiles.map((link) => (
                  <li key={link.id}>
                    <NavLink to={link.path} className={({ isActive }) => `${isActive ? "border-b-2 border-hijau-500 text-hijau-500" : ""} hover:text-hijau-500 hover:bg-transparent px-2 py-2`} end>
                      {link.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponents;
