import Link from "next/link";
import navLinks from "../data/navLinks";

const NavMenu = ({ pathname }) => (
  <nav className="flex space-x-8 lg:text-[20px] font-semibold items-center">
    {navLinks.map((link, idx) => {
      const isActive = pathname === link.href;

      if (link.submenu) {
        return (
          <div key={idx} className="relative group inline-block">
            <div className="greenColor font-semibold relative inline-block cursor-pointer">
              <span className="group-hover:text-green-600 transition-colors duration-300">
                {link.label}
              </span>
            </div>

            <div
              className="
      absolute top-full -left-20 mt-0 w-[180px]
      opacity-0 scale-95 translate-y-2 pointer-events-none
      group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto
      transition-all duration-300 ease-out
      rounded-xl border border-gray-200 bg-white/90 backdrop-blur-md shadow-2xl z-50
    "
            >
              {link.submenu.map((sublink, i) => {
                const isSubActive = pathname === sublink.href;
                return (
                  <Link
                    key={i}
                    href={sublink.href}
                    className={`relative block px-5 py-3 text-[17px] font-medium text-gray-800 tracking-wide
            hover:bg-gray-100 hover:text-green-600 transition-all duration-200 rounded-md
            ${isSubActive ? "text-green-600 font-semibold bg-gray-50" : ""}
          `}
                  >
                    <span>{sublink.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      } else {
        return (
          <Link
            key={idx}
            href={link.href}
            className={`greenColor font-semibold relative inline-block ${
              isActive ? "active-underline" : ""
            }`}
          >
            <span>{link.label}</span>
            <span className="underline-line"></span>
          </Link>
        );
      }
    })}
  </nav>
);

export default NavMenu;
