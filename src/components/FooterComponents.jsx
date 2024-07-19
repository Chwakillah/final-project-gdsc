import { NavLink } from "react-router-dom";
import Logo from "../assets/img/logo.svg";
import { navLinks } from "../data/index.js";

const FooterComponents = () => {
  return (
    <footer className="bg-hijau-500 rounded-lg shadow m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <NavLink
            to="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="size-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <h1 className="btn btn-ghost md:text-3xl text-xl text-white italic">
                Les<span className="text-oren-500">Tasya</span>
              </h1>
            </span>
          </NavLink>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
            {navLinks.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  className="hover:underline me-4 md:me-6"
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-white sm:text-center">
          © 2024 
          <NavLink
            to="https://www.tiktok.com/@tasya7191?is_from_webapp=1&sender_device=pc"
            className="hover:underline"
          >
            Les Tasya
          </NavLink>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default FooterComponents;
