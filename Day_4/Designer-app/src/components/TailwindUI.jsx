import React from "react";

const TailwindUI = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <nav className="bg-blue-500 p-4 text-white rounded-lg">
        <h1 className="text-lg font-bold">Tailwind Navbar</h1>
      </nav>
      <div className="mt-6 flex flex-col items-center">
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          Tailwind Button
        </button>
        <div className="mt-4 p-4 shadow-lg rounded-lg bg-white w-80">
          <h2 className="text-xl font-bold">Tailwind Card</h2>
          <p className="text-gray-600">This is a card styled using Tailwind CSS.</p>
        </div>
      </div>
    </div>
  );
};

export default TailwindUI;
