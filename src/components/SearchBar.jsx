import Typewriter from "./Typewriter";
import axios from "axios";
import { useState,useRef } from "react";
import { Container, Copy, Search } from "lucide-react";
import { useEffect } from "react";
import CopyButton from "./CopyButton";

export default function SearchBar(props) {
  const [query, setQuery] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const[copySuccess,setCopySuccess]= useState();
 

  

  // const handleCopy= async()=>{
  //   try {
  //     await window.navigator.clipboard.writeText(answer);
  //     setCopySuccess("Copied to clipboard!")
     
  // } catch (err) {
  //     console.error(
  //         "Unable to copy to clipboard.",
  //         err
  //     );
  //     alert("Copy to clipboard failed.");
  // }
  // }
  const handleSearch = () => {
    setAnswer("This Service will be live Soon..");


    
       
      
      
    
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <>
      <div
        id="container"
        className="bg-lime-200 m-auto mt-4 mb-0 rounded-full px-4 pt-2 pb-2 flex flex-col items-center max-w-md  shadow-sm "
      >
        <div className="mobile w-full m-auto rounded-xl  px-2 pb-2 pt-2 flex  ">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={props.text}
            className="bg-transparent outline-none flex-grow text-gray-800 placeholder-gray-600"
          />
          <button id="search-icon" className="bggreen" onClick={handleSearch}>
            <Search />
          </button>
        </div>
        <div>
          <p>
            <Typewriter text={answer}/>
          </p>
        </div>

        
      </div>
    </>
  );
}
