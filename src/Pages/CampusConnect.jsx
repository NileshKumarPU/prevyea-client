import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

export default function CampusConnect(){

  const cookies = useCookies()
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
    title: "CC-3: Available",
    pdf: "https://res.cloudinary.com/dwpc2rgdn/image/upload/v1751502947/PrevYea_CC3_Micro_gp1rki.pdf",
  },
  {
    title: "CC-4: Available",
    pdf: "https://res.cloudinary.com/dwpc2rgdn/image/upload/v1751658638/PrevYea_CC4_Micro_loyzok.pdf",
  },
  {
    title: "GE-2 1-2 AM 8 July  ",
    pdf: "#",
  },
  {
    title: "AECC-2 Awaited",
    pdf: "https://example.com/design-patterns.pdf",
  },

];




  return (
    <div className="mt-8" style={{ padding: "2rem", minHeight: "100vh" }}>
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
            <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{book.title}</span>
            {isLoggedIn ?
            <a
            href={book.pdf}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginLeft: "1rem",
              backgroundColor: "#2CB8C6",
              color: "#ffffff",
              padding: "0.5rem 1rem",
              borderRadius: "5px",
              textDecoration: "none",
            }}
            >
              Download PDF
            </a>

            :(
              <span style={{ marginLeft: "1rem", color: "gray", fontStyle: "italic" }}>
                (Login to download)
              </span>
            )}
        
          </li>
        ))}
      </ul>
    </div>
  );
};

