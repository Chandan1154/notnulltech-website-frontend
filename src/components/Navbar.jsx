import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logos/home.png";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Technology", path: "/technology" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
<header className="sticky top-0 z-50 border-b border-[#dbeff7] bg-[#f7fcff] backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <NavLink to="/">
          <img
            src={logo}
            alt="NotNullTech Logo"
            className="h-16 w-auto transition duration-300 hover:scale-105"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative text-[15px] font-medium transition-all duration-300 ${
                  isActive
                    ? "text-[#2b7db0]"
                    : "text-gray-700 hover:text-[#2b7db0]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded bg-[#2b7db0]"></span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button */}
        <NavLink
          to="/contact"
          className="hidden rounded-xl bg-[#2b7db0] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#246a90] hover:shadow-lg md:block"
        >
          Get in Touch →
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t bg-white md:hidden">
          {links.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 text-gray-700 hover:bg-gray-50 hover:text-blue-700"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}