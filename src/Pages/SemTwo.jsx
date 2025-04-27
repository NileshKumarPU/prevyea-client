
import { PaperCodeButton, SearchBar, YearButton } from "../components";
import { useEffect, useState } from "react";
import axios from 'axios'

function SemTwo() {
  const [year, setYear] = useState(2020);
  const [paperCode, SetPaperCode] = useState("cc3");
  
  const [pdfUrl, setPdfUrl] = useState('');
  
  useEffect(()=>{

   fetchurl({paperCode,year});

  },[year,paperCode])


  async function fetchurl(params) {
    
    return await axios({
      method:'post',
      url:`https://prevyea-server.vercel.app/pdf`,
      data:{
        paperCode:paperCode,
        year:year,
      }
    }).then(result =>{
      
      setPdfUrl(`https://drive.google.com/file/d/${result.data}/preview`);
    })
  }




  return (
    <>
      <div className="flex justify-center pt-10 pb-10 bg-amber-50">
        <div className="year">
          <p className="text-center font-bold">Select Year</p>
          <div className="flex justify-center ">
            <div className=" bg-white py-4 px-3 rounded-3xl shadow-lg flex flex-col justify-center gap-10 border-2">
              <button
                className="px-5 py-2 text-white font-medium outline-none rounded-xl shadow-lg"
                style={{ backgroundColor: "#2CB8C6" }}
                onClick={() => {
                  setYear(2020);
                }}
              >
                2020
              </button>
              <button
                className="px-5 py-2 text-white font-medium outline-none rounded-xl shadow-lg"
                style={{ backgroundColor: "#2CB8C6" }}
                onClick={() => {
                  setYear(2021);
                }}
              >
                2021
              </button>
              <button
                className="px-5 py-2 text-white font-medium outline-none rounded-xl shadow-lg"
                style={{ backgroundColor: "#2CB8C6" }}
                onClick={() => {
                  setYear(2022);
                }}
              >
                2022
              </button>
              <button
                className="px-5 py-2 text-white font-medium outline-none rounded-xl shadow-lg"
                style={{ backgroundColor: "#2CB8C6" }}
                onClick={() => {
                  setYear(2023);
                }}
              >
                2023
              </button>
              <button
                className="px-5 py-2 text-white font-medium outline-none rounded-xl shadow-lg"
                style={{ backgroundColor: "#2CB8C6" }}
                onClick={() => {
                  setYear(2024);
                }}
              >
                2024
              </button>
              <button
                className="px-5 py-2 text-white font-medium outline-none rounded-xl shadow-lg"
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
        <div className="flex flex-col gap-12">
          <div className="paperCode">
            <p className="text-center font-bold">Select Paper Code</p>
            <div className=" flex justify-center ">
              <div className=" bg-white py-2 px-3 rounded-3xl shadow-lg flex justify-center gap-5 border-2">
              
                <button
                  className="px-5 py-2 font-medium outline-none rounded-3xl shadow-lg"
                  style={{ backgroundColor: "#D8F29D" }}
                  onClick={()=>{SetPaperCode('cc3')}}
                >
                 CC-3
                </button>
                <button
                  className="px-5 py-2 font-medium outline-none rounded-3xl shadow-lg"
                  style={{ backgroundColor: "#D8F29D" }}
                  onClick={()=>{SetPaperCode('cc4')}}
                >
                 CC-4
                </button>
                <button
                  className="px-5 py-2 font-medium outline-none rounded-3xl shadow-lg"
                  style={{ backgroundColor: "#D8F29D" }}
                  onClick={()=>{SetPaperCode('aecc2')}}
                >
                 AECC-2
                </button>
                <button
                  className="px-5 py-2 font-medium outline-none rounded-3xl shadow-lg"
                  style={{ backgroundColor: "#D8F29D" } }
                  onClick={()=>{SetPaperCode('ge2')}}
                >
                 GE-2
                </button>
                
              </div>
            </div>
          </div>
          <div className="viewer">
            <h1 className="text-center text-md font-bold">CURRENT PYQ IS {paperCode.toUpperCase()} {year}</h1>
            <iframe
              src={pdfUrl}
              
              height="100%"
              width="100%"
            ></iframe>
          </div>


                <SearchBar text="Get Answered by AI"/>

          
        </div>
      </div>
    </>
  );
}

export default SemTwo;
