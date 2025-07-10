import { PaperCodeButton, AiSearchBar, YearButton, PDFViewer } from "../components";
import { useEffect, useState } from "react";
import axios from "axios";
import MovingText from "../components/MovingText";
import CampusConnect from "./CampusConnect";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';


function SemTwo() {
  const [year, setYear] = useState(2020);
  const [paperCode, SetPaperCode] = useState("cc3");
  const [pdfUrl, setPdfUrl] = useState("/cc3/2020.pdf");
  const [activeTab, setActiveTab] = useState(true);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const pdfs = [
    {
      title: "ge22021",
      url: "/ge/2021.pdf",
    },
    {
      title: "ge22020",
      url: "/ge/2020.pdf",
    },
    {
      title: "cc32021",
      url: "/cc3/2021.pdf",
    },
    {
      title: "cc32020",
      url: "/cc3/2020.pdf",
    },
    {
      title: "ge22024",
      url: "/ge/2024.pdf",
    },
    {
      title: "ge22023",
      url: "/ge/2023.pdf",
    },
    {
      title: "ge22022",
      url: "/ge/2022.pdf",
    },
    {
      title: "aecc22021",
      url: "/aecc/2021.pdf",
    },
    {
      title: "aecc22020",
      url: "/aecc/2020.pdf",
    },
    {
      title: "cc32023",
      url: "/cc3/2023.pdf",
    },
    {
      title: "cc42024",
      url: "/cc4/2024.pdf",
    },
    {
      title: "cc42023",
      url: "/cc4/2023.pdf",
    },
    {
      title: "cc42022",
      url: "/cc4/2022.pdf",
    },
    {
      title: "cc32024",
      url: "/cc3/2024.pdf",
    },
    {
      title: "cc32022",
      url: "/cc3/2022.pdf",
    },
    {
      title: "cc42021",
      url: "/cc4/2021.pdf",
    },
    {
      title: "cc42020",
      url: "/cc4/2020.pdf",
    },
    {
      title: "aecc22024",
      url: "/aecc/2024.pdf",
    },
    {
      title: "aecc22023",
      url: "/aecc/2023.pdf",
    },
    {
      title: "aecc22022",
      url: "/aecc/2022.pdf",
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
    activeTab? document.body.style.backgroundColor="#fffbeb" : document.body.style.backgroundColor="#ecfdf5";

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
                    className="px-5 py-2 text-white font-medium outline-none rounded-3xl shadow-lg"
                    style={{ backgroundColor: "#2CB8C6" }}
                    onClick={() => {
                      setYear(2020);
                    }}
                  >
                    2020
                  </button>
                  <button
                    className="px-5 py-2 text-white font-medium outline-none rounded-3xl shadow-lg"
                    style={{ backgroundColor: "#2CB8C6" }}
                    onClick={() => {
                      setYear(2021);
                    }}
                  >
                    2021
                  </button>
                  <button
                    className="px-5 py-2 text-white font-medium outline-none rounded-3xl shadow-lg"
                    style={{ backgroundColor: "#2CB8C6" }}
                    onClick={() => {
                      setYear(2022);
                    }}
                  >
                    2022
                  </button>
                  <button
                    className="px-5 py-2 text-white font-medium outline-none rounded-3xl shadow-lg"
                    style={{ backgroundColor: "#2CB8C6" }}
                    onClick={() => {
                      setYear(2023);
                    }}
                  >
                    2023
                  </button>
                  <button
                    className="px-5 py-2 text-white font-medium outline-none rounded-3xl shadow-lg"
                    style={{ backgroundColor: "#2CB8C6" }}
                    onClick={() => {
                      setYear(2024);
                    }}
                  >
                    2024
                  </button>
                  <button
                    className="px-5 py-2 text-white font-medium outline-none rounded-3xl shadow-lg"
                    style={{ backgroundColor: "#2CB8C6" }}
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
                      className="px-5 py-2 font-medium outline-none rounded-3xl shadow-lg"
                      style={{ backgroundColor: "#D8F29D" }}
                      onClick={() => {
                        SetPaperCode("cc3");
                      }}
                    >
                      CC-3
                    </button>
                    <button
                      className="px-5 py-2 font-medium outline-none rounded-3xl shadow-lg"
                      style={{ backgroundColor: "#D8F29D" }}
                      onClick={() => {
                        SetPaperCode("cc4");
                      }}
                    >
                      CC-4
                    </button>
                    <button
                      className="px-5 py-2 font-medium outline-none rounded-3xl shadow-lg"
                      style={{ backgroundColor: "#D8F29D" }}
                      onClick={() => {
                        SetPaperCode("aecc2");
                      }}
                    >
                      AECC-2
                    </button>
                    <button
                      className="px-5 py-2 font-medium outline-none rounded-3xl shadow-lg"
                      style={{ backgroundColor: "#D8F29D" }}
                      onClick={() => {
                        SetPaperCode("ge2");
                      }}
                    >
                      GE-2
                    </button>
                  </div>
                </div>
              </div>
              <div className="viewer">
                <h1 className="text-center text-md font-bold">
                  CURRENT PYQ IS {paperCode.toUpperCase()} {year}
                </h1>
                <PDFViewer url={pdfUrl}/>
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

              <AiSearchBar text="🔥AI-Powered Answers" />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex w-4/5 justify-center gap-2 m-auto mt-2 resource-mobile ">
          <div className="w-1/2">
            <CampusConnect />
          </div>
          <div className="w-1/2">
            <CampusConnect />
          </div>
        </div>
      )}
    </>
  );
}

export default SemTwo;
