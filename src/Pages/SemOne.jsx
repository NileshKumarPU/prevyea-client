import {
  AiSearchBar,
  CheatSheet,
  PDFViewer,
} from "../components";
import { useEffect, useState } from "react";
import MovingText from "../components/MovingText";
import CampusConnect from "./CampusConnect";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";


function SemOne() {
  const [year, setYear] = useState(2020);
  const [paperCode, SetPaperCode] = useState("cc1");
  const [pdfUrl, setPdfUrl] = useState("/cc1/2020.pdf");
  const [activeTab, setActiveTab] = useState(true);


   const pdfs = [
    {
      title: "ge12021",
      url: "/sem1/ge1/2021.pdf",
    },
    {
      // title: "ge12020",
      url: "/sem1/ge1/2020.pdf",
    },
    {
      title: "cc12021",
      url: "/sem1/cc1/2021.pdf",
    },
    {
      title: "cc12020",
      url: "/sem1/cc1/2020.pdf",
    },
    {
      // title: "ge12024",
      url: "/sem1/ge1/2024.pdf",
    },
    {
      title: "ge12023",
      url: "/sem1/ge1/2023.pdf",
    },
    {
      title: "ge12022",
      url: "/sem1/ge1/2022.pdf",
    },
    {
      title: "aecc12021",
      url: "/sem1/aecc1/2021.pdf",
    },
    {
      title: "aecc12020",
      url: "/sem1/aecc1/2020.pdf",
    },
    {
      title: "cc12023",
      url: "/sem1/cc1/2023.pdf",
    },
    {
      // title: "cc22024",
      url: "/sem1/cc2/2024.pdf",
    },
    {
      title: "cc22023",
      url: "/sem1/cc2/2023.pdf",
    },
    {
      title: "cc22022",
      url: "/sem1/cc2/2022.pdf",
    },
    {
      // title: "cc12024",
      url: "/sem1/cc1/2024.pdf",
    },
    {
      title: "cc12022",
      url: "/sem1/cc1/2022.pdf",
    },
    {
      title: "cc22021",
      url: "/sem1/cc2/2021.pdf",
    },
    {
      // title: "cc22020",
      url: "/sem1/cc2/2020.pdf",
    },
    {
      // title: "aecc12024",
      url: "/sem1/aecc11/2024.pdf",
    },
    {
      title: "aecc12023",
      url: "/sem1/aecc1/2023.pdf",
    },
    {
      // title: "aecc12022",
      url: "/sem1/aecc1/2022.pdf",
    },
  ];


  useEffect(() => {
    const newTitle = paperCode + year;
    fetchurl(newTitle);
  }, [year, paperCode]);

  async function fetchurl(newTitle) {
    const foundUrl = pdfs.find((pdf) => pdf.title === newTitle);
    if (foundUrl) {
      setPdfUrl(foundUrl.url);
    } else {
      setPdfUrl("/na.pdf");
    }
  }
  activeTab
    ? (document.body.style.backgroundColor = "#fffbeb")
    : (document.body.style.backgroundColor = "#ecfdf5");




  return (
    <>
         <div className="flex justify-center w-1/2 m-auto mt-0.5 font-light text-xl shadow-lg tab-mobile">
        <button
          className={`border-amber-200 p-2 w-full shadow-lg ${
            activeTab ? "bggreen text-white" : ""
          }`}
          onClick={() => {
            setActiveTab(true);
          }}
        >
          📖 Previous Year
        </button>
        <button
          className={`border-amber-200 p-2 w-full shadow-lg  ${
            activeTab ? "" : "bggreen text-white"
          }`}
          onClick={() => {
            setActiveTab(false);
          }}
        >
          📂 Resources
        </button>
      </div>
      {activeTab ? (
        <div>
          <MovingText text="All PYQs From 2020-2024 Are Now Available With AI answers generation feature." />
      <div className="flex justify-center sempage-mobile pb-6  w-4/5 m-auto">
        <div className="w-full h-fit pt-36 mt-6 year-box-mobile">
          <p className="text-center font-bold">Select Year</p>
          <div className="flex justify-center ">
             <div className=" bg-white py-4 px-3 rounded-3xl shadow-lg flex flex-col justify-center gap-5 border-2 year-list-mobile">
                  <button
                    className={`px-5 py-2 text-white font-medium outline-none rounded-3xl shadow-lg ${year===2020 ? "bg-black" : "bgblue"}`}
                    
                    
                    onClick={() => {
                      setYear(2020);
                    }}
                  >
                    2020
                  </button>
                  <button
                    className={`px-5 py-2 text-white font-medium outline-none rounded-3xl shadow-lg ${year===2021 ? "bg-black" : "bgblue"}`}
                    
                    onClick={() => {
                      setYear(2021);
                    }}
                  >
                    2021
                  </button>
                  <button
                    className={`px-5 py-2 text-white font-medium outline-none rounded-3xl shadow-lg ${year===2022 ? "bg-black" : "bgblue"}`}
                
                    onClick={() => {
                      setYear(2022);
                    }}
                  >
                    2022
                  </button>
                  <button
                    className={`px-5 py-2 text-white font-medium outline-none rounded-3xl shadow-lg ${year===2023 ? "bg-black" : "bgblue"}`}
                  
                    onClick={() => {
                      setYear(2023);
                    }}
                  >
                    2023
                  </button>
                  <button
                    className={`px-5 py-2 text-white font-medium outline-none rounded-3xl shadow-lg ${year===2024 ? "bg-black" : "bgblue"}`}
                
                    onClick={() => {
                      setYear(2024);
                    }}
                  >
                    2024
                  </button>
                  <button
                    className={`px-5 py-2 text-white font-medium outline-none rounded-3xl shadow-lg ${year===2025 ? "bg-black" : "bgblue"}`}
                   
                    onClick={() => {
                      setYear(2025);
                    }}
                  >
                    2025
                  </button>
                </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-12 pt-10">
          <div className="paperCode">
            <p className="text-center font-bold">Select Paper Code</p>
            <div className=" flex justify-center ">
              <div className=" bg-white py-2 px-3 rounded-3xl shadow-lg flex justify-center gap-5 border-2">
                    <button
                      className={`px-5 py-2 font-medium outline-none rounded-3xl shadow-lg ${
                        paperCode === "cc1" ? "bg-black text-white" : "bggreen"
                      }`}
                      onClick={() => {
                        SetPaperCode("cc1");
                      }}
                    >
                      CC-1
                    </button>
                    <button
                      className={`px-5 py-2 font-medium outline-none rounded-3xl shadow-lg ${
                        paperCode === "cc2" ? "bg-black text-white" : "bggreen"
                      }`}
                      onClick={() => {
                        SetPaperCode("cc2");
                      }}
                    >
                      CC-2
                    </button>
                    <button
                      className={`px-5 py-2 font-medium outline-none rounded-3xl shadow-lg ${
                        paperCode === "aecc1"
                          ? "bg-black text-white"
                          : "bggreen"
                      }`}
                      onClick={() => {
                        SetPaperCode("aecc1");
                      }}
                    >
                      AECC-1
                    </button>
                    <button
                      className={`px-5 py-2 font-medium outline-none rounded-3xl shadow-lg ${
                        paperCode === "ge1" ? "bg-black text-white" : "bggreen"
                      }`}
                      onClick={() => {
                        SetPaperCode("ge1");
                      }}
                    >
                      GE-1
                    </button>
                  </div>
            </div>
          </div>

          <div className="viewer">
                          <h1 className="text-center text-md font-bold">
                            CURRENT PYQ IS {paperCode.toUpperCase()} {year}
                          </h1>
                          <PDFViewer url={pdfUrl} />
                          {/* <div style={{ height: "600px" }}>
                            <Worker
                              workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
                            >
                              <Viewer 
                              fileUrl={pdfUrl}
                              plugins={[defaultLayoutPluginInstance]} />
                            </Worker>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="bg-emerald-100 w-full py-4 md:h-screen">
                      <AiSearchBar />
                    </div>
                  </div>
                ) : (
                  <div className="flex w-4/5 justify-center gap-2 m-auto mt-2 resource-mobile ">
                    <div className="w-1/2">
                      <CheatSheet />
                    </div>
                    <div className="w-1/2">
                      <AiSearchBar />
                    </div>
                  </div>
                )}
              </>
            );
          }
          
export default SemOne;
