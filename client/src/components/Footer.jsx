import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-6 pt-8 md:px-16 lg:px-36 w-full text-gray-300">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
        <div className="md:max-w-96">
          <Link to="/">
            <h1 className="text-2xl font-bold text-[var(--color-primary)]">
              Quick<span className="text-white">Show</span>
            </h1>
          </Link>
          <p className="mt-6 text-sm">
            Your ultimate destination for movies and entertainment. Book
            tickets, explore trailers, and never miss the latest releases.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <img
              src={assets.googlePlay}
              alt="google play"
              className="h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity"
            />
            <img
              src={assets.appStore}
              alt="app store"
              className="h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity"
            />
          </div>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-32">
          <div>
            <h2 className="font-semibold mb-5 text-white">Quick Links</h2>
            <ul className="text-sm space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-[var(--color-primary)] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/movies"
                  className="hover:text-[var(--color-primary)] transition-colors"
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  to="/my-bookings"
                  className="hover:text-[var(--color-primary)] transition-colors"
                >
                  My Bookings
                </Link>
              </li>
              <li>
                <Link
                  to="/favorites"
                  className="hover:text-[var(--color-primary)] transition-colors"
                >
                  Favorites
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5 text-white">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <Link
                  to="/about"
                  className="hover:text-[var(--color-primary)] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[var(--color-primary)] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-[var(--color-primary)] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-5 text-white">Get in Touch</h2>
            <div className="text-sm space-y-2">
              <p>+1-212-456-7890</p>
              <p>support@quickshow.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-4 text-center text-sm pb-5">
        Copyright {new Date().getFullYear()} © QuickShow. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
