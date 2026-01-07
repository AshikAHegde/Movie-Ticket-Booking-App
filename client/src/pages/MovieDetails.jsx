import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { dummyShowsData, dummyDateTimeData } from "../assets/assets";
import DateSelect from "../components/DateSelect";
import MovieHeroSection from "../components/MovieHeroSection";
import CastList from "../components/CastList";
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";
import { ArrowRight } from "lucide-react";

const MovieDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const navigate = useNavigate();
  const getShow = async () => {
    const movie = dummyShowsData.find((show) => show._id === id);
    if(!movie){
      return;
    }
    setShow({
      movie: movie,
      dateTime: dummyDateTimeData,
    });
  };

  useEffect(() => {
    getShow();
  }, [id]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-2 md:px-0 w-full">
      {show ? (
        <>
          <MovieHeroSection movie={show.movie} />
          <div className="w-full max-w-6xl mx-auto">
            <CastList casts={show.movie.casts} />
          </div>
          <div id="date-select-section">
            <DateSelect dateTime={show.dateTime} id={show.movie._id} />
          </div>

          <div className="w-full max-w-7xl mx-auto mt-16">
            <div className="flex items-center justify-between mb-8 px-2 md:px-0">
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                You May Also Like
              </h2>
              <button className="flex items-center gap-2 text-pink-400 hover:underline text-sm cursor-pointer">
                View All <ArrowRight className="h-4 w-4"/>
               
              </button>
            </div>
            <div className="flex flex-wrap md:flex-nowrap gap-6 justify-center md:justify-start">
              {dummyShowsData
                .filter((m) => m._id !== show.movie._id)
                .slice(0, 4)
                .map((s) => (
                  <MovieCard key={s._id} movie={s} />
                ))}
            </div>
            <div className="flex justify-center mt-10">
              <button
                onClick={() => {
                  scroll(0, 0);
                  navigate("/movies");
                }}
                className="px-8 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-md font-medium transition"
              >
                Show more
              </button>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default MovieDetails;
