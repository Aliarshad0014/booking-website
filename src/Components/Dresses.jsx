import React, { useState } from "react";
import data from "../Components/data.jsx";
import DressCard from "./DressCard.jsx";
import Dropdown from "./Dropdown"; // Import the Dropdown component

export default function Dresses() {
  // State for sorting option (you can expand this as needed)
  const [sortOption, setSortOption] = useState("Sort by");

  // Function to handle sorting option change
  const handleSortChange = (option) => {
    // Add your sorting logic here
    setSortOption(option);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="mt-20">
        <p className="flex justify-center text-2xl font-bold">Dresses</p>
        <p className="flex justify-center text-sm">For your Wedding Events</p>
      </div>
      <div className="flex justify-end">
        <Dropdown
          options={['Option 1', 'Option 2', 'Option 3']} // Replace with your sorting options
          selectedOption={sortOption}
          onSelectOption={handleSortChange}
        />
      </div>

      <div className="flex justify-center">
        <div className="grid mt-10 gap-x-10 gap-y-4 grid-cols-4 max-w-[80vw]">
          {data.map((item) => (
            <DressCard
              key={item.id}
              img={item.img}
              disc={item.disc}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}



