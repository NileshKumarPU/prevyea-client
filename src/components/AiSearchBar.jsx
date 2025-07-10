import { motion } from "framer-motion";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import axios from "axios";

export default function AiSearchBar() {
  const [query, setQuery] = useState("");
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [hover, setHover] = useState(false);

  const handleAsk = async () => {
    if (!query.trim()) return;
    setLoading(true);

    // Replace this with your actual Gemini API call
    const result = await axios({
      method: "post",
      url: "https://prevyea-server.vercel.app/aisearch",
      data: {
        searchquery: query,
      },
    });
  
    const fakeResponse = result.data.contents;

    setTimeout(() => {
      setHistory([...history, { q: query, a: fakeResponse }]);
      setQuery("");
      setLoading(false);
    }, 1200);
  };
  const copyToClipboard = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  const custombutton = {
    backgroundColor: hover ? "#4338ca" : "#4f46e5", // indigo-700 or indigo-600
    color: "white",
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    transition: "background-color 0.3s ease",
    cursor: "pointer",
  };
  return (
    <motion.div
      className="max-w-xl mx-auto mt-10 p-6 bg-gradient-to-br from-white via-indigo-50 to-indigo-100 rounded-2xl shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="text-3xl">🤖</div>
        <div>
          <h2 className="text-xl font-bold text-indigo-800">Ask Anything!</h2>
          <p className="text-sm text-indigo-600">
            Powered by <span className="font-semibold">Gemini API</span> — for
            BCA subjects
          </p>
        </div>
      </div>

      {/* Input */}
      <div className="relative mb-3">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='e.g., "Explain OSI Model", "What is a class in Java?"'
          className="w-full py-3 pl-5 pr-20 text-sm rounded-xl border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white shadow-inner"
        />
        <button
          onClick={handleAsk}
          style={custombutton}
          className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2  text-white text-sm rounded-lg"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {loading ? "Thinking..." : "Ask AI"}
        </button>
      </div>

      {/* Suggestions */}
      <div className="text-xs text-gray-500 mb-4">
        Try: <span className="italic">"What is normalization?"</span>,{" "}
        <span className="italic">"Define polymorphism"</span>,{" "}
        <span className="italic">"DBMS vs RDBMS"</span>
      </div>

      {/* History */}
      <div className="max-h-60 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-indigo-300 pr-2">
        {history.map((entry, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl p-4 shadow border border-indigo-100"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <p className="text-sm text-indigo-700 mb-2 font-semibold">
              🧑 You: {entry.q}
            </p>
            <ReactMarkdown className="text-sm text-gray-700 whitespace-pre-wrap">
              🤖 Gemini: {entry.a}
            </ReactMarkdown>
            {/* <p className="text-sm text-gray-700">🤖 Gemini: {entry.a}</p> */}

            {/* Copy Button */}
            <button
              onClick={() => copyToClipboard(entry.a, i)}
              style={custombutton}
              className="absolute top-2 right-2 text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-md hover:bg-indigo-200 transition"
            >
              {copiedIndex === i ? "✔ Copied!" : "📋 Copy"}
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// import Typewriter from "./Typewriter";
// import axios from "axios";
// import { useState,useRef } from "react";
// import { Container, Copy, Search } from "lucide-react";
// import { useEffect } from "react";
// import CopyButton from "./CopyButton";
// import ReactMarkDown from 'react-markdown';
// import {marked} from 'marked';

// export default function AiSearchBar(props) {
//   const [query, setQuery] = useState("");
//   const [question, setQuestion] = useState("");
//   const [answer, setAnswer] = useState("");
//   const[copySuccess,setCopySuccess]= useState();

//   useEffect(() => {
//     const box = document.getElementById("box-opener");
//     const container = document.getElementById("container");
//     if (question) {
//       container.classList.remove("max-w-md")
//       box.classList.remove("max-h-0");

//     } else {box.classList.add("max-h-0");
//     container.classList.add("max-w-md")}
//   }, [question, query]);

//   // const handleCopy= async()=>{
//   //   try {
//   //     await window.navigator.clipboard.writeText(answer);
//   //     setCopySuccess("Copied to clipboard!")

//   // } catch (err) {
//   //     console.error(
//   //         "Unable to copy to clipboard.",
//   //         err
//   //     );
//   //     alert("Copy to clipboard failed.");
//   // }
//   // }

//   const handleSearch = () => {
//     setAnswer("Generating answer...");
//     // document.getElementById('content').innerHTML =
//     //       marked.parse(answer);
//     setQuestion(query);

//     if (query.trim() !== "") {
//       console.log("Searching for:", query);
//       axios({
//         method: "post",
//         url: "https://prevyea-server.vercel.app/aisearch",
//         data: {
//           searchquery:
//             query ,
//         },
//       }).then((result) => {
//         if (result.status == 200) {
//           setAnswer(result.data.contents);
//           // document.getElementById('content').innerHTML =
//           // marked.parse(answer);
//           console.log(answer);
//           setQuery("");
//         }
//       });

//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") handleSearch();
//   };

//   return (
//     <>
//       <div
//         id="container"
//         className="bg-lime-200 m-auto mt-4 mb-0 rounded-xl px-6 py-4 flex flex-col items-center max-w-md min-w-md w-4/5 shadow-sm border-2"
//       >
//         <div className="mobile w-full m-auto rounded-xl  px-2 pb-2 pt-2 flex border-2  ">
//           <input
//             type="text"
//             value={query}
//             onChange={(e) => setQuery(e.target.value)}
//             onKeyDown={handleKeyDown}
//             placeholder={props.text}
//             className="bg-transparent outline-none flex-grow text-gray-800 placeholder-gray-600"
//           />
//           <button id="search-icon" className="bggreen" onClick={handleSearch}>
//             <Search />
//           </button>
//         </div>

//         <div
//           id="box-opener"
//           className="text-left justify-items-start min-w-full max-w-full max-h-0 overflow-scroll custom-scrollbar"
//         >
//           <p className=" mt-0  w-full  px-4 py-2 border-b-2 ">
//             <span className="text-red-400"> Que.: </span>&nbsp; {question}{" "}
//           </p>
//           <p className=" mt-0 l w-full px-4 py-2  ">
//             <span className="text-green-500">Ans.: </span>
//           </p>

//           <div id="content">

//           </div>
//             <div >
//             <ReactMarkDown children={answer}  />
//               </div>

//             <CopyButton textToCopy={answer} />
//         </div>
//       </div>
//     </>
//   );
// }
