import React from "react";

const MovieHeroSection = ({ movie }) => {
  if (!movie) return null;

  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start py-12 px-4 md:px-16 lg:px-32 bg-gradient-to-r from-black to-[#181c23] rounded-2xl">
      {/* Poster */}
      <img
        src={movie.poster_path}
        alt={movie.title}
        className="w-64 h-[400px] object-cover rounded-2xl shadow-lg mb-4 md:mb-0"
      />
      {/* Details */}
      <div className="flex-1 text-left">
        <div className="uppercase text-pink-500 font-semibold text-sm mb-2">
          {movie.original_language === "en"
            ? "English"
            : movie.original_language}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
          {movie.title}
        </h1>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-pink-400 text-lg">★</span>
          <span className="font-medium text-white text-base">
            {movie.vote_average?.toFixed(1) || "-"} IMDb Rating
          </span>
        </div>
        <p className="text-gray-300 mb-6 max-w-2xl">{movie.overview}</p>
        <div className="text-gray-400 mb-8 text-base">
          {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
          {movie.genres && movie.genres.length > 0 && (
            <> • {movie.genres.map((g) => g.name).join(" • ")}</>
          )}
          {movie.release_date && (
            <>
              {" "}
              •{" "}
              {new Date(movie.release_date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </>
          )}
        </div>
        <div className="flex gap-4">
          <button className="bg-[#232b38] text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-[#2d3647] transition">
            <span role="img" aria-label="trailer">
              ▶️
            </span>{" "}
            Watch Trailer
          </button>
          <button
            onClick={() => {
              const el = document.getElementById("date-select-section");
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "center" });
              }
            }}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Buy Tickets
          </button>
          <button className="bg-[#232b38] text-white px-4 py-3 rounded-lg flex items-center justify-center hover:bg-[#2d3647] transition">
            <span role="img" aria-label="favorite">
              ♡
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieHeroSection;
