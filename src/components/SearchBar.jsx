// function SearchBar(){

//     return(

//         <>
//         <div className=" w-1/2 m-auto p-5" >
//             <input className="searchBar" type="search" name="Nee" id="" placeholder="Search Paper Code" />
//         </div>
//         </>
//     )
// }

// export default SearchBar

import { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar(props) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim() !== '') {
      console.log('Searching for:', query);
      // You can replace this with your actual search logic
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="bg-lime-200 m-auto mt-4 rounded-full px-4 py-2 flex items-center w-full max-w-md shadow-sm">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={props.text}
        className="bg-transparent outline-none flex-grow text-gray-800 placeholder-gray-600"
      />
      <button onClick={handleSearch}>
        <Search className="text-gray-800 hover:text-black transition-colors duration-200" size={20} />
      </button>
    </div>
  );
}
