import React from "react";

const Navbar = () => {
  return (
      <nav className="bg-blue-500 p-3 flex items-center justify-between h-[10vh] sticky">
        <div>
          <h1 className="text-white text-xl font-semibold">BuildYourTest.</h1>
        </div>
        <div className="flex items-center space-x-4">
            <i className="fas fa-user-circle fa-solid text-white text-2xl"></i>
            <span className="text-white text-lg font-medium">Achyuta Gupta</span>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Out</button>
        </div>
      </nav>
  );
};

export default Navbar;
