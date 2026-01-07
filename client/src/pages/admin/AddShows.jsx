import React, { useEffect, useState } from "react";
import { dummyShowsData } from "../../assets/assets";
import Title from "../../components/admin/Title";
import { Star, Check } from "lucide-react";
import { kConverter } from "../../lib/kConverter";
import Loading from "../../components/Loading";

const AddShows = () => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [dateTimeSelection, setDateTimeSelection] = useState({});
  const [dateTimeInput, setDateTimeInput] = useState("");
  const [showPrice, setShowPrice] = useState("");

  useEffect(() => {
    setNowPlayingMovies(dummyShowsData);
  }, []);

  function handleDateTimeAdd() {
    if (!dateTimeInput) return;
    const [date, time] = dateTimeInput.split("T");
    if (!date || !time) return;

    setDateTimeSelection((prev) => {
      const times = prev[date] || [];
      if (!times.includes(time)) {
        return { ...prev, [date]: [...times, time] };
      }
      return prev;
    });
  }

  function handleRemoveTime(date, time) {
    setDateTimeSelection((prev) => {
      const filtered = prev[date].filter((t) => t !== time);
      if (filtered.length === 0) {
        const { [date]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [date]: filtered };
    });
  }

  return nowPlayingMovies.length > 0 ? (
    <>
      <Title text1="Add" text2="Shows" />

      <p className="mt-10 text-lg font-medium">Now Playing Movies</p>

      {/* MOVIE LIST */}
      <div className="pb-4">
        <div className="flex gap-4 mt-4 flex-wrap">
          {nowPlayingMovies.map((movie) => (
            <div
              key={movie.id}
              onClick={() => setSelectedMovie(movie.id)}
              className={`relative w-[165px] cursor-pointer rounded-xl overflow-hidden transition ${
                selectedMovie === movie.id
                  ? "ring-2 ring-primary"
                  : "opacity-80 hover:opacity-100"
              }`}
            >
              <div className="relative">
                <img
                  src={movie.poster_path}
                  alt={movie.title}
                  className="w-full h-[230px] object-cover"
                />

                <div className="absolute bottom-0 left-0 w-full bg-black/70 px-2 py-1 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-primary text-primary" />
                    {movie.vote_average.toFixed(1)}
                  </span>
                  <span className="text-gray-300">
                    {kConverter(movie.vote_count)} Votes
                  </span>
                </div>

                {selectedMovie === movie.id && (
                  <div className="absolute top-2 left-2 bg-primary h-6 w-6 rounded-md flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                )}
              </div>

              <div className="p-2 bg-black">
                <p className="text-sm font-medium truncate">{movie.title}</p>
                <p className="text-xs text-gray-400">
                  {movie.genres.map((g) => g.name).join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SHOW PRICE */}
      <div className="mt-8">
        <label className="block text-sm font-medium mb-2">Show Price</label>
        <div className="inline-flex items-center gap-2 border border-gray-600 px-3 py-2 rounded-md">
          <span className="text-gray-400 text-sm">{currency}</span>
          <input
            type="number"
            min={0}
            value={showPrice}
            onChange={(e) => setShowPrice(e.target.value)}
            placeholder="Enter show price"
            className="outline-none bg-transparent w-24"
          />
        </div>
      </div>

      {/* DATE & TIME */}
      <div className="mt-6">
        <label className="block text-sm font-medium mb-2">
          Select Date and Time
        </label>
        <div className="flex gap-4 border border-gray-600 p-2 rounded-lg w-fit">
          <input
            type="datetime-local"
            value={dateTimeInput}
            onChange={(e) => setDateTimeInput(e.target.value)}
            className="outline-none bg-transparent"
          />
          <button
            onClick={handleDateTimeAdd}
            className="bg-primary px-4 py-2 text-sm rounded-md hover:bg-primary/90"
          >
            Add Time
          </button>
        </div>
      </div>

      {/* SELECTED TIMES */}
      {Object.keys(dateTimeSelection).length > 0 && (
        <div className="mt-6">
          <h2 className="mb-2 font-medium">Selected Date-Time</h2>
          <div className="space-y-3">
            {Object.entries(dateTimeSelection).map(([date, times]) => (
              <div key={date}>
                <p className="text-sm font-medium">{date}</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {times.map((time) => (
                    <div
                      key={time}
                      className="flex items-center gap-2 border border-primary px-2 py-1 rounded text-sm"
                    >
                      <span>{time}</span>
                      <span
                        onClick={() => handleRemoveTime(date, time)}
                        className="text-red-500 cursor-pointer"
                      >
                        ✕
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FINAL BUTTON */}
      <button
        disabled={
          !selectedMovie ||
          !showPrice ||
          Object.keys(dateTimeSelection).length === 0
        }
        className="mt-8 bg-primary text-white px-8 py-2 rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Add Show
      </button>
    </>
  ) : (
    <Loading />
  );
};

export default AddShows;
