import { NavLink } from "react-router-dom";
import { navLinks, navProfiles } from "../data/index.js";
import { FaTiktok } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";

const FooterComponents = () => {
  return (
    <div>
      <footer className="footer bg-base-200 text-base-content p-10">
        <nav>
          <h4 className="footer-title">MENU</h4>
          <ul>
            {navLinks.map((link) => (
              <li key={link.id} className="list-none">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `${
                      isActive ? "" : ""
                    } hover:text-hijau-500 hover:bg-transparent px-2 py-2`
                  }
                  end
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <nav>
            <h4 className="footer-title">PROFIL</h4>
          <ul>
            {navProfiles.map((link) => (
              <li key={link.id} className="list-none">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `${
                      isActive ? "" : ""
                    } hover:text-hijau-500 hover:bg-transparent px-2 py-2`
                  }
                  end
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <nav>
          <h4 className="footer-title">PROFIL</h4>
          <ul>
            {navProfiles.map((link) => (
              <li key={link.id} className="list-none">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `${
                      isActive ? "" : ""
                    } hover:text-hijau-500 hover:bg-transparent px-2 py-2`
                  }
                  end
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </footer>
      <footer className="footer bg-base-200 text-base-content border-secondary-abu border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          <FaBookOpenReader className="size-8 text-hijau-500" />
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-hijau-500 text-base">
              Les <span className="text-oren-500">Tasya</span>
            </p>
            <p className="text-secondary-abu">
              Pendidikan Berkualitas di Ujung Jari Anda
            </p>
          </div>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4 text-hijau-500">
            <a href="https://www.tiktok.com/@tasya7191?is_from_webapp=1&sender_device=pc">
              <FaTiktok className="size-6" />
            </a>
            <a href="https://www.instagram.com/ntasyazhr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <FaInstagramSquare className="size-6" />
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default FooterComponents;
