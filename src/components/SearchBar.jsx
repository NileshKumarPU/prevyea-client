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
 

  useEffect(() => {
    const box = document.getElementById("box-opener");
    const container = document.getElementById("container");
    if (question) {
      // container.classList.remove("max-w-md")
      box.classList.remove("max-h-0");
    } else box.classList.add("max-h-0");
    // container.classList.add("max-w-md")
  }, [question, query]);

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
    setAnswer("Generating answer...");
    setQuestion(query);

    if (query.trim() !== "") {
      console.log("Searching for:", query);
      axios({
        method: "post",
        url: "http://localhost:8001/aisearch",
        data: {
          searchquery:
            query +
            ",answer it like a pragraph in single font size in 50 words",
        },
      }).then((result) => {
        if (result.status == 200) {
          setAnswer(result.data.contents);
          console.log(answer);
          setQuery("");
        }
      });

      
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <>
      <div
        id="container"
        className="bg-lime-200 m-auto mt-4 mb-0 rounded-xl px-4 pt-2 pb-2 flex flex-col items-center max-w-full min-w-mds shadow-sm"
      >
        <div className="mobile w-md m-auto rounded-xl  px-2 pb-2 pt-2 flex  ">
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

        <div
          id="box-opener"
          className="text-left justify-items-start min-w-full max-h-0 overflow-hidden "
        >
          <p className=" mt-0  w-full  px-4 py-2 border-b-2 ">
            <span className="text-red-400"> Que.: </span>&nbsp; {question}{" "}
          </p>
          <p className=" mt-0 rounded-full w-full px-4 py-2 ">
            <span className="text-green-500">Ans.: </span> &nbsp; {answer}
          </p>
            <CopyButton textToCopy={answer} />
        </div>
      </div>
    </>
  );
}
