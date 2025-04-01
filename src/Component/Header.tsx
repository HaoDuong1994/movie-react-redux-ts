import React from "react";
const Header: React.FC = () => {
  return (
    <div className="bg-black flex justify-around text-white">
      <div className="flex items-center space-x-4 p-6">
        <h1 className="text-red-500 text-lg">Movie</h1>
        <div>Home</div>
        <div>About Us</div>
        <div>Contact</div>
      </div>
      <div className="flex items-center space-x-4 ">
        <input className="bg-white p-1" />
        <button className="bg-green-600 p-1 rounded-sm hover:cursor-pointer">
          Search
        </button>
      </div>
    </div>
  );
};
export default Header;
