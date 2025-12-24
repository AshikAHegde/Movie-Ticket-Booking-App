import React from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-12 py-6 bg-transparent">
      {/* Left Logo */}
      <h1 className="text-2xl font-bold text-[var(--color-primary)]">
        Quick<span className="text-white">Show</span>
      </h1>

      {/* Center Nav Links */}
      <ul className="flex items-center gap-10 text-white font-medium">
        <li className="cursor-pointer hover:text-[var(--color-primary)]">Home</li>
        <li className="cursor-pointer hover:text-[var(--color-primary)]">Movies</li>
        <li className="cursor-pointer hover:text-[var(--color-primary)]">Theatres</li>
        <li className="cursor-pointer hover:text-[var(--color-primary)]">Releases</li>
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        <FaSearch className="text-xl cursor-pointer hover:text-[var(--color-primary)]" />
        <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dull)] text-white px-6 py-2 rounded-full font-semibold">
          Log In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;