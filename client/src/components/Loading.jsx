import React from "react";

const Loading = ({ text = "Loading..." }) => (
  <div className="flex items-center justify-center min-h-[80vh]">
    <p className="text-gray-400">{text}</p>
  </div>
);

export default Loading;