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
import Typewriter from './Typewriter';
import { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar(props) {
  const [query, setQuery] = useState('');
  const [lorem,setLorem]= useState('');

  const handleSearch = () => {
    if (query.trim() !== '') {
      console.log('Searching for:', query);
      setLorem("This feature will be added soon....");
      // You can replace this with your actual search logic
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <>

    <div className="bg-lime-200 m-auto mt-4 mb-0 rounded-full px-4 pt-2 flex flex-col items-center w-full max-w-md shadow-sm">
      <div className='w-full max-w-md px-2 pt-2 flex '>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={props.text}
        className="bg-transparent outline-none flex-grow text-gray-800 placeholder-gray-600"
      />
      <button className='bggreen ' onClick={handleSearch}>
        <Search />
      </button>
        </div>
        <div>

      <p className='m-auto mt-0 rounded-full w-full max-w-md px-4 py-2 ' >
        <Typewriter text={lorem} speed={70} /></p>
        </div>
    </div>

    
    </>
  );
}
