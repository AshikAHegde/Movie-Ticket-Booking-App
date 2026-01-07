import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import BlurCircle from "./BlurCircle";

const DateSelect = ({ dateTime, id }) => {
  const navigate = useNavigate();

  const dates = Object.keys(dateTime);
  const [selectedDate, setSelectedDate] = useState(dates[0]);

  const onBookHandler = () => {
    if (!selectedDate) {
      return toast.error("Please select a date & time");
    }

    navigate(`/movies/${id}/${selectedDate}`);
    scrollTo(0, 0);
  };

  return (
    <div id="dateSelect" className="pt-10 w-full">
      <div className="relative flex flex-col md:flex-row items-center justify-between
                      gap-8 p-8 bg-primary/10 border border-primary/20 rounded-xl">

        <BlurCircle top="-120px" left="-120px" />

        {/* LEFT */}
        <div className="w-full">
          <p className="text-lg font-semibold mb-4">Choose Date</p>

          {/* DATE */}
          <div className="flex gap-3 overflow-x-auto">
            {dates.map((date) => (
              <button
                key={date}
                onClick={() => {
                  setSelectedDate(date);
                }}
                className={`h-14 w-14 rounded flex flex-col items-center justify-center
                  ${selectedDate === date ? "bg-primary text-white" : "bg-white/10"}
                `}
              >
                <span className="text-sm">
                  {new Date(date).toLocaleDateString("en-US", { weekday: "short" })}
                </span>
                <span className="font-semibold">
                  {new Date(date).getDate()}
                </span>
              </button>
            ))}
          </div>

        </div>

        {/* RIGHT */}
        <button
          onClick={onBookHandler}
          className="bg-primary text-white px-10 py-3 rounded-full"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default DateSelect;
