import { AiSearchBar, CheatSheet, PDFViewer, MovingText } from "../components";
import { useEffect, useState } from "react";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

function SemFive() {
  const [year, setYear] = useState(2020);
  const [paperCode, SetPaperCode] = useState("cc3");
  const [pdfUrl, setPdfUrl] = useState("/cc3/2020.pdf");
  const [activeTab, setActiveTab] = useState(true);

  const pdfs = [
    {
      title: "ge22021",
      url: "/sem2/ge2/2021.pdf",
    },
    {
      title: "ge22020",
      url: "/sem2/ge2/2020.pdf",
    },
    {
      title: "cc32021",
      url: "/sem2/cc3/2021.pdf",
    },
    {
      title: "cc32020",
      url: "/sem2/cc3/2020.pdf",
    },
    {
      title: "ge22024",
      url: "/sem2/ge2/2024.pdf",
    },
    {
      title: "ge22023",
      url: "/sem2/ge2/2023.pdf",
    },
    {
      title: "ge22022",
      url: "/sem2/ge2/2022.pdf",
    },
    {
      title: "aecc22021",
      url: "/sem2/aecc/2021.pdf",
    },
    {
      title: "aecc22020",
      url: "/sem2/aecc/2020.pdf",
    },
    {
      title: "cc32023",
      url: "/sem2/cc3/2023.pdf",
    },
    {
      title: "cc42024",
      url: "/sem2/cc4/2024.pdf",
    },
    {
      title: "cc42023",
      url: "/sem2/cc4/2023.pdf",
    },
    {
      title: "cc42022",
      url: "/sem2/cc4/2022.pdf",
    },
    {
      title: "cc32024",
      url: "/sem2/cc3/2024.pdf",
    },
    {
      title: "cc32022",
      url: "/sem2/cc3/2022.pdf",
    },
    {
      title: "cc42021",
      url: "/sem2/cc4/2021.pdf",
    },
    {
      title: "cc42020",
      url: "/sem2/cc4/2020.pdf",
    },
    {
      title: "aecc22024",
      url: "/sem2/aecc/2024.pdf",
    },
    {
      title: "aecc22023",
      url: "/sem2/aecc/2023.pdf",
    },
    {
      title: "aecc22022",
      url: "/sem2/aecc/2022.pdf",
    },
  ];

  const books = [
    {
      title: "CC-11: Data Str.",
      pdf: "#",
      uploadtime: " Soon",
    },
    {
      title: "CC-12: Big Data ",
      pdf: "#",
      uploadtime: " soon",
    },
    {
      title: "DSE-1: Op. Res.",
      pdf: "#",
      uploadtime: " soon",
    },
    {
      title: "DSE-2: Info. Sec.",
      pdf: "#",
      uploadtime: " soon",
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
          <div className="flex justify-center  sempage-mobile pb-6 w-4/5 m-auto">
            <div className="w-full h-fit pt-36 mt-6 year-box-mobile">
              <p className="text-center font-bold">Select Year</p>
              <div className="flex justify-center ">
                <div className=" bg-white py-4 px-3 rounded-3xl shadow-lg flex flex-col justify-center gap-5 border-2 year-list-mobile">
                  <button
                    className={`px-5 py-2 text-white font-medium outline-none rounded-3xl shadow-lg ${
                      year === 2020 ? "bg-black" : "bgblue"
                    }`}
                    onClick={() => {
                      setYear(2020);
                    }}
                  >
                    2020
                  </button>
                  <button
                    className={`px-5 py-2 text-white font-medium outline-none rounded-3xl shadow-lg ${
                      year === 2021 ? "bg-black" : "bgblue"
                    }`}
                    onClick={() => {
                      setYear(2021);
                    }}
                  >
                    2021
                  </button>
                  <button
                    className={`px-5 py-2 text-white font-medium outline-none rounded-3xl shadow-lg ${
                      year === 2022 ? "bg-black" : "bgblue"
                    }`}
                    onClick={() => {
                      setYear(2022);
                    }}
                  >
                    2022
                  </button>
                  <button
                    className={`px-5 py-2 text-white font-medium outline-none rounded-3xl shadow-lg ${
                      year === 2023 ? "bg-black" : "bgblue"
                    }`}
                    onClick={() => {
                      setYear(2023);
                    }}
                  >
                    2023
                  </button>
                  <button
                    className={`px-5 py-2 text-white font-medium outline-none rounded-3xl shadow-lg ${
                      year === 2024 ? "bg-black" : "bgblue"
                    }`}
                    onClick={() => {
                      setYear(2024);
                    }}
                  >
                    2024
                  </button>
                  <button
                    className={`px-5 py-2 text-white font-medium outline-none rounded-3xl shadow-lg ${
                      year === 2025 ? "bg-black" : "bgblue"
                    }`}
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
                        paperCode === "cc11" ? "bg-black text-white" : "bggreen"
                      }`}
                      onClick={() => {
                        SetPaperCode("cc11");
                      }}
                    >
                      CC-11
                    </button>
                    <button
                      className={`px-5 py-2 font-medium outline-none rounded-3xl shadow-lg ${
                        paperCode === "cc12" ? "bg-black text-white" : "bggreen"
                      }`}
                      onClick={() => {
                        SetPaperCode("cc12");
                      }}
                    >
                      CC-12
                    </button>
                    <button
                      className={`px-5 py-2 font-medium outline-none rounded-3xl shadow-lg ${
                        paperCode === "dse1" ? "bg-black text-white" : "bggreen"
                      }`}
                      onClick={() => {
                        SetPaperCode("dse1");
                      }}
                    >
                      DSE-1
                    </button>
                    <button
                      className={`px-5 py-2 font-medium outline-none rounded-3xl shadow-lg ${
                        paperCode === "dse2" ? "bg-black text-white" : "bggreen"
                      }`}
                      onClick={() => {
                        SetPaperCode("dse2");
                      }}
                    >
                      DSE-2
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
            <AiSearchBar text="🔥AI-Powered Answers" />
          </div>
        </div>
      ) : (
        // This is resource tab.
        <div>
            {/* This is first and  outer div for cheatsheet and ai answer */}
          <div className="flex w-4/5 justify-center gap-2 m-auto mt-2 resource-mobile ">
            <div className="w-1/2">
              <CheatSheet books={books} />
            </div>
            <div className="w-1/2">
              <AiSearchBar />
            </div>
          </div>
          {/* this is second div for syllabus */}
          <div className="py-12 bg-amber-50 m-auto text-center">
            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                Syllabus
              </span>{" "}
              Here
            </h1>
            <div className="pb-6 p-4 font-extrabold  text-md md:text-xl lg:text-2xl space-x-3">
              
              <Link
                to="#"
                className="inline-block items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-lime-300 via-cyan-400 to-teal-400 text-black font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <BookOpen className="w-5 h-5 inline" />
                <span> CC-11</span>
              </Link>
              <Link
                to="#"
                className="inline-block items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-lime-300 via-cyan-400 to-teal-400 text-black font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <BookOpen className="w-5 h-5 inline" />
                <span> CC-12</span>
              </Link>
              <Link
                to="#"
                className="inline-block items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-lime-300 via-cyan-400 to-teal-400 text-black font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <BookOpen className="w-5 h-5 inline" />
                <span> DSE-1</span>
              </Link>
              <Link
                to="#"
                className="inline-block items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-lime-300 via-cyan-400 to-teal-400 text-black font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <BookOpen className="w-5 h-5 inline" />
                <span> DSE-2</span>
              </Link>
            </div>
          </div>
          <div className="py-12 bg-emerald-100 m-auto text-center">
            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                Notes
              </span>{" "}
              Here
            </h1>
            <div>
                 <Link
                to="#"
                className="inline-block items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-lime-300 via-cyan-400 to-teal-400 text-black font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <BookOpen className="w-5 h-5 inline" />
                <span> DSE-2</span>
              </Link>
            </div>
          </div>
            {/* this is third and Something here div */}
          <div className="py-12 bg-amber-50 m-auto text-center">
            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                Something
              </span>{" "}
              Here
            </h1>
           
          </div>
        </div>
      )}
    </>
  );
}

export default SemFive;
