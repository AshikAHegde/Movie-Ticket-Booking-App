import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const AdminNavbar = () => {
  return (
    <div>
      <Link to="/admin" className="text-2xl font-bold px-6 py-4 inline-block">
        <img src={assets.logo} alt="QuickShow Logo" />
      </Link>
    </div>
  );
};

export default AdminNavbar;
