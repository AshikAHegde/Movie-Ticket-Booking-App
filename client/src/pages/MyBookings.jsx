import React, { useState, useEffect } from "react";
import BlurCircle from "../components/BlurCircle";
import Loading from "../components/Loading";
import { dummyBookingData } from "../assets/assets";

const MyBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMyBookings = async () => {
    setBookings(dummyBookingData);
    setIsLoading(false);
  };

  useEffect(() => {
    getMyBookings();
  }, []);

  return !isLoading ? (
    <div className="relative px-6 md:px-16 lg:px-40 pt-30 md:pt-40 min-h-[80vh]">
      <BlurCircle top="100px" left="100px" />
      <h2 className="text-xl font-semibold mb-8 mt-2 text-white">
        My Bookings
      </h2>
      <div className="flex flex-col gap-6">
        {bookings.map((booking, idx) => {
          const movie = booking.show.movie;
          const showTime = new Date(booking.show.showDateTime);
          const timeString = showTime.toLocaleString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          });
          return (
            <div
              key={idx}
              className="flex bg-[#2a1826] border border-[#a23a5a40] rounded-xl overflow-hidden shadow-md items-center p-4 md:p-6"
              style={{ maxWidth: "700px" }}
            >
              <img
                src={movie.poster_path}
                alt={movie.title}
                className="w-36 h-28 object-cover rounded-lg border border-[#a23a5a40] mr-6"
              />
              <div className="flex-1 flex flex-col justify-between h-full">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {movie.title}
                    </h3>
                    <div className="text-gray-300 text-xs mb-1">
                      {Math.floor(movie.runtime / 60)} hours{" "}
                      {movie.runtime % 60} minutes
                    </div>
                    <div className="text-gray-300 text-xs">
                      {timeString.replace(",", " -")}
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col md:items-end md:text-right justify-between h-full p-4">
                    <div className="flex items-center gap-4 justify-between md:justify-end">
                      <p className="text-2xl font-semibold mb-3">
                        {currency}
                        {booking.amount}
                      </p>
                      {!booking.isPaid && (
                        <button className="bg-primary px-4 py-1.5 mb-3 text-sm rounded-full font-medium cursor-pointer">
                          Pay Now
                        </button>
                      )}
                    </div>
                    <div className="text-sm">
                      <p>
                        <span className="text-gray-400">Total Tickets:</span>{" "}
                        {booking.bookedSeats.length}
                      </p>
                      <p>
                        <span className="text-gray-400">Seat Number:</span>{" "}
                        {booking.bookedSeats.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default MyBookings;
