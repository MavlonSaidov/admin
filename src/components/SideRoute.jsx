import React from "react";

const SideRoute = ({ name }) => {
  return (
    <button className="w-full  text-gray-400 border hover:bg-gradient-to-r from-slate-700 via-slate-800 to-slate-600 rounded-r-xl py-3  font-semibold text-xl mb-2">
      {name}
    </button>
  );
};

export default SideRoute;
