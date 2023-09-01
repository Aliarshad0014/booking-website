import React, { useState } from 'react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    // console.log(`Selected option: ${option}`);
    setIsOpen(false); 
  };

  const dropdownOptions = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div className="flex justify-end z-50  -translate-x-96 relative">
      <div className="relative group">
        <button
          className="w-42 flex items-center h-12 bg-white border-2 p-2 rounded-md focus:outline-none"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          onClick={toggleDropdown}
        >
          Sort By Price
          <svg
            className={`h-5 w-5 ml-2 transition-transform transform ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        {isOpen && (
          <ul
            className="absolute bg-white border-2 p-2 rounded-md mt-2 space-y-1 text-gray-700"
            aria-label="Sort options"
          >
            {dropdownOptions.map((option, index) => (
              <li key={index}>
                <button
                  className="block px-4 py-2 w-full text-left hover:bg-gray-200 focus:outline-none"
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
