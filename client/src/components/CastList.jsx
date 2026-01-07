import React from "react";

const CastList = ({ casts }) => {
  if (!casts || casts.length === 0) return null;

  return (
    <div className="w-full mt-12">
      <h2 className="text-lg font-semibold mb-8 px-4 md:px-0">Your Favorite Cast</h2>
      <div className="flex gap-8 md:gap-10 px-4 md:px-0 overflow-x-auto scrollbar-thin scrollbar-thumb-[#232b38] scrollbar-track-transparent pb-4">
        {casts.map((cast, idx) => (
          <div key={idx} className="flex flex-col items-center w-32 flex-shrink-0">
            <img
              src={cast.profile_path}
              alt={cast.name}
              className="w-28 h-28 object-cover rounded-full border-4 border-[#232b38] shadow-md mb-3"
            />
            <div className="text-center">
              <div className="font-semibold text-white text-base leading-tight">
                {cast.name}
              </div>
              <div className="text-gray-400 text-sm mt-1">{cast.character || "Peter Quill"}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CastList;
