import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { TicketPlus } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <>
      <nav className="flex items-center justify-between px-12 py-6 bg-transparent">
        {/* Left Logo */}
        <Link to="/">
        <h1 className="text-2xl font-bold text-[var(--color-primary)]">
          Quick<span className="text-white">Show</span>
        </h1>
        </Link>

        {/* Center Nav Links */}
        <ul className="flex items-center gap-8 text-white font-medium bg-white/10 px-6 py-2 rounded-full">
          <Link to="/" className="cursor-pointer hover:text-[var(--color-primary)]">
            Home
          </Link>
          <Link to="/movies" className="cursor-pointer hover:text-[var(--color-primary)]">
            Movies
          </Link>
          <Link to="/theaters" className="cursor-pointer hover:text-[var(--color-primary)]">
            Theaters
          </Link>
          <Link to="/releases" className="cursor-pointer hover:text-[var(--color-primary)]">
            Releases
          </Link>
          <Link to="/favorite" className="cursor-pointer hover:text-[var(--color-primary)]">
            Favorites
          </Link>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <FaSearch className="text-xl cursor-pointer hover:text-[var(--color-primary)]" />
          {!user ? (
            <button
              onClick={openSignIn}
              className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-dull)] text-white px-6 py-2 rounded-full font-semibold"
            >
              Log In
            </button>
          ) : (
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action
                  label="My Bookings"
                  labelIcon={<TicketPlus width={15} />}
                  onClick={() => navigate("/my-bookings")}
                />
                {/* <UserButton.Action
                  label="My Bookings"
                  labelIcon={<TicketPlus width={15} />}
                  onClick={() => navigate("/my-bookings")}
                /> */}
              </UserButton.MenuItems> 
            </UserButton>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
