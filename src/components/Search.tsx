"use client"
import React, { useState } from 'react';


interface Data{
  data : string[]
}

const Search = ({ data }: Data) => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (event : React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value.toLowerCase();
    setQuery(searchQuery);
    const filtered = data.filter((item) =>
      item.toLowerCase().includes(searchQuery)
    );
    setFilteredData(filtered);
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        className="w-11/12 border-b border-gray-300 py-4 relative top-2 text-black text-left  outline-none "
        placeholder="Search our global search engine for products,categories"
        value={query}
        onChange={handleSearch}
      />
        <div className=' absolute right-6 top-6'>
         <button> <img src="/assets/search.png" alt="search" className=' opacity-50 w-6 h-6' /> </button> 
        </div>
      <ul className="w-full md:w-1/2 mt-4">
        {filteredData.map((item, index) => (
          <li
            key={index}
            className="px-4 py-2 border-b border-gray-200"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
