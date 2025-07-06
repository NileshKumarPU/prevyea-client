import { PaperCodeButton, AiSearchBar, YearButton } from "../components";
import { useEffect, useState } from "react";
import axios from "axios";
import MovingText from "../components/MovingText";

function SemTwo() {
  const [year, setYear] = useState(2020);
  const [paperCode, SetPaperCode] = useState("cc3");
  const [pdfUrl, setPdfUrl] = useState(
    "https://drive.google.com/file/d/1Lw5jJI6NQ9zpaGRE3Z578ZL3r3xGClLC/preview"
  );

  const pdfs = [
    {
      title: "ge22021",
      url: "https://drive.google.com/file/d/19r_0vYw_1FeDPXTMHD4Vt76eqbPk1Drv/preview",
    },
    {
      title: "ge22020",
      url: "https://drive.google.com/file/d/1luFQ43ZEvDxNmXc_IkMvhLFj924fyWQ0/preview",
    },
    {
      title: "cc32021",
      url: "https://drive.google.com/file/d/1HuglH5OyR6c22OU4-WZn9qNhuExRijSy/preview",
    },
    {
      title: "cc32020",
      url: "https://drive.google.com/file/d/10EYHilrRiIxvJC5BshaN2t2yAQdKJQYu/preview",
    },
    {
      title: "ge22024",
      url: "https://drive.google.com/file/d/1WP6RNbWLfBiCOfRpqEmaqB26gmdBQzWS/preview",
    },
    {
      title: "ge22023",
      url: "https://drive.google.com/file/d/1RtKJHVU_KA6lV4P7cjYK6ZUTBLgSW_Kk/preview",
    },
    {
      title: "ge22022",
      url: "https://drive.google.com/file/d/1uf30X_o9s0bOsNRit4z9kvAUqnaWvnjp/preview",
    },
    {
      title: "aecc22021",
      url: "https://drive.google.com/file/d/1wVF97AkPOFXh8GttmmauIrPSVLxn4xxJ/preview",
    },
    {
      title: "aecc22020",
      url: "https://drive.google.com/file/d/1JFzMK-t830vu5jdTrzdOJJwtX6Ispu3N/preview",
    },
    {
      title: "cc32023",
      url: "https://drive.google.com/file/d/1ivv4u1EPz9RvK_1Hccq2fw7p8DNlJias/preview",
    },
    {
      title: "cc42024",
      url: "https://drive.google.com/file/d/1BGyFtzeFrVzpPxDoxr94DFD3y7ZQuc0z/preview",
    },
    {
      title: "cc42023",
      url: "https://drive.google.com/file/d/1_RniuD6-as4QH7CtXVuXNelesrxq5Ols/preview",
    },
    {
      title: "cc42022",
      url: "https://drive.google.com/file/d/1yIgm6Z8b68XzqHguKvD3zzBHNE99FDXy/preview",
    },
    {
      title: "cc32024",
      url: "https://drive.google.com/file/d/1OZikWarE-w03Tj02l9LZfDQ_4aZ6ofGy/preview",
    },
    {
      title: "cc32022",
      url: "https://drive.google.com/file/d/12rVZOmySKT9luSUX5J13CdMH4TIDGiUE/preview",
    },
    {
      title: "cc42021",
      url: "https://drive.google.com/file/d/1I-GsItGm3_OUCMlftu5EwJ6HRMXPDih5/preview",
    },
    {
      title: "cc42020",
      url: "https://drive.google.com/file/d/1dcZLS2rAMCUpTjVKGQ42ApXV_tVswjZJ/preview",
    },
    {
      title: "aecc22024",
      url: "https://drive.google.com/file/d/1dV3M5-hpjX6ttXJ0_uGsvFT4h20ZWllb/preview",
    },
    {
      title: "aecc22023",
      url: "https://drive.google.com/file/d/1cKLmf4OQUznw-c9aNzNj0TWKO9CNISHg/preview",
    },
    {
      title: "aecc22022",
      url: "https://drive.google.com/file/d/10ZdKpIIeOAysS9vcf68_LgXoI6frPRPk/preview",
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
      setPdfUrl(
        "https://drive.google.com/file/d/1aWcJF2gtzDrhuyu5Z5CTKeZGvVOv47tz/preview"
      );
    }
  }

  return (
    <>
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
            <iframe src={pdfUrl} height="96%" width="100%"></iframe>
          </div>

          <AiSearchBar text="Get Answered by AI" />
        </div>
      </div>
    </>
  );
}

export default SemTwo;
