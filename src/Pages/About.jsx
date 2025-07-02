import React from "react";

const About = () => {
  return (
    <div style={{ padding: "2rem", backgroundColor: "#F8F9FA", minHeight: "100vh" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", background: "#fff", padding: "2rem", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
        <h1 style={{ color: "#2CB8C6", fontSize: "2.5rem", marginBottom: "0.5rem" }}>About PrevYea</h1>
        <h3 style={{ color: "#666", marginBottom: "1.5rem" }}>Your One-Stop PYQ Search</h3>

        <p style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>
          <strong>PrevYea</strong> is a smart, student-first platform designed to simplify your exam preparation. Whether you're hunting for previous year papers, quick revision material, or just need instant help — Prevyea has got you covered.
        </p>

        <ul style={{ paddingLeft: "1.2rem", marginBottom: "1.5rem", lineHeight: "1.6" }}>
          <li><strong>📚 Previous Year Papers:</strong> Access a growing library of organized PYQs across subjects and universities.</li>
          <li><strong>🤖 AI Chatbot:</strong> Instantly get explanations, solve doubts, and navigate the platform easily — 24/7.</li>
          <li><strong>📝 Exam Cheat Sheets:</strong> Regularly updated, concise notes to help you revise smarter and faster.</li>
        </ul>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          Our mission is simple: make learning effortless, efficient, and accessible to every student preparing for competitive or semester exams.
        </p>

        <p style={{ fontSize: "1.1rem", fontStyle: "italic", color: "#555" }}>
          Whether you’re stuck on a topic, revising last minute, or planning ahead — Prevyea is your trusted companion.
        </p>
      </div>
    </div>
  );
};

export default About;
