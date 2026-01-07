import React from "react";

const Title = ({ main, highlight }) => (
  <h2 className="text-2xl font-semibold text-white mb-8">
    {main} <span className="text-[#D80032]">{highlight}</span>
  </h2>
);

export default Title;
