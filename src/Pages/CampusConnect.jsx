import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function CampusConnect() {
  const cookies = useCookies();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const verifyCookie = async () => {
      const { data } = await axios.post(
        "https://prevyea-server.vercel.app/",
        {},
        { withCredentials: true }
      );
      const { success, user } = data;
      setIsLoggedIn(success);

      return;
    };
    verifyCookie();
  }, [cookies]);

  const books = [
    {
      title: "CC-3: Java",
      pdf: "https://res.cloudinary.com/dwpc2rgdn/image/upload/v1751502947/PrevYea_CC3_Micro_gp1rki.pdf",
      uploadtime: " 06:05 AM 3-July",
    },
    {
      title: "CC-4: Arch. ",
      pdf: "https://res.cloudinary.com/dwpc2rgdn/image/upload/v1751658638/PrevYea_CC4_Micro_loyzok.pdf",
      uploadtime: " 01:20 AM 5-July",
    },
    {
      title: "GE-2: Maths",
      pdf: "https://res.cloudinary.com/dwpc2rgdn/image/upload/v1751926571/PrevYea_GE2_Micro_rnytsi.pdf",
      uploadtime: " 03:46 AM 8-July",
    },
    {
      title: "AECC-2: EVS",
      pdf: "https://res.cloudinary.com/dwpc2rgdn/image/upload/v1752060394/PrevYea_AECC2_Micro_fde1xp.pdf",
      uploadtime: " 9-July 04:56 PM",
    },
  ];

  return (
    <div className="my-8 rounded-2xl outline-1 shadow-lg" style={{backgroundColor:"white", padding: "2rem", minHeight: "100vh" }}>
      <h1 style={{ color: "#2CB8C6", fontSize: "2rem", marginBottom: "1rem" }}>
        📚 Exam CheatSheet
      </h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {books.map((book, index) => (
          <li
            key={index}
            style={{
              backgroundColor: "#D8F29D",
              marginBottom: "1rem",
              padding: "1rem",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <div className="flex items-center">
              <div>
                <div>
                  <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                    {book.title}
                  </span>
                </div>
                <div>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      // marginLeft: "1rem",
                      color: "gray",
                      fontStyle: "italic",
                    }}
                  >
                    (Uploaded:{book.uploadtime})
                  </span>
                </div>
              </div>

              <div>
                {isLoggedIn ? (
                  <a
                    href={book.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      marginLeft: "1.2rem",
                      backgroundColor: "#2CB8C6",
                      color: "#ffffff",
                      padding: "0.5rem 1rem",
                      borderRadius: "5px",
                      textDecoration: "none",
                    }}
                  >
                    Download PDF
                  </a>
                ) : (
                  <span
                    style={{
                      marginLeft: "1.2rem",
                      color: "gray",
                      fontStyle: "italic",
                    }}
                  >
                    (Login to download)
                  </span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
