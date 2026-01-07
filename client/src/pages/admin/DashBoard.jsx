import React, { useState, useEffect } from "react";
import {
  CircleDollarSignIcon,
  ChartLineIcon,
  PlayCircleIcon,
  UsersIcon,
} from "lucide-react";
import {
  assets,
  dummyShowsData,
  dummyDashboardData,
} from "../../assets/assets";
import BlurCircle from "../../components/BlurCircle";
import Loading from "../../components/Loading";
import Title from "../../components/admin/Title";
const currency = import.meta.env.VITE_CURRENCY || '$';

const DashBoard = () => {
  const [dashboardData, setDashboardData] = useState({
    totalBookings: 0,
    totalRevenue: 0,
    activeShows: [],
    totalUser: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetch
    setTimeout(() => {
      setDashboardData(dummyDashboardData);
      setLoading(false);
    }, 500);
  }, []);

  const dashboardCards = [
    {
      title: "Total Bookings",
      value: dashboardData.totalBookings,
      icon: ChartLineIcon,
    },
    {
      title: "Total Revenue",
      value: `$${dashboardData.totalRevenue.toLocaleString()}`,
      icon: CircleDollarSignIcon,
    },
    {
      title: "Active Movies",
      value: dashboardData.activeShows.length,
      icon: PlayCircleIcon,
    },
    { title: "Total Users", value: dashboardData.totalUser, icon: UsersIcon },
  ];

  if (loading) return <Loading text="Loading..." />;

  return (
    <>
      <Title main={"Admin"} highlight={"Dashboard"} />
      <div>
        <BlurCircle />
        {/* Dashboard Cards */}
        <div className="flex flex-wrap gap-4 w-full mb-8">
          {dashboardCards.map((card, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow max-w-[170px] w-full transition-transform duration-200 hover:scale-105 hover:bg-white/20 group"
              style={{ minWidth: "150px" }}
            >
              <div>
                <h1 className="text-xs font-semibold text-white/80 mb-1 tracking-wide">
                  {card.title}
                </h1>
                <p className="text-lg font-bold text-white drop-shadow-sm">
                  {card.value}
                </p>
              </div>
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/80 group-hover:bg-primary/100 transition-colors">
                <card.icon className="w-5 h-5 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Active Movies Section */}
        <BlurCircle right={200} />

        <div className="mt-8">
          <h2 className="text-lg font-semibold text-white mb-4">
            Active Movies
          </h2>
          <div className="flex flex-wrap gap-5">
            {dashboardData.activeShows.map((s) => (
              <div
                key={s.movie._id}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow max-w-[170px] w-full p-2 transition-transform duration-200 hover:scale-105 hover:bg-white/20"
              >
                <img
                  src={s.movie.poster_path}
                  alt={s.movie.title}
                  className="w-full h-36 object-cover rounded-md mb-2"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-semibold text-white/90 truncate">
                    {s.movie.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-white">
                      {currency}{s.showPrice}
                    </span>
                    <span className="flex items-center gap-1 text-pink-400 font-semibold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                      <span className="text-white text-xs">
                        {s.movie.vote_average.toFixed(1)}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
